
(function(){
  // 0.9.72: keep reconstruction research out of the normal mobile Results flow.
  // Diagnostics are opt-in and never participate in live selection.
  function closeAdvancedDiagnostics(){
    document.querySelectorAll('.diagnosticDetails').forEach(function(d){ d.open=false; });
  }
  function E(id){return document.getElementById(id)}
  function applyStartupDefaults(){
    var now=new Date();
    var iso=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
    if(E('date')) E('date').value=iso;
    if(E('todate')) E('todate').value=iso;
    if(E('place')) E('place').value='Coimbatore, Tamil Nadu, India';
    if(E('lat')) E('lat').value='11:00:00';
    if(E('latdir')) E('latdir').value='N';
    if(E('lon')) E('lon').value='76:58:00';
    if(E('londir')) E('londir').value='E';
    if(E('tz')) E('tz').value='05:30:00';
    if(E('tzdir')) E('tzdir').value='East of UT';
    if(E('status')) E('status').textContent='Ready. Default location: Coimbatore, Tamil Nadu, India. Select an event and tap Show.';
  }
  applyStartupDefaults();
  function compactDiagnostics(){
    var sec=E('results'); if(!sec || sec.dataset.compacted) return;
    var titles=['V1.5.11 Decision Trace — 0.9.67','Selection Engine Diagnostic — 0.9.69','0.9.69 — Transit Reason-Chain Reconstruction','0.9.69 — Reason-Chain Structural Profile (diagnostic)','Analysis'];
    Array.from(sec.querySelectorAll('.panel')).forEach(function(panel){
      var title=panel.querySelector('.titlebar'); if(!title) return;
      if(titles.indexOf(title.textContent.trim())<0) return;
      var d=document.createElement('details'); d.className='diagnosticDetails';
      var sum=document.createElement('summary'); sum.textContent=title.textContent.trim()+' — Advanced diagnostic';
      panel.parentNode.insertBefore(d,panel); d.appendChild(sum); d.appendChild(panel);
    });
    sec.dataset.compacted='1';
    closeAdvancedDiagnostics();
  }

  closeAdvancedDiagnostics();
  window.setTimeout(closeAdvancedDiagnostics, 0);

  function dms(v){var a=String(v||'').trim().split(':').map(Number);if(!a.length||a.some(isNaN))return NaN;return(a[0]||0)+(a[1]||0)/60+(a[2]||0)/3600}
  function gpsStatus(text,kind){
    var old=E('gpsStatus');
    if(!old){old=document.createElement('div');old.id='gpsStatus';old.style.cssText='position:fixed;left:12px;right:12px;bottom:18px;z-index:9999;background:#fff;border:2px solid #1976a8;border-radius:8px;padding:14px;box-shadow:0 4px 18px rgba(0,0,0,.25);font:16px Arial;color:#17313d';document.body.appendChild(old)}
    old.textContent=text;
    if(kind==='ok')old.style.borderColor='#2e7d32';
    if(kind==='error')old.style.borderColor='#c62828';
  }
  function closeGpsStatus(){var x=E('gpsStatus');if(x)x.remove()}
  function gpsDMS(value){
    var a=Math.abs(Number(value)),deg=Math.floor(a);
    var minFloat=(a-deg)*60,min=Math.floor(minFloat);
    var sec=(minFloat-min)*60;
    return deg+':'+String(min).padStart(2,'0')+':'+sec.toFixed(3).padStart(6,'0');
  }
  function setFields(name,lat,lon,tzMinutes,accuracy){
    // Keep the actual GPS coordinates. Do not snap them to the nearest city/place.
    var label='Live GPS';
    if(Number.isFinite(accuracy)) label+=' (±'+Math.round(accuracy)+' m)';
    E('place').value=name || label+' '+lat.toFixed(8)+', '+lon.toFixed(8);
    E('lat').value=gpsDMS(lat);
    E('latdir').value=lat<0?'S':'N';
    E('lon').value=gpsDMS(lon);
    E('londir').value=lon<0?'W':'E';
    if(Number.isFinite(tzMinutes)){
      var m=Math.round(tzMinutes),sign=m<0?-1:1,am=Math.abs(m);
      E('tz').value=String(Math.floor(am/60)).padStart(2,'0')+':'+String(am%60).padStart(2,'0')+':00';
      E('tzdir').value=sign<0?'West of UT':'East of UT';
    }
  }
  function reverse(lat,lon,done){
    var u='https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+encodeURIComponent(lat)+'&lon='+encodeURIComponent(lon)+'&zoom=18&addressdetails=1';
    fetch(u,{headers:{'Accept':'application/json'}})
      .then(function(r){return r.ok?r.json():Promise.reject(new Error('reverse lookup failed'))})
      .then(function(j){
        var a=j.address||{};
        var name=a.road||a.neighbourhood||a.suburb||a.city_district||a.city||a.town||a.village||'Live GPS';
        done(name);
      })
      .catch(function(){done(null)});
  }
  function decimalToDMS(value){
    var n=Number(value),a=Math.abs(n),deg=Math.floor(a),mf=(a-deg)*60,min=Math.floor(mf),sec=(mf-min)*60;
    return deg+':'+String(min).padStart(2,'0')+':'+sec.toFixed(3).padStart(6,'0');
  }
  function applyLocation(name,lat,lon,tzText,tzDir){
    lat=Number(lat); lon=Number(lon);
    if(!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180){
      gpsStatus('❌ Invalid custom latitude/longitude.','error'); return false;
    }
    E('place').value=name||('Custom Location '+lat.toFixed(8)+', '+lon.toFixed(8));
    E('lat').value=decimalToDMS(lat); E('latdir').value=lat<0?'S':'N';
    E('lon').value=decimalToDMS(lon); E('londir').value=lon<0?'W':'E';
    if(tzText){
      var z=String(tzText).trim();
      E('tz').value=z;
      E('tzdir').value=tzDir||'East of UT';
    }
    return true;
  }
  function renderPlaceResults(items){
    var box=E('placeResults'); if(!box)return;
    if(!items.length){box.innerHTML='<div class="muted">No matching places found. Try a city, district, village or landmark name.</div>';return;}
    box.innerHTML=items.map(function(x,i){
      var lat=Number(x.lat),lon=Number(x.lon),name=(x.display_name||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      return '<button class="placeResult" type="button" data-place-index="'+i+'"><b>'+name.split(',')[0]+'</b><small>'+name+'<br>Lat '+lat.toFixed(6)+' | Lon '+lon.toFixed(6)+'</small></button>';
    }).join('');
    box.querySelectorAll('.placeResult').forEach(function(btn){btn.addEventListener('click',function(){
      var x=items[Number(btn.dataset.placeIndex)];
      var ok=applyLocation(x.display_name,Number(x.lat),Number(x.lon),x._reference?x.tz:null,x._reference?x.tzDir:null);
      if(ok){gpsStatus('✅ Custom/place location applied.\nLatitude: '+Number(x.lat).toFixed(8)+'\nLongitude: '+Number(x.lon).toFixed(8)+'\n\nThe Data tab now uses these coordinates.','ok');setTimeout(closeGpsStatus,3500);document.querySelector('[data-t="data"]').click();}
    })});
  }
  const REFERENCE_PLACES={
    'pallavaram':{name:'Pallavaram, Tamil Nadu, India',lat:12+58/60+34/3600,lon:80+11/60+1/3600,tz:'05:30:00',tzDir:'East of UT'},
    'pallavaram tamil nadu':{name:'Pallavaram, Tamil Nadu, India',lat:12+58/60+34/3600,lon:80+11/60+1/3600,tz:'05:30:00',tzDir:'East of UT'},
    'pallavaram, tamil nadu, india':{name:'Pallavaram, Tamil Nadu, India',lat:12+58/60+34/3600,lon:80+11/60+1/3600,tz:'05:30:00',tzDir:'East of UT'},
    'coimbatore':{name:'Coimbatore, Tamil Nadu, India',lat:11,lon:76+58/60,tz:'05:30:00',tzDir:'East of UT'},
    'coimbatore tamil nadu':{name:'Coimbatore, Tamil Nadu, India',lat:11,lon:76+58/60,tz:'05:30:00',tzDir:'East of UT'},
    'coimbatore, tamil nadu, india':{name:'Coimbatore, Tamil Nadu, India',lat:11,lon:76+58/60,tz:'05:30:00',tzDir:'East of UT'}
  };
  function referencePlace(q){
    var k=String(q||'').trim().toLowerCase();
    if(REFERENCE_PLACES[k]) return REFERENCE_PLACES[k];
    // Regression rule: any Pallavaram place label returned by a geocoder
    // (for example "Pallavaram, Siva S...") must resolve to the exact
    // V1.5.11 Pallavaram coordinates used by the original screenshots.
    if(/\bpallavaram\b/.test(k)) return REFERENCE_PLACES['pallavaram'];
    return null;
  }

  let LOCAL_PLACES=null, LOCAL_TZ=null, LOCAL_PLACE_LOADING=null;
  async function loadLocalPlaceDB(){
    if(LOCAL_PLACES) return true;
    if(LOCAL_PLACE_LOADING) return LOCAL_PLACE_LOADING;
    LOCAL_PLACE_LOADING=(async function(){
      try{
        var r=await fetch('data/places.json',{cache:'force-cache'}); if(!r.ok) throw new Error('places.json '+r.status);
        var j=await r.json(); LOCAL_PLACES=j.places||[]; LOCAL_TZ=j.timezones||{};
        var st=E('placeDbStatus'); if(st)st.textContent='Place DB: 97,875 local records';
        return true;
      }catch(e){console.warn('Local place DB unavailable',e);var st=E('placeDbStatus');if(st)st.textContent='Place DB: fallback geocoder';return false;}
    })();
    return LOCAL_PLACE_LOADING;
  }
  function localPlaceSearch(q){
    if(!LOCAL_PLACES||!LOCAL_PLACES.length)return [];
    var terms=String(q||'').trim().toLowerCase().split(/\s+/).filter(Boolean);
    if(!terms.length)return [];
    var scored=[];
    for(var i=0;i<LOCAL_PLACES.length;i++){
      var x=LOCAL_PLACES[i], hay=x[1].toLowerCase()+' '+x[2].toLowerCase()+' '+x[3].toLowerCase();
      var ok=true; for(var k=0;k<terms.length;k++) if(hay.indexOf(terms[k])<0){ok=false;break;}
      if(!ok)continue;
      var score=0, name=x[1].toLowerCase();
      if(name===String(q).trim().toLowerCase())score+=1000;
      if(name.indexOf(String(q).trim().toLowerCase())===0)score+=500;
      if(name.indexOf(terms[0])===0)score+=100;
      score+=Math.max(0,50-name.length/10);
      scored.push([score,x]);
      if(scored.length>300) scored.sort(function(a,b){return b[0]-a[0]}),scored.length=120;
    }
    scored.sort(function(a,b){return b[0]-a[0]});
    return scored.slice(0,8).map(function(pair){
      var x=pair[1],tz=LOCAL_TZ[String(x[13])]||[0,0,1];
      var lat=x[4]+x[5]/60+x[6]/3600;if(x[7]==='S')lat=-lat;
      var lon=x[8]+x[9]/60+x[10]/3600;if(x[11]==='W')lon=-lon;
      var tzmins=(tz[0]*60+tz[1])*(tz[2]===-1?-1:1);
      var tztext=String(Math.floor(Math.abs(tzmins)/60)).padStart(2,'0')+':'+String(Math.abs(tzmins)%60).padStart(2,'0')+':00';
      return {display_name:x[1]+', '+x[3]+', '+x[2],lat:String(lat),lon:String(lon),tz:tztext,tzDir:tzmins<0?'West of UT':'East of UT',_local:true};
    });
  }
  async function searchPlaces(){
    var q=(E('placeSearch')&&E('placeSearch').value||'').trim();
    if(!q){gpsStatus('Enter a place name first.','error');return;}
    var btn=E('placeSearchBtn'); if(btn){btn.disabled=true;btn.textContent='Searching…'}
    try{
      var ref=referencePlace(q);
      if(ref){
        renderPlaceResults([{display_name:ref.name,lat:String(ref.lat),lon:String(ref.lon),tz:ref.tz,tzDir:ref.tzDir,_reference:true}]);
        var box=E('placeResults');
        if(box){var btn0=box.querySelector('.placeResult');if(btn0)btn0.click();}
        return;
      }
      await loadLocalPlaceDB();
      var local=localPlaceSearch(q);
      if(local.length){ renderPlaceResults(local); return; }
      var u='https://nominatim.openstreetmap.org/search?format=jsonv2&limit=8&addressdetails=1&q='+encodeURIComponent(q);
      var r=await fetch(u,{headers:{'Accept':'application/json'}}); if(!r.ok)throw new Error('Place search failed');
      var data=await r.json(); renderPlaceResults(data);
      if(!data.length)gpsStatus('No place found for “'+q+'”. Try a broader name.','error');
    }catch(e){gpsStatus('❌ Place search failed. Check your internet connection and try again.','error')}
    finally{if(btn){btn.disabled=false;btn.textContent='Search'}}
  }
  function applyCustomLocation(){
    var name=(E('customPlace')&&E('customPlace').value||'').trim()||'Custom Location';
    var lat=Number(E('customLat').value),lon=Number(E('customLon').value);
    var tz=E('customTz').value.trim()||'05:30:00';
    var latDir=E('customLatDir').value,lonDir=E('customLonDir').value;
    if(latDir==='S')lat=-Math.abs(lat);else lat=Math.abs(lat);
    if(lonDir==='W')lon=-Math.abs(lon);else lon=Math.abs(lon);
    if(applyLocation(name,lat,lon,tz,'East of UT')){gpsStatus('✅ Custom location applied.\nLatitude: '+lat.toFixed(8)+'\nLongitude: '+lon.toFixed(8)+'\nTime Zone: '+tz+' East of UT','ok');setTimeout(closeGpsStatus,3500);document.querySelector('[data-t="data"]').click();}
  }
  async function findPlaceFromDataField(){
    var q=(E('place').value||'').trim();
    if(!q)return;
    if(/^Live GPS/i.test(q)||/^Custom Location/i.test(q))return;
    var btn=E('findPlace'); if(btn){btn.disabled=true;btn.textContent='Finding…'}
    try{
      var ref=referencePlace(q);
      if(ref){
        applyLocation(ref.name,ref.lat,ref.lon,ref.tz,ref.tzDir);
        gpsStatus('✅ Reference location applied.\nLatitude: '+Number(ref.lat).toFixed(8)+'\nLongitude: '+Number(ref.lon).toFixed(8)+'\nTime Zone: '+ref.tz+' '+ref.tzDir,'ok');
        setTimeout(closeGpsStatus,3500);
        return;
      }
      await loadLocalPlaceDB();
      var local=localPlaceSearch(q);
      if(local.length){ applyLocation(local[0].display_name,Number(local[0].lat),Number(local[0].lon),local[0].tz,local[0].tzDir); gpsStatus('✅ Local place database match applied.\n'+local[0].display_name,'ok'); setTimeout(closeGpsStatus,3000); return; }
      var u='https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=1&q='+encodeURIComponent(q);
      var r=await fetch(u,{headers:{'Accept':'application/json'}}); if(!r.ok)throw new Error('Place lookup failed');
      var data=await r.json();
      if(!data.length){gpsStatus('❌ Could not find “'+q+'”. Use PlaceSelect search or enter custom coordinates.','error');return;}
      var x=data[0];
      applyLocation(x.display_name,Number(x.lat),Number(x.lon),null,null);
      gpsStatus('✅ Location found and coordinates updated.\nLatitude: '+Number(x.lat).toFixed(8)+'\nLongitude: '+Number(x.lon).toFixed(8)+'\n\nThe Data tab now uses the selected place.','ok');
      setTimeout(closeGpsStatus,3500);
    }catch(e){gpsStatus('❌ Place lookup failed. Check your internet connection and try again.','error')}
    finally{if(btn){btn.disabled=false;btn.textContent='🔎 Find'}}
  }
  function attachPlaceTools(){
    var sb=E('placeSearchBtn'),ac=E('applyCustom'),fb=E('findPlace');
    // Use direct onclick handlers here rather than relying only on addEventListener.
    // This is more robust on mobile Chrome/GitHub Pages and also prevents duplicate
    // handlers if the UI is reattached after navigation.
    if(sb)sb.onclick=searchPlaces;
    if(ac)ac.onclick=applyCustomLocation;
    if(fb){
      fb.__kpDirectBound=true; fb.onclick=function(e){ e.preventDefault(); e.stopPropagation(); return findPlaceFromDataField(); };
      fb.setAttribute('aria-label','Find place and update coordinates');
    }
    var ps=E('placeSearch'); if(ps)ps.onkeydown=function(e){if(e.key==='Enter'){e.preventDefault();searchPlaces()}};
    var pl=E('place'); if(pl)pl.onkeydown=function(e){if(e.key==='Enter'){e.preventDefault();findPlaceFromDataField()}};
  }
  // Expose the Data-tab Find action for a reliable mobile fallback/debug hook.
  window.kpFindPlace=function(){return findPlaceFromDataField();};
  function finishButton(btn){if(btn){btn.disabled=false;btn.textContent=btn.id==='gps2'?'📍 Use Current GPS Location':'📍 GPS'}}
  function getGPS(e){
    var btn=e&&e.currentTarget?e.currentTarget:null;
    if(btn){btn.disabled=true;btn.textContent='📍 Locating…'}
    gpsStatus('📍 GPS: requesting your phone’s high-accuracy location…');
    var nav=window.navigator;
    if(!window.isSecureContext){gpsStatus('❌ GPS requires HTTPS. Please open the GitHub Pages https:// address.','error');finishButton(btn);return;}
    if(!nav.geolocation){gpsStatus('❌ This browser does not provide GPS/geolocation. Open the site directly in Chrome.','error');finishButton(btn);return;}
    var done=false;
    function success(pos){
      if(done)return;
      var c=pos.coords;
      var lat=Number(c.latitude),lon=Number(c.longitude),accuracy=Number(c.accuracy);
      if(!Number.isFinite(lat)||!Number.isFinite(lon)){fail({message:'Invalid GPS coordinates returned by the device.'});return;}
      done=true;
      // Use the phone's current timezone for the event data. GPS coordinates remain untouched.
      var tz=-new Date().getTimezoneOffset();
      setFields(null,lat,lon,tz,accuracy);
      gpsStatus('✅ LIVE GPS LOCATION RECEIVED\nLatitude: '+lat.toFixed(8)+'\nLongitude: '+lon.toFixed(8)+'\nAccuracy: ±'+(Number.isFinite(accuracy)?Math.round(accuracy):'?')+' m\n\nThe exact GPS coordinates are now in Data.');
      // Reverse lookup is display-only: it can change the place name, never the coordinates.
      reverse(lat,lon,function(name){
        if(name) E('place').value='Live GPS — '+name+' (±'+(Number.isFinite(accuracy)?Math.round(accuracy):'?')+' m)';
        finishButton(btn);
        setTimeout(function(){closeGpsStatus()},4500);
      });
      if(!Number.isFinite(accuracy)) finishButton(btn);
    }
    function fail(err){
      if(done)return;done=true;
      var text='❌ GPS failed.';
      if(err&&err.code===1)text='❌ Location permission was denied. In Chrome: tap 🔒 → Permissions → Location → Allow, then reload the page.';
      else if(err&&err.code===2)text='❌ Phone location is unavailable. Turn ON Android Location and try again.';
      else if(err&&err.code===3)text='❌ GPS timed out. Turn ON Android Location and try again; if indoors, move near a window.';
      else if(err&&err.message)text+=' '+err.message;
      gpsStatus(text,'error');finishButton(btn);
    }
    try{
      nav.geolocation.getCurrentPosition(success,fail,{
        enableHighAccuracy:true,
        timeout:90000,
        maximumAge:0
      });
    }catch(ex){fail({message:ex.message})}
  }
  function attach(){
    var a=E('gps'),b=E('gps2');
    if(a)a.addEventListener('click',getGPS);
    if(b)b.addEventListener('click',getGPS);
    attachPlaceTools();
  }
  document.addEventListener('click',function(e){
    var b=e.target && e.target.closest ? e.target.closest('#findPlace') : null;
    if(b && !b.__kpDirectBound && typeof window.kpFindPlace==='function'){
      e.preventDefault(); e.stopPropagation(); window.kpFindPlace();
    }
  },true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',attach);else attach();
})();

// Web 1.93 compatibility guard: expose the native GetPlanetSgnf reconstruction
// on window so Android/PWA scope/caching cannot make it unavailable to the
// Analysis evaluator. This is the exact V1.5.11 occupied-cusp + rasi-lord-cusp
// mapping used by CEphAnalysis::PlanetSgnfString/GetBmmString.
window.v1511PlanetSgnf = window.v1511PlanetSgnf || function(name, cd){
  const p=cd && cd.planets ? cd.planets[name] : null;
  if(!p) return null;
  const occ=Number.isFinite(Number(p.cuspId)) ? Number(p.cuspId) : Math.max(0,Number(p.house)-1);
  const owners=[-1,-1,-1,-1];
  let k=0;
  for(const c of (cd.cusps||[])){
    const lord=(c && (c.rasiLordId ?? c.sign_lord));
    if(lord===name && k<4){ owners[k++]=Number(c.cuspId ?? (Number(c.house)-1)); }
  }
  return {planet:name,occId:occ,ownerIds:owners,occ:occ+1,owners:owners.filter(x=>x>=0).map(x=>x+1)};
};
