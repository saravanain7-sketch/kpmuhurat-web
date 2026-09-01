from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs
import json, os, sys, sqlite3, math
from datetime import datetime, timedelta
import swisseph as swe

ROOT=os.path.dirname(os.path.abspath(__file__))
STATIC=os.path.join(ROOT,'static')
EVENT_FILE=os.path.join(ROOT,'event_rules.json')
DB_FILE=os.path.join(ROOT,'KPMuhurat_PlaceDB.sqlite')
with open(EVENT_FILE,encoding='utf-8') as f: EVENT_RULES=json.load(f)

swe.set_sid_mode(swe.SIDM_KRISHNAMURTI)
SIGNS=['Ar','Ta','Ge','Cn','Le','Vi','Li','Sc','Sg','Cp','Aq','Pi']
RASI_LORD=['Ma','Ve','Me','Mo','Su','Me','Ve','Ma','Ju','Sa','Sa','Ju']
PLANETS=[('Su',swe.SUN),('Mo',swe.MOON),('Ma',swe.MARS),('Me',swe.MERCURY),('Ju',swe.JUPITER),('Ve',swe.VENUS),('Sa',swe.SATURN),('Ra',swe.MEAN_NODE)]
STAR_LORDS=['Ke','Ve','Su','Mo','Ma','Ra','Ju','Sa','Me']
VIM={'Ke':7,'Ve':20,'Su':6,'Mo':10,'Ma':7,'Ra':18,'Ju':16,'Sa':19,'Me':17}
VIM_SEQ=STAR_LORDS[:]
NAK=13+20/60

# Object codes 101-104 are the four period levels visible in KPMuhurat results.
PERIOD_CODES={101:'Dasa',102:'Bhukti',103:'Antara',104:'Sukshma'}

def jd_local(dt,tz):
    u=dt-timedelta(hours=tz)
    return swe.julday(u.year,u.month,u.day,u.hour+u.minute/60+u.second/3600)

def dms_value(s):
    a=[float(x) for x in str(s).strip().split(':')]
    return a[0]+(a[1]/60 if len(a)>1 else 0)+(a[2]/3600 if len(a)>2 else 0)

def parse_input(inp):
    lat=dms_value(inp.get('lat','13:39:00'))
    if inp.get('lat_dir','N')=='S': lat=-lat
    lon=dms_value(inp.get('lon','79:25:00'))
    if inp.get('lon_dir','E')=='W': lon=-lon
    tz=dms_value(inp.get('tz','05:30:00'))
    if inp.get('tz_dir','East of UT')=='West of UT': tz=-tz
    return lat,lon,tz

def asc_cusps(dt,lat,lon,tz):
    jd=jd_local(dt,tz)
    cusps,ascmc=swe.houses_ex(jd,lat,lon,b'P',swe.FLG_SIDEREAL)
    return [c%360 for c in cusps], ascmc[0]%360

def kp_parts(L):
    L%=360; si=int(L//30); nk=int(L//NAK); rem=L-nk*NAK
    star=STAR_LORDS[nk%9]
    seq=[STAR_LORDS[(nk+i)%9] for i in range(9)]
    x=0.0
    for p in seq:
        w=NAK*VIM[p]/120
        if rem < x+w-1e-12:
            return SIGNS[si],RASI_LORD[si],star,p,L,nk
        x+=w
    return SIGNS[si],RASI_LORD[si],star,seq[-1],L,nk

def planet_positions(dt,lat,lon,tz):
    jd=jd_local(dt,tz); out={}
    for name,pid in PLANETS:
        xx,_=swe.calc_ut(jd,pid,swe.FLG_SWIEPH|swe.FLG_SIDEREAL)
        out[name]=xx[0]%360
    # Ketu is opposite mean node.
    out['Ke']=(out['Ra']+180)%360
    return out

def house_for_lon(L,cusps):
    # Placidus cusps are 1..12. Find circular interval cusp[i] -> cusp[i+1].
    for i in range(12):
        a=cusps[i]; b=cusps[(i+1)%12]
        x=(L-a)%360; span=(b-a)%360
        if span==0: continue
        if x < span or abs(x-span)<1e-9:
            return i+1
    return 12

def chart_data(dt,lat,lon,tz):
    cusps,asc=asc_cusps(dt,lat,lon,tz)
    pp=planet_positions(dt,lat,lon,tz)
    planets={}
    for name,L in pp.items():
        s,snl,stl,sbl,lon2,nk=kp_parts(L)
        planets[name]={'lon':lon2,'sign':s,'sign_lord':snl,'star_lord':stl,'sub_lord':sbl,'house':house_for_lon(lon2,cusps)}
    cusp_rows=[]
    for i,L in enumerate(cusps,1):
        s,snl,stl,sbl,lon2,nk=kp_parts(L)
        cusp_rows.append({'house':i,'lon':lon2,'sign':s,'sign_lord':snl,'star_lord':stl,'sub_lord':sbl})
    return {'ascendant':kp_parts(asc),'cusps':cusp_rows,'planets':planets}

def owned_houses(planet,cd):
    # Houses are owned by the zodiac signs counted from the ascendant sign.
    # This is essential for KP CSL significators (e.g. Taurus Lagna makes
    # Jupiter lord of houses 8 and 11, not zodiac signs 9 and 12).
    asc_sign=cd['ascendant'][0]
    asc_idx=SIGNS.index(asc_sign)
    return [h for h in range(1,13) if RASI_LORD[(asc_idx+h-1)%12]==planet]

def significators(name,cd):
    p=cd['planets'][name]
    houses=set([p['house']]+owned_houses(name,cd))
    star=p['star_lord']
    if star in cd['planets']:
        sp=cd['planets'][star]
        houses.add(sp['house']); houses.update(owned_houses(star,cd))
    # KP node convention: add sign-lord and star-lord indications.
    if name in ('Ra','Ke'):
        signlord=p['sign_lord']
        if signlord in cd['planets']:
            sl=cd['planets'][signlord]
            houses.add(sl['house']); houses.update(owned_houses(signlord,cd))
    return sorted(houses)

def cusp_significators(house,cd):
    c=cd['cusps'][house-1]; sub=c['sub_lord']
    return sub, significators(sub,cd) if sub in cd['planets'] else []

def parse_rule_groups(fields):
    # Extracted syntax: object:type:condition:houses...[:condition:houses...][:0].
    # Condition markers are 1..6. The original data uses one or two groups;
    # a second group is identifiable when it occurs after >=2 house values and
    # leaves >=2 values. Otherwise the tail is one group.
    if len(fields)<3: return {'object':fields[0] if fields else 0,'type':fields[1] if len(fields)>1 else 0,'groups':[]}
    tail=fields[2:]
    if tail and tail[-1]==0: tail=tail[:-1]
    groups=[]
    first_marker=tail[0]
    split=None
    for i in range(3,min(6,len(tail)-1)+1):
        if tail[i] in range(1,7) and len(tail)-i-1>=2:
            split=i; break
    if split is None:
        groups=[{'condition':first_marker,'houses':[x for x in tail[1:] if 1<=x<=12]}]
    else:
        groups=[{'condition':first_marker,'houses':[x for x in tail[1:split] if 1<=x<=12]},
                {'condition':tail[split],'houses':[x for x in tail[split+1:] if 1<=x<=12]}]
    return {'object':fields[0],'type':fields[1],'groups':groups}

def rule_for_event(event_index):
    if not EVENT_RULES: return None
    try:return EVENT_RULES[int(event_index)]
    except:return EVENT_RULES[0]

def rule_object_houses(obj,dt,cd,natal_periods=None):
    if 1<=obj<=12:
        sub,hs=cusp_significators(obj,cd); return sub,hs
    if obj in (101,102,103,104) and natal_periods:
        p=natal_periods.get(PERIOD_CODES[obj])
        if p and p in cd['planets']:
            return p,significators(p,cd)
    return None,[]

def eval_rule(rule,cd,periods=None):
    parsed=parse_rule_groups(rule['fields'])
    obj=parsed['object']; typ=parsed['type']
    sub,hs=rule_object_houses(obj,None,cd,periods)
    H=set(hs)
    groups=parsed['groups']
    if not groups: return {'yn':'-','positive':[],'negative':[],'reason':'No rule conditions','object':obj,'type':typ,'sub_lord':sub}
    pos=set(groups[0]['houses']); neg=set(groups[1]['houses']) if len(groups)>1 else set()
    pos_hit=sorted(H&pos); neg_hit=sorted(H&neg)
    # Generic interpretation of the extracted rule language:
    # first house group is required; second group is prohibited.
    yn='Y' if pos_hit and not neg_hit else 'N'
    if not pos_hit: reason=f'{sub or "Object"} has no connection with required houses {sorted(pos)}'
    elif neg_hit: reason=f'{sub} has connection with prohibited houses {neg_hit}'
    else: reason=f'{sub} connects with houses {pos_hit}; no connection with {sorted(neg)}' if neg else f'{sub} connects with required houses {pos_hit}'
    return {'yn':yn,'positive':sorted(pos),'negative':sorted(neg),'pos_hit':pos_hit,'neg_hit':neg_hit,'reason':reason,'object':obj,'type':typ,'sub_lord':sub,'significators':sorted(H)}

def choose_event_rule(event, obj):
    rr=[r for r in event.get('rules',[]) if r['fields'] and r['fields'][0]==obj]
    return rr[0] if rr else None

def event_analysis(event,cd,periods=None):
    rows=[]
    for r in event.get('rules',[]):
        if r['fields'] and r['fields'][0] in list(range(1,13))+[101,102,103,104]:
            rows.append(eval_rule(r,cd,periods))
    return rows

def vim_periods(dt, birth_dt=None, birth_lat=None,birth_lon=None,birth_tz=None):
    # If birth data are supplied, calculate natal Vimshottari; otherwise use the
    # event chart and clearly label it as event-chart periods.
    base=birth_dt if birth_dt else dt; lat=birth_lat if birth_lat is not None else 0; lon=birth_lon if birth_lon is not None else 0; tz=birth_tz if birth_tz is not None else 0
    jd=jd_local(base,tz)
    moon=swe.calc_ut(jd,swe.MOON,swe.FLG_SWIEPH|swe.FLG_SIDEREAL)[0][0]%360
    nak_index=int(moon//NAK); lord=STAR_LORDS[nak_index%9]
    elapsed=(moon-nak_index*NAK)/NAK
    remaining=1-elapsed
    # Construct periods around base time. For natal chart, we need the balance at birth.
    periods=[]
    start=base
    seq=[]
    idx=STAR_LORDS.index(lord)
    for j in range(9): seq.append(STAR_LORDS[(idx+j)%9])
    first_years=VIM[lord]*remaining
    durations=[first_years]+[VIM[p] for p in seq[1:]]
    cur=start
    for p,yrs in zip(seq,durations):
        end=cur+timedelta(days=yrs*365.2425); periods.append((p,cur,end));cur=end
    if birth_dt:
        # Move forward in Mahadasha sequence until the requested event date.
        # Rebuild an extended sequence beginning at birth balance.
        cur=start; found=None
        seq_full=seq[:]
        for cycle in range(20):
            for k,p in enumerate(seq_full):
                yrs=durations[k] if cycle==0 else VIM[p]
                end=cur+timedelta(days=yrs*365.2425)
                if cur<=dt<end: found=(p,cur,end); break
                cur=end
            if found: break
            seq_full=[STAR_LORDS[(STAR_LORDS.index(x)+9)%9] for x in seq_full]
        if not found: return {'Dasa':None,'Bhukti':None,'Antara':None,'Sukshma':None,'mode':'natal'}
        md,mds,mde=found
        # Nested Vimshottari subdivision inside the selected Mahadasha.
        def subperiods(parent,start,end,parent_lord):
            out=[]; order=[STAR_LORDS[(STAR_LORDS.index(parent_lord)+i)%9] for i in range(9)]
            span=(end-start).total_seconds(); total=sum(VIM[x] for x in order)
            cur=start
            for x in order:
                sec=span*VIM[x]/total; e=cur+timedelta(seconds=sec); out.append((x,cur,e));cur=e
            return out
        b=next(x for x in subperiods(md,mds,mde,md) if x[1]<=dt<x[2])
        a=next(x for x in subperiods(b[0],b[1],b[2],b[0]) if x[1]<=dt<x[2])
        s=next(x for x in subperiods(a[0],a[1],a[2],a[0]) if x[1]<=dt<x[2])
        return {'Dasa':md,'Bhukti':b[0],'Antara':a[0],'Sukshma':s[0],'mode':'natal'}
    return {'Dasa':seq[0],'Bhukti':seq[1],'Antara':seq[2],'Sukshma':seq[3],'mode':'event'}

def transition_rows(start,end,lat,lon,tz):
    def key(t):
        a=asc_cusps(t,lat,lon,tz)[1]
        p=kp_parts(a); return (p[0],p[1],p[2],p[3])
    rows=[]; prev=key(start); t=start+timedelta(seconds=5)
    while t<=end:
        cur=key(t)
        if cur!=prev:
            lo,hi=t-timedelta(seconds=5),t
            for _ in range(45):
                mid=lo+(hi-lo)/2
                if key(mid)==prev: lo=mid
                else: hi=mid
            a=asc_cusps(hi,lat,lon,tz)[1]; p=kp_parts(a)
            rows.append({'time':hi.strftime('%H:%M:%S'),'rasi':p[0],'snl':p[1],'stl':p[2],'sbl':p[3],'date':hi.strftime('%Y-%m-%d')})
            prev=cur
        t+=timedelta(seconds=5)
    return rows

def analyze_time(dt,lat,lon,tz,event,periods):
    cd=chart_data(dt,lat,lon,tz)
    rows=event_analysis(event,cd,periods)
    # The event's house-1 baseline is always shown by the original event files.
    positive=[]; negative=[]
    for r in rows:
        positive.extend(r.get('pos_hit',[])); negative.extend(r.get('neg_hit',[]))
    # Overall decision: required event rule must pass and no prohibitive connection.
    active=[r for r in rows if r['object'] in (1,11)]
    yn='Y' if active and all(r['yn']=='Y' for r in active) else 'N'
    reason='; '.join(r['reason'] for r in active if r['reason'])[:1000]
    return {'time':dt.strftime('%H:%M:%S'),'date':dt.strftime('%Y-%m-%d'),'yn':yn,'reason':reason,'chart':cd,'rules':rows,'periods':periods}

def calculate(inp):
    lat,lon,tz=parse_input(inp)
    y,m,d=map(int,inp['date'].split('-')); h1,m1=map(int,inp['from'].split(':')); h2,m2=map(int,inp['to'].split(':'))
    start=datetime(y,m,d,h1,m1); end=datetime(y,m,d,h2,m2)
    event=rule_for_event(inp.get('event_index',0))
    # Optional natal dasha input.
    birth=None
    if inp.get('birth_date') and inp.get('birth_time'):
        by,bm,bd=map(int,inp['birth_date'].split('-')); bh,bmi,bs=map(int,(inp['birth_time']+':00').split(':')[:3]) if len(inp['birth_time'].split(':'))==2 else map(int,inp['birth_time'].split(':'))
        birth=datetime(by,bm,bd,bh,bmi,bs)
    periods=vim_periods(start,birth,lat,lon,tz)
    transitions=transition_rows(start,end,lat,lon,tz)
    candidates=[]
    # Evaluate at each transition; also evaluate start so a short window can produce a result.
    times=[start]+[datetime(y,m,d,*map(int,r['time'].split(':'))) for r in transitions]
    for dt in times:
        if start<=dt<=end:
            a=analyze_time(dt,lat,lon,tz,event,periods)
            # Reconstructed Muhurat selector: require the primary Lagna/11th
            # CSL tests to pass. This is intentionally separate from the
            # displayed sub-level row Y/N values, as in the original UI.
            rr={r['object']:r for r in a['rules']}
            if rr.get(1,{}).get('yn')=='Y' and rr.get(11,{}).get('yn')=='Y': candidates.append(a)
    # Include all transition rows, with sub-level result columns.
    for r in transitions:
        dt=datetime(y,m,d,*map(int,r['time'].split(':')))
        a=analyze_time(dt,lat,lon,tz,event,periods)
        r['yn']=a['yn']; r['reason']=a['reason']; r['analysis']=a
    chosen=[]
    for a in candidates:
        p=a['chart']['ascendant']; chosen.append({'date':a['date'],'time':a['time'],'snl':p[1],'stl':p[2],'sbl':p[3],'yn':'Y','analysis':a})
    return {'settings':{'ayanamsa':'Krishnamurti','house_system':'Placidus','engine':'Swiss Ephemeris'},'lagna':transitions,'chosen':chosen,'event':event,'periods':periods,'status':'Extracted event rules are interpreted; Y/N and significator logic are marked reconstructed and require regression testing against V1.5.11.'}

def place_search(q):
    db=sqlite3.connect(DB_FILE)
    rows=db.execute('select id,name,country,state,latDeg,latMnt,latSec,latDir,longDeg,longMnt,longSec,longDir,elevation,timeZone from place where lower(name) like ? order by name limit 25',('%'+q.lower()+'%',)).fetchall();db.close()
    return [dict(id=r[0],name=r[1],country=r[2],state=r[3],latitude=f'{r[4]}:{r[5]:02d}:{r[6]:02d} {r[7]}',longitude=f'{r[8]}:{r[9]:02d}:{r[10]:02d} {r[11]}',elevation=r[12],timeZone=r[13]) for r in rows]

class H(BaseHTTPRequestHandler):
    def send_json(self,obj,code=200):
        b=json.dumps(obj,ensure_ascii=False,default=str).encode();self.send_response(code);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b)
    def do_POST(self):
        if urlparse(self.path).path!='/api/calculate': self.send_json({'error':'not found'},404);return
        n=int(self.headers.get('Content-Length','0')); inp=json.loads(self.rfile.read(n))
        try:self.send_json(calculate(inp))
        except Exception as e:self.send_json({'error':str(e)},400)
    def do_GET(self):
        u=urlparse(self.path);p=u.path
        if p=='/api/health': self.send_json({'ok':True,'engine':'KP/Swiss Ephemeris','ayanamsa':'Krishnamurti','events':len(EVENT_RULES)});return
        if p=='/api/events': self.send_json([{'index':i,'name':e['name'],'rule_count':e['rule_count_declared'],'remarks':e.get('remarks','')} for i,e in enumerate(EVENT_RULES)]);return
        if p=='/api/event-rules': self.send_json(EVENT_RULES);return
        if p=='/api/place/search':
            try:self.send_json(place_search(parse_qs(u.query).get('q',[''])[0]))
            except Exception:self.send_json([])
            return
        if p=='/api/place/tirupati': self.send_json(place_search('Tirupati'));return
        if p=='/':p='/index.html'
        fp=os.path.normpath(os.path.join(STATIC,p.lstrip('/')))
        if not fp.startswith(STATIC) or not os.path.isfile(fp): self.send_error(404);return
        typ='text/html' if fp.endswith('.html') else 'text/css' if fp.endswith('.css') else 'application/javascript'
        b=open(fp,'rb').read();self.send_response(200);self.send_header('Content-Type',typ);self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b)

if __name__=='__main__':
    port=int(sys.argv[1]) if len(sys.argv)>1 else 8000
    print(f'KPMuhurat Web reconstructed engine: http://127.0.0.1:{port}')
    ThreadingHTTPServer(('0.0.0.0',port),H).serve_forever()
