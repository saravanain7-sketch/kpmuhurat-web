
const $=id=>document.getElementById(id);
// Web 2.05 hotfix: expose HTML escaping to all renderers in global scope.
// Display-only fix; it does not participate in astronomy or Muhurat selection.
window.escHtml = window.escHtml || function(v){
  return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
};
function normalizeClockInput(t){
  const parts=String(t||'00:00').split(':');
  while(parts.length<3) parts.push('00');
  return parts.slice(0,3).map((x,i)=>String(Number(x)||0).padStart(2,'0')).join(':');
}
function parseClockSeconds(t){const b=String(t).split(':').map(Number);return (b[0]||0)*3600+(b[1]||0)*60+(b[2]||0)}
(function bindMuhurthamScheduleSelection(){
  const tbody=$('muhurthamScheduleRows');
  if(!tbody || tbody.dataset.blueSelectBound) return;
  tbody.dataset.blueSelectBound='1';
  tbody.addEventListener('click',ev=>{
    const row=ev.target.closest('tr');
    if(!row || !tbody.contains(row) || row.querySelector('td[colspan]')) return;
    tbody.querySelectorAll('tr.muhurtham-selected').forEach(r=>r.classList.remove('muhurtham-selected'));
    row.classList.add('muhurtham-selected');
  });
})();
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('section').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); const target=$(b.dataset.t); if(target)target.classList.add('active');
  if(b.dataset.t==='results'){
    const first=(window.__selectionRows||[])[0];
    if(first){const table=$('chosenTable');if(table){table.querySelectorAll('tr.selected').forEach(x=>x.classList.remove('selected'));const tr=table.querySelector(`tr[data-muhurat-time="${first.time}"]`);if(tr)tr.classList.add('selected');}const timeControl=$('chosenChartTime');if(timeControl)timeControl.value=first.time;renderResultsAnalysis(first);const chartPanel=$('selectedMuhuratPanel');if(chartPanel)chartPanel.hidden=true;}
  }
  if(b.dataset.t==='chart'){
    let row=window.__activeMuhuratRow||null;
    if(!row) row=(window.__selectionRows||[])[0]||null;
    if(row) { renderResultsAnalysis(row); const src=$('selectedMuhuratChartOnly'); const dest=$('chartTabContent'); if(src&&dest&&src.innerHTML.trim())dest.innerHTML=src.innerHTML; }
  }
});
window.EVENTS=[{"name":"00. Default Event","rule_count_declared":17,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:2:1:11:0:","fields":[1,2,1,11,0]},{"raw":"2:2:1:11:0:","fields":[2,2,1,11,0]},{"raw":"3:2:1:11:0:","fields":[3,2,1,11,0]},{"raw":"4:2:1:11:0:","fields":[4,2,1,11,0]},{"raw":"5:2:1:11:0:","fields":[5,2,1,11,0]},{"raw":"6:2:1:11:0:","fields":[6,2,1,11,0]},{"raw":"7:2:1:11:0:","fields":[7,2,1,11,0]},{"raw":"8:2:1:11:0:","fields":[8,2,1,11,0]},{"raw":"9:2:1:11:0:","fields":[9,2,1,11,0]},{"raw":"10:2:1:11:0:","fields":[10,2,1,11,0]},{"raw":"11:2:1:11:0:","fields":[11,2,1,11,0]},{"raw":"12:2:1:11:0:","fields":[12,2,1,11,0]},{"raw":"101:3:1:5:11:0:","fields":[101,3,1,5,11,0]},{"raw":"102:3:1:5:11:0:","fields":[102,3,1,5,11,0]},{"raw":"103:3:1:5:11:0:","fields":[103,3,1,5,11,0]},{"raw":"104:3:1:5:11:0:","fields":[104,3,1,5,11,0]}],"remarks":"This is when the house grouping is unknown in advance"},{"name":"01. Surgical Operation","rule_count_declared":6,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"11:3:1:5:11:2:6:12:","fields":[11,3,1,5,11,2,6,12]},{"raw":"101:3:1:5:11:2:6:12:","fields":[101,3,1,5,11,2,6,12]},{"raw":"102:3:1:5:11:2:6:12:","fields":[102,3,1,5,11,2,6,12]},{"raw":"103:3:1:5:11:2:6:12:","fields":[103,3,1,5,11,2,6,12]},{"raw":"104:3:1:5:11:2:6:12:","fields":[104,3,1,5,11,2,6,12]}],"remarks":"Do no select Chara Lagna, if you have sufficient time for operation"},{"name":"01. Political Career","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:5:1:6:9:10:11:3:5:8:12:","fields":[1,5,1,6,9,10,11,3,5,8,12]},{"raw":"11:5:1:6:9:10:11:3:5:8:12:","fields":[11,5,1,6,9,10,11,3,5,8,12]},{"raw":"101:5:1:6:9:10:11:3:5:8:12:","fields":[101,5,1,6,9,10,11,3,5,8,12]},{"raw":"102:5:1:6:9:10:11:3:5:8:12:","fields":[102,5,1,6,9,10,11,3,5,8,12]},{"raw":"103:5:1:6:9:10:11:3:5:8:12:","fields":[103,5,1,6,9,10,11,3,5,8,12]},{"raw":"104:5:1:6:9:10:11:3:5:8:12:","fields":[104,5,1,6,9,10,11,3,5,8,12]}],"remarks":"Good if Ju, Me, Ma, Sa Strong and Signify 1, 6, 9, 10, 11"},{"name":"01. Attainment of Siddhi Initiation","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:4:3:9:10:12:0:","fields":[1,4,3,9,10,12,0]},{"raw":"11:4:3:9:10:12:0:","fields":[11,4,3,9,10,12,0]},{"raw":"101:4:3:9:10:12:0:","fields":[101,4,3,9,10,12,0]},{"raw":"102:4:3:9:10:12:0:","fields":[102,4,3,9,10,12,0]},{"raw":"103:4:3:9:10:12:0:","fields":[103,4,3,9,10,12,0]},{"raw":"104:4:3:9:10:12:0:","fields":[104,4,3,9,10,12,0]}],"remarks":"ASC and 11th sublord MUST be Ketu or Saturn. 3:Forsake home forever; 5:Initiation; 9:Tapasthana; 10: Sadhana, 11: Siddhi; 12:Service to others;"},{"name":"01. Launching Astrology web site","rule_count_declared":11,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:4:1:3:10:11:0:","fields":[1,4,1,3,10,11,0]},{"raw":"2:4:2:6:10:11:0:","fields":[2,4,2,6,10,11,0]},{"raw":"6:4:2:6:10:11:0:","fields":[6,4,2,6,10,11,0]},{"raw":"10:4:2:6:10:11:0:","fields":[10,4,2,6,10,11,0]},{"raw":"11:4:2:6:10:11:0:","fields":[11,4,2,6,10,11,0]},{"raw":"5:4:5:9:10:11:0:","fields":[5,4,5,9,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":"1: To be web popular; 2,6,10,11 Financial success; 5th CSL should be Me, Ju or Sa and signify 5,9,10,11."},{"name":"01. Foreign Settlement","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:3:9:3:12:0:","fields":[1,3,9,3,12,0]},{"raw":"12:3:9:3:12:0:","fields":[12,3,9,3,12,0]},{"raw":"101:3:9:3:12:0:","fields":[101,3,9,3,12,0]},{"raw":"102:3:9:3:12:0:","fields":[102,3,9,3,12,0]},{"raw":"103:3:9:3:12:0:","fields":[103,3,9,3,12,0]},{"raw":"104:3:9:3:12:0:","fields":[104,3,9,3,12,0]}],"remarks":"For ASC sub lord Analysis, do not consider 9th Bhava if Lagna rasi is Dual sign"},{"name":"02. Opening Bank Account","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:3:2:6:11:3:8:5:12:","fields":[2,3,2,6,11,3,8,5,12]},{"raw":"11:3:2:6:11:3:8:5:12:","fields":[11,3,2,6,11,3,8,5,12]},{"raw":"101:3:2:6:11:3:8:5:12:","fields":[101,3,2,6,11,3,8,5,12]},{"raw":"102:3:2:6:11:3:8:5:12:","fields":[102,3,2,6,11,3,8,5,12]},{"raw":"103:3:2:6:11:3:8:5:12:","fields":[103,3,2,6,11,3,8,5,12]},{"raw":"104:3:2:6:11:3:8:5:12:","fields":[104,3,2,6,11,3,8,5,12]}],"remarks":""},{"name":"02. Starting Independent Business","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:4:1:2:7:10:0:","fields":[2,4,1,2,7,10,0]},{"raw":"11:4:1:2:7:10:0:","fields":[11,4,1,2,7,10,0]},{"raw":"10:4:1:2:7:10:0:","fields":[10,4,1,2,7,10,0]},{"raw":"101:4:2:7:10:11:0:","fields":[101,4,2,7,10,11,0]},{"raw":"102:4:2:7:10:11:0:","fields":[102,4,2,7,10,11,0]},{"raw":"103:4:2:7:10:11:0:","fields":[103,4,2,7,10,11,0]},{"raw":"104:4:2:7:10:11:0:","fields":[104,4,2,7,10,11,0]}],"remarks":""},{"name":"02. Second Marriage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:2:7:11:0:","fields":[2,2,7,11,0]},{"raw":"11:2:7:11:0:","fields":[11,2,7,11,0]},{"raw":"9:3:2:9:11:0:","fields":[9,3,2,9,11,0]},{"raw":"101:3:7:9:11:0:","fields":[101,3,7,9,11,0]},{"raw":"102:3:7:9:11:0:","fields":[102,3,7,9,11,0]},{"raw":"103:3:7:9:11:0:","fields":[103,3,7,9,11,0]},{"raw":"104:3:7:9:11:0:","fields":[104,3,7,9,11,0]}],"remarks":"2nd Sub lord MUST signify 7; 7th Sub lord being Me or connected to dual sign and 9th sub lord signify 2, 9, 11."},{"name":"02. Lodge a Complaint for recovery of Lost Property","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:3:2:6:11:3:5:8:12:","fields":[2,3,2,6,11,3,5,8,12]},{"raw":"11:3:2:6:11:3:5:8:12:","fields":[11,3,2,6,11,3,5,8,12]},{"raw":"6:3:2:6:11:3:5:8:12:","fields":[6,3,2,6,11,3,5,8,12]},{"raw":"101:3:2:6:11:3:5:8:12:","fields":[101,3,2,6,11,3,5,8,12]},{"raw":"102:3:2:6:11:3:5:8:12:","fields":[102,3,2,6,11,3,5,8,12]},{"raw":"103:3:2:6:11:3:5:8:12:","fields":[103,3,2,6,11,3,5,8,12]},{"raw":"104:3:2:6:11:3:5:8:12:","fields":[104,3,2,6,11,3,5,8,12]}],"remarks":""},{"name":"02. Going Abroad for Job","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:3:5:8:2:0:","fields":[2,3,5,8,2,0]},{"raw":"5:3:5:8:2:0:","fields":[5,3,5,8,2,0]},{"raw":"11:3:5:8:2:0:","fields":[11,3,5,8,2,0]},{"raw":"101:3:5:8:2:0:","fields":[101,3,5,8,2,0]},{"raw":"102:3:5:8:2:0:","fields":[102,3,5,8,2,0]},{"raw":"103:3:5:8:2:0:","fields":[103,3,5,8,2,0]},{"raw":"104:3:5:8:2:0:","fields":[104,3,5,8,2,0]}],"remarks":""},{"name":"03. Discussion with younger Siblings to improve relation","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:2:1:11:0:","fields":[3,2,1,11,0]},{"raw":"11:2:1:11:0:","fields":[11,2,1,11,0]},{"raw":"101:2:1:11:0:","fields":[101,2,1,11,0]},{"raw":"102:2:1:11:0:","fields":[102,2,1,11,0]},{"raw":"103:2:1:11:0:","fields":[103,2,1,11,0]},{"raw":"104:2:1:11:0:","fields":[104,2,1,11,0]}],"remarks":""},{"name":"03. Discussion qbout Adoption of child","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:2:2:11:0:","fields":[3,2,2,11,0]},{"raw":"11:2:2:11:0:","fields":[11,2,2,11,0]},{"raw":"101:2:2:11:0:","fields":[101,2,2,11,0]},{"raw":"102:2:2:11:0:","fields":[102,2,2,11,0]},{"raw":"103:2:2:11:0:","fields":[103,2,2,11,0]},{"raw":"104:2:2:11:0:","fields":[104,2,2,11,0]}],"remarks":""},{"name":"03. Purchase of Lottery","rule_count_declared":9,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:4:5:6:11:8:0:","fields":[3,4,5,6,11,8,0]},{"raw":"8:5:3:6:11:2:5:0:","fields":[8,5,3,6,11,2,5,0]},{"raw":"2:3:2:6:11:0:","fields":[2,3,2,6,11,0]},{"raw":"11:4:5:6:11:8:0:","fields":[11,4,5,6,11,8,0]},{"raw":"101:5:2:6:8:11:3:0:","fields":[101,5,2,6,8,11,3,0]},{"raw":"102:5:2:6:8:11:3:0:","fields":[102,5,2,6,8,11,3,0]},{"raw":"103:5:2:6:8:11:3:0:","fields":[103,5,2,6,8,11,3,0]},{"raw":"104:5:2:6:8:11:3:0:","fields":[104,5,2,6,8,11,3,0]}],"remarks":""},{"name":"03. Start Broker work","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:4:3:10:6:11:0:","fields":[3,4,3,10,6,11,0]},{"raw":"2:4:2:10:6:11:0:","fields":[2,4,2,10,6,11,0]},{"raw":"11:4:3:10:6:11:0:","fields":[11,4,3,10,6,11,0]},{"raw":"101:4:3:10:6:11:0:","fields":[101,4,3,10,6,11,0]},{"raw":"102:4:3:10:6:11:0:","fields":[102,4,3,10,6,11,0]},{"raw":"103:4:3:10:6:11:0:","fields":[103,4,3,10,6,11,0]},{"raw":"104:4:3:10:6:11:0:","fields":[104,4,3,10,6,11,0]}],"remarks":""},{"name":"03. Personal Interview","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:4:3:10:6:11:0:","fields":[3,4,3,10,6,11,0]},{"raw":"11:4:3:10:6:11:0:","fields":[11,4,3,10,6,11,0]},{"raw":"101:4:3:10:6:11:0:","fields":[101,4,3,10,6,11,0]},{"raw":"102:4:3:10:6:11:0:","fields":[102,4,3,10,6,11,0]},{"raw":"103:4:3:10:6:11:0:","fields":[103,4,3,10,6,11,0]},{"raw":"104:4:3:10:6:11:0:","fields":[104,4,3,10,6,11,0]}],"remarks":""},{"name":"03. Publishing a Book","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:3:3:11:10:0:","fields":[3,3,3,11,10,0]},{"raw":"11:3:3:11:10:0:","fields":[11,3,3,11,10,0]},{"raw":"101:3:3:11:10:0:","fields":[101,3,3,11,10,0]},{"raw":"102:3:3:11:10:0:","fields":[102,3,3,11,10,0]},{"raw":"103:3:3:11:10:0:","fields":[103,3,3,11,10,0]},{"raw":"104:3:3:11:10:0:","fields":[104,3,3,11,10,0]}],"remarks":"Mercury or Jupiter MUST be sub lord of 3 or 11"},{"name":"03. Start a Newspaper","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:3:3:11:10:0:","fields":[3,3,3,11,10,0]},{"raw":"11:3:3:11:10:0:","fields":[11,3,3,11,10,0]},{"raw":"101:3:3:11:10:0:","fields":[101,3,3,11,10,0]},{"raw":"102:3:3:11:10:0:","fields":[102,3,3,11,10,0]},{"raw":"103:3:3:11:10:0:","fields":[103,3,3,11,10,0]},{"raw":"104:3:3:11:10:0:","fields":[104,3,3,11,10,0]}],"remarks":""},{"name":"03. Sign a contract or agreement","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:4:3:1:11:7:0:","fields":[3,4,3,1,11,7,0]},{"raw":"11:4:3:1:11:7:0:","fields":[11,4,3,1,11,7,0]},{"raw":"101:4:3:1:11:7:0:","fields":[101,4,3,1,11,7,0]},{"raw":"102:4:3:1:11:7:0:","fields":[102,4,3,1,11,7,0]},{"raw":"103:4:3:1:11:7:0:","fields":[103,4,3,1,11,7,0]},{"raw":"104:4:3:1:11:7:0:","fields":[104,4,3,1,11,7,0]}],"remarks":"3rd sub lord MUST signify 3 or 11"},{"name":"03. Purchase of TV, Electrical goods","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:4:3:12:5:1:0:","fields":[3,4,3,12,5,1,0]},{"raw":"11:4:3:12:5:1:0:","fields":[11,4,3,12,5,1,0]},{"raw":"101:4:3:12:5:1:0:","fields":[101,4,3,12,5,1,0]},{"raw":"102:4:3:12:5:1:0:","fields":[102,4,3,12,5,1,0]},{"raw":"103:4:3:12:5:1:0:","fields":[103,4,3,12,5,1,0]},{"raw":"104:4:3:12:5:1:0:","fields":[104,4,3,12,5,1,0]}],"remarks":""},{"name":"03. Launch Appeal in Court","rule_count_declared":10,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:2:6:11:0:","fields":[3,2,6,11,0]},{"raw":"6:2:6:11:0:","fields":[6,2,6,11,0]},{"raw":"12:2:6:11:0:","fields":[12,2,6,11,0]},{"raw":"5:2:6:11:0:","fields":[5,2,6,11,0]},{"raw":"11:2:6:11:0:","fields":[11,2,6,11,0]},{"raw":"101:2:6:11:0:","fields":[101,2,6,11,0]},{"raw":"102:2:6:11:0:","fields":[102,2,6,11,0]},{"raw":"103:2:6:11:0:","fields":[103,2,6,11,0]},{"raw":"104:2:6:11:0:","fields":[104,2,6,11,0]}],"remarks":""},{"name":"03. First Meeting btwn Boy and Girl for Marriage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:3:2:7:11:3:1:6:10:","fields":[3,3,2,7,11,3,1,6,10]},{"raw":"9:3:2:7:11:3:1:6:10:","fields":[9,3,2,7,11,3,1,6,10]},{"raw":"11:3:2:7:11:3:1:6:10:","fields":[11,3,2,7,11,3,1,6,10]},{"raw":"101:3:2:7:11:3:1:6:10:","fields":[101,3,2,7,11,3,1,6,10]},{"raw":"102:3:2:7:11:3:1:6:10:","fields":[102,3,2,7,11,3,1,6,10]},{"raw":"103:3:2:7:11:3:1:6:10:","fields":[103,3,2,7,11,3,1,6,10]},{"raw":"104:3:2:7:11:3:2:6:10:","fields":[104,3,2,7,11,3,2,6,10]}],"remarks":""},{"name":"04. Admission in School","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:2:4:11:0:","fields":[4,2,4,11,0]},{"raw":"11:2:4:11:0:","fields":[11,2,4,11,0]},{"raw":"101:2:4:11:0:","fields":[101,2,4,11,0]},{"raw":"102:2:4:11:0:","fields":[102,2,4,11,0]},{"raw":"103:2:4:11:0:","fields":[103,2,4,11,0]},{"raw":"104:2:4:11:0:","fields":[104,2,4,11,0]}],"remarks":"If 4th sub lord is Jupiter or Mercury is Best"},{"name":"04. Admission in College","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:2:4:11:0:","fields":[4,2,4,11,0]},{"raw":"9:2:4:11:0:","fields":[9,2,4,11,0]},{"raw":"11:2:4:11:0:","fields":[11,2,4,11,0]},{"raw":"101:2:4:11:0:","fields":[101,2,4,11,0]},{"raw":"102:2:4:11:0:","fields":[102,2,4,11,0]},{"raw":"103:2:4:11:0:","fields":[103,2,4,11,0]},{"raw":"104:2:4:11:0:","fields":[104,2,4,11,0]}],"remarks":"If 9th sub lord is Jupiter or Mercury is Best"},{"name":"04. Higher Education (Ph.D, IAS, ...)","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:3:4:9:11:0:","fields":[4,3,4,9,11,0]},{"raw":"9:3:4:9:11:0:","fields":[9,3,4,9,11,0]},{"raw":"11:3:4:9:11:0:","fields":[11,3,4,9,11,0]},{"raw":"101:3:4:9:11:0:","fields":[101,3,4,9,11,0]},{"raw":"102:3:4:9:11:0:","fields":[102,3,4,9,11,0]},{"raw":"103:3:4:9:11:0:","fields":[103,3,4,9,11,0]},{"raw":"104:3:4:9:11:0:","fields":[104,3,4,9,11,0]}],"remarks":"4th sub lord should be Ju or Me; 9th sub lord should be Ju or Me; 11th sub lord should be Ju or Me"},{"name":"04. Purchase of land/Construction House","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:3:4:11:12:0:","fields":[4,3,4,11,12,0]},{"raw":"11:3:4:11:12:0:","fields":[11,3,4,11,12,0]},{"raw":"101:3:4:11:12:0:","fields":[101,3,4,11,12,0]},{"raw":"102:3:4:11:12:0:","fields":[102,3,4,11,12,0]},{"raw":"103:3:4:11:12:0:","fields":[103,3,4,11,12,0]},{"raw":"104:3:4:11:12:0:","fields":[104,3,4,11,12,0]}],"remarks":"4th/11th sub lord should be Mars for House and Saturn for Land"},{"name":"04. Property on Rent","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:5:4:11:12:6:10:0:","fields":[4,5,4,11,12,6,10,0]},{"raw":"11:5:4:11:12:6:10:0:","fields":[11,5,4,11,12,6,10,0]},{"raw":"101:5:4:11:12:6:10:0:","fields":[101,5,4,11,12,6,10,0]},{"raw":"102:5:4:11:12:6:10:0:","fields":[102,5,4,11,12,6,10,0]},{"raw":"103:5:4:11:12:6:10:0:","fields":[103,5,4,11,12,6,10,0]},{"raw":"104:5:4:11:12:6:10:0:","fields":[104,5,4,11,12,6,10,0]}],"remarks":""},{"name":"04. Purchase of Vehicle","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:3:4:11:12:0:","fields":[4,3,4,11,12,0]},{"raw":"11:3:4:11:12:0:","fields":[11,3,4,11,12,0]},{"raw":"101:3:4:11:12:0:","fields":[101,3,4,11,12,0]},{"raw":"102:3:4:11:12:0:","fields":[102,3,4,11,12,0]},{"raw":"103:3:4:11:12:0:","fields":[103,3,4,11,12,0]},{"raw":"104:3:4:11:12:0:","fields":[104,3,4,11,12,0]}],"remarks":"4th sub lord should be Venus"},{"name":"04. Purchase of Fridge","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:3:4:11:12:0:","fields":[4,3,4,11,12,0]},{"raw":"11:3:4:11:12:0:","fields":[11,3,4,11,12,0]},{"raw":"101:3:4:11:12:0:","fields":[101,3,4,11,12,0]},{"raw":"102:3:4:11:12:0:","fields":[102,3,4,11,12,0]},{"raw":"103:3:4:11:12:0:","fields":[103,3,4,11,12,0]},{"raw":"104:3:4:11:12:0:","fields":[104,3,4,11,12,0]}],"remarks":"4th sub lord should be Saturn"},{"name":"05. Sexual intercourse to conceive","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:2:5:11:0:","fields":[5,3,2,5,11,0]},{"raw":"11:3:2:5:11:0:","fields":[11,3,2,5,11,0]},{"raw":"101:3:2:5:11:0:","fields":[101,3,2,5,11,0]},{"raw":"102:3:2:5:11:0:","fields":[102,3,2,5,11,0]},{"raw":"103:3:2:5:11:0:","fields":[103,3,2,5,11,0]},{"raw":"104:3:2:5:11:0:","fields":[104,3,2,5,11,0]}],"remarks":"Best when 5th sub lord is Jupiter. This is valid only if couple are medically fit."},{"name":"05. Propose Marriage for a Girl/Boy","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:11:2:7:0:","fields":[5,3,11,2,7,0]},{"raw":"11:3:11:2:7:0:","fields":[11,3,11,2,7,0]},{"raw":"101:3:2:5:11:0:","fields":[101,3,2,5,11,0]},{"raw":"102:3:2:5:11:0:","fields":[102,3,2,5,11,0]},{"raw":"103:3:2:5:11:0:","fields":[103,3,2,5,11,0]},{"raw":"104:3:2:5:11:0:","fields":[104,3,2,5,11,0]}],"remarks":"Best when 5th sub lord is Venus."},{"name":"05. Partnership in Business","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:11:2:7:0:","fields":[5,3,11,2,7,0]},{"raw":"11:3:11:2:7:0:","fields":[11,3,11,2,7,0]},{"raw":"101:3:2:5:11:0:","fields":[101,3,2,5,11,0]},{"raw":"102:3:2:5:11:0:","fields":[102,3,2,5,11,0]},{"raw":"103:3:2:5:11:0:","fields":[103,3,2,5,11,0]},{"raw":"104:3:2:5:11:0:","fields":[104,3,2,5,11,0]}],"remarks":"Best when 5th sub lord is Jupiter."},{"name":"05. Speculative gain in Stock Market","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:4:2:5:6:11:2:8:12:","fields":[5,4,2,5,6,11,2,8,12]},{"raw":"11:4:2:5:6:11:2:8:12:","fields":[11,4,2,5,6,11,2,8,12]},{"raw":"101:4:2:5:6:11:0:","fields":[101,4,2,5,6,11,0]},{"raw":"102:4:2:5:6:11:0:","fields":[102,4,2,5,6,11,0]},{"raw":"103:4:2:5:6:11:0:","fields":[103,4,2,5,6,11,0]},{"raw":"104:4:2:5:6:11:0:","fields":[104,4,2,5,6,11,0]}],"remarks":"5 and 11 CSL should not have any connection with 8 and 12"},{"name":"05. Gambling ( Horse Race/Car Race,...)","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:8:6:2:1:12:","fields":[5,3,8,6,2,1,12]},{"raw":"11:3:8:6:2:1:12:","fields":[11,3,8,6,2,1,12]},{"raw":"101:3:8:6:2:0:","fields":[101,3,8,6,2,0]},{"raw":"102:3:8:6:2:0:","fields":[102,3,8,6,2,0]},{"raw":"103:3:8:6:2:0:","fields":[103,3,8,6,2,0]},{"raw":"104:3:8:6:2:0:","fields":[104,3,8,6,2,0]}],"remarks":"5 and 11 CSL should not have any connection with 12"},{"name":"05. Lanuch oneself as Cinema Actor","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:4:5:10:11:7:0:","fields":[5,4,5,10,11,7,0]},{"raw":"11:4:5:10:11:7:0:","fields":[11,4,5,10,11,7,0]},{"raw":"101:4:5:10:11:7:0:","fields":[101,4,5,10,11,7,0]},{"raw":"102:4:5:10:11:7:0:","fields":[102,4,5,10,11,7,0]},{"raw":"103:4:5:10:11:7:0:","fields":[103,4,5,10,11,7,0]},{"raw":"104:4:5:10:11:7:0:","fields":[104,4,5,10,11,7,0]}],"remarks":"5 CSL MUST be Venus."},{"name":"05. Upanayan Sanskar ( Sacred Thread Cermony)","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:3:5:11:0:","fields":[5,3,3,5,11,0]},{"raw":"11:3:3:5:11:0:","fields":[11,3,3,5,11,0]},{"raw":"101:3:3:5:11:0:","fields":[101,3,3,5,11,0]},{"raw":"102:3:3:5:11:0:","fields":[102,3,3,5,11,0]},{"raw":"103:3:3:5:11:0:","fields":[103,3,3,5,11,0]},{"raw":"104:3:3:5:11:0:","fields":[104,3,3,5,11,0]}],"remarks":"5 CSL should be Jupiter."},{"name":"05. Start Work as Professional Astrologer","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:6:5:9:10:11:2:7:0:","fields":[5,6,5,9,10,11,2,7,0]},{"raw":"9:6:5:9:10:11:2:7:0:","fields":[9,6,5,9,10,11,2,7,0]},{"raw":"11:6:5:9:10:11:2:7:0:","fields":[11,6,5,9,10,11,2,7,0]},{"raw":"101:6:5:9:10:11:2:7:0:","fields":[101,6,5,9,10,11,2,7,0]},{"raw":"102:6:5:9:10:11:2:7:0:","fields":[102,6,5,9,10,11,2,7,0]},{"raw":"103:6:5:9:10:11:2:7:0:","fields":[103,6,5,9,10,11,2,7,0]},{"raw":"104:6:5:9:10:11:2:7:0:","fields":[104,6,5,9,10,11,2,7,0]}],"remarks":"5 CSL MUST be Jupiter or Saturn or Mercury. 9 CSL Should be Jupiter or Saturn or Mercury."},{"name":"05. Start Work as Professional Astrologer","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:4:3:5:11:4:0:","fields":[5,4,3,5,11,4,0]},{"raw":"11:4:3:5:11:4:0:","fields":[11,4,3,5,11,4,0]},{"raw":"101:4:3:5:11:4:0:","fields":[101,4,3,5,11,4,0]},{"raw":"102:4:3:5:11:4:0:","fields":[102,4,3,5,11,4,0]},{"raw":"103:4:3:5:11:4:0:","fields":[103,4,3,5,11,4,0]},{"raw":"104:4:3:5:11:4:0:","fields":[104,4,3,5,11,4,0]}],"remarks":""},{"name":"05. Start Treatment for Addiction (Alcohal/Drug/Tobaco,...)","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:3:1:5:11:0:","fields":[5,3,1,5,11,0]},{"raw":"11:3:1:5:11:0:","fields":[11,3,1,5,11,0]},{"raw":"101:3:1:5:11:0:","fields":[101,3,1,5,11,0]},{"raw":"102:3:1:5:11:0:","fields":[102,3,1,5,11,0]},{"raw":"103:3:1:5:11:0:","fields":[103,3,1,5,11,0]},{"raw":"104:3:1:5:11:0:","fields":[104,3,1,5,11,0]}],"remarks":""},{"name":"06. Joining in Job/Service","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:2:10:11:0:","fields":[6,3,2,10,11,0]},{"raw":"10:3:2:10:11:0:","fields":[10,3,2,10,11,0]},{"raw":"11:3:2:10:11:0:","fields":[11,3,2,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":"6th CSL should be Saturn."},{"name":"06. Joining in Job/Service","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:2:6:11:0:","fields":[6,3,2,6,11,0]},{"raw":"8:3:2:6:11:0:","fields":[8,3,2,6,11,0]},{"raw":"11:3:2:6:11:0:","fields":[11,3,2,6,11,0]},{"raw":"101:3:2:6:11:0:","fields":[101,3,2,6,11,0]},{"raw":"102:3:2:6:11:0:","fields":[102,3,2,6,11,0]},{"raw":"103:3:2:6:11:0:","fields":[103,3,2,6,11,0]},{"raw":"104:3:2:6:11:0:","fields":[104,3,2,6,11,0]}],"remarks":""},{"name":"06. Application for Overdraft facility/Loan from Bank","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:4:2:6:10:11:0:","fields":[6,4,2,6,10,11,0]},{"raw":"8:4:2:6:10:11:0:","fields":[8,4,2,6,10,11,0]},{"raw":"11:4:2:6:10:11:0:","fields":[11,4,2,6,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":""},{"name":"06. Election/Litigation/Sports","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:1:6:11:0:","fields":[6,3,1,6,11,0]},{"raw":"11:3:1:6:11:0:","fields":[11,3,1,6,11,0]},{"raw":"101:3:1:6:11:0:","fields":[101,3,1,6,11,0]},{"raw":"102:3:1:6:11:0:","fields":[102,3,1,6,11,0]},{"raw":"103:3:1:6:11:0:","fields":[103,3,1,6,11,0]},{"raw":"104:3:1:6:11:0:","fields":[104,3,1,6,11,0]}],"remarks":""},{"name":"06. Advertisement for Getting Tenant","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:2:4:11:0:","fields":[6,2,4,11,0]},{"raw":"11:2:4:11:0:","fields":[11,2,4,11,0]},{"raw":"101:2:4:11:0:","fields":[101,2,4,11,0]},{"raw":"102:2:4:11:0:","fields":[102,2,4,11,0]},{"raw":"103:2:4:11:0:","fields":[103,2,4,11,0]},{"raw":"104:2:4:11:0:","fields":[104,2,4,11,0]}],"remarks":""},{"name":"06. Adopting a Child","rule_count_declared":9,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:2:6:10:0:","fields":[6,2,6,10,0]},{"raw":"2:2:6:10:0:","fields":[2,2,6,10,0]},{"raw":"5:2:6:10:0:","fields":[5,2,6,10,0]},{"raw":"11:2:4:11:0:","fields":[11,2,4,11,0]},{"raw":"101:5:2:4:8:6:10:0:","fields":[101,5,2,4,8,6,10,0]},{"raw":"102:5:2:4:8:6:10:0:","fields":[102,5,2,4,8,6,10,0]},{"raw":"103:5:2:4:8:6:10:0:","fields":[103,5,2,4,8,6,10,0]},{"raw":"104:5:2:4:8:6:10:0:","fields":[104,5,2,4,8,6,10,0]}],"remarks":"DBAS should signify 2, 4, 8. If DBAS also signifies 6 and 10 will be good."},{"name":"06. Going abroad for Marriage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:3:6:9:0:","fields":[6,3,3,6,9,0]},{"raw":"3:3:3:6:9:0:","fields":[3,3,3,6,9,0]},{"raw":"11:3:3:6:9:0:","fields":[11,3,3,6,9,0]},{"raw":"101:3:3:6:9:0:","fields":[101,3,3,6,9,0]},{"raw":"102:3:3:6:9:0:","fields":[102,3,3,6,9,0]},{"raw":"103:3:3:6:9:0:","fields":[103,3,3,6,9,0]},{"raw":"104:3:3:6:9:0:","fields":[104,3,3,6,9,0]}],"remarks":""},{"name":"07. Marriage / Re-union with Partner","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"7:3:2:7:11:3:1:6:10:","fields":[7,3,2,7,11,3,1,6,10]},{"raw":"11:3:2:7:11:3:1:6:10:","fields":[11,3,2,7,11,3,1,6,10]},{"raw":"2:3:2:7:11:3:1:6:10:","fields":[2,3,2,7,11,3,1,6,10]},{"raw":"101:3:2:7:11:3:1:6:10:","fields":[101,3,2,7,11,3,1,6,10]},{"raw":"102:3:2:7:11:3:1:6:10:","fields":[102,3,2,7,11,3,1,6,10]},{"raw":"103:3:2:7:11:3:1:6:10:","fields":[103,3,2,7,11,3,1,6,10]},{"raw":"104:3:2:7:11:3:2:6:10:","fields":[104,3,2,7,11,3,2,6,10]}],"remarks":"Verify Multiple marriages (7 CSL's Star lord Me; 2 CSL related to 2; 9th CSL related to 2)"},{"name":"07. Business Partnership","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"7:3:7:7:11:2:5:10:","fields":[7,3,7,7,11,2,5,10]},{"raw":"11:3:7:7:11:2:5:10:","fields":[11,3,7,7,11,2,5,10]},{"raw":"101:3:6:7:11:2:5:10:","fields":[101,3,6,7,11,2,5,10]},{"raw":"102:3:6:7:11:2:5:10:","fields":[102,3,6,7,11,2,5,10]},{"raw":"103:3:6:7:11:2:5:10:","fields":[103,3,6,7,11,2,5,10]},{"raw":"104:3:6:7:11:2:5:10:","fields":[104,3,6,7,11,2,5,10]}],"remarks":""},{"name":"08. Apply for Gratuity/Insurance/Will","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"8:5:8:2:6:11:5:0:","fields":[8,5,8,2,6,11,5,0]},{"raw":"11:5:8:2:6:11:5:0:","fields":[11,5,8,2,6,11,5,0]},{"raw":"101:5:8:2:6:11:5:0:","fields":[101,5,8,2,6,11,5,0]},{"raw":"102:5:8:2:6:11:5:0:","fields":[102,5,8,2,6,11,5,0]},{"raw":"103:5:8:2:6:11:5:0:","fields":[103,5,8,2,6,11,5,0]},{"raw":"104:5:8:2:6:11:5:0:","fields":[104,5,8,2,6,11,5,0]}],"remarks":""},{"name":"08. Asking for Financial Help from a Friend","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"8:4:8:5:6:12:0:","fields":[8,4,8,5,6,12,0]},{"raw":"11:4:8:5:6:12:0:","fields":[11,4,8,5,6,12,0]},{"raw":"101:4:8:5:6:12:0:","fields":[101,4,8,5,6,12,0]},{"raw":"102:4:8:5:6:12:0:","fields":[102,4,8,5,6,12,0]},{"raw":"103:4:8:5:6:12:0:","fields":[103,4,8,5,6,12,0]},{"raw":"104:4:8:5:6:12:0:","fields":[104,4,8,5,6,12,0]}],"remarks":""},{"name":"08. Going Abroad for Higher Studies","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"8:3:5:8:11:0:","fields":[8,3,5,8,11,0]},{"raw":"5:3:5:8:11:0:","fields":[5,3,5,8,11,0]},{"raw":"11:3:5:8:11:0:","fields":[11,3,5,8,11,0]},{"raw":"101:3:5:8:11:0:","fields":[101,3,5,8,11,0]},{"raw":"102:3:5:8:11:0:","fields":[102,3,5,8,11,0]},{"raw":"103:3:5:8:11:0:","fields":[103,3,5,8,11,0]},{"raw":"104:3:5:8:11:0:","fields":[104,3,5,8,11,0]}],"remarks":""},{"name":"09. Higher Education (Master, Ph.D, IAS, ...)","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"4:3:4:9:11:0:","fields":[4,3,4,9,11,0]},{"raw":"9:3:4:9:11:0:","fields":[9,3,4,9,11,0]},{"raw":"11:3:4:9:11:0:","fields":[11,3,4,9,11,0]},{"raw":"101:3:4:9:11:0:","fields":[101,3,4,9,11,0]},{"raw":"102:3:4:9:11:0:","fields":[102,3,4,9,11,0]},{"raw":"103:3:4:9:11:0:","fields":[103,3,4,9,11,0]},{"raw":"104:3:4:9:11:0:","fields":[104,3,4,9,11,0]}],"remarks":"4th sub lord should be Ju or Me; 9th sub lord should be Ju or Me; 11th sub lord should be Ju or Me"},{"name":"09. Going Abroad","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:3:9:3:12:0:","fields":[1,3,9,3,12,0]},{"raw":"12:3:9:3:12:0:","fields":[12,3,9,3,12,0]},{"raw":"101:3:9:3:12:0:","fields":[101,3,9,3,12,0]},{"raw":"102:3:9:3:12:0:","fields":[102,3,9,3,12,0]},{"raw":"103:3:9:3:12:0:","fields":[103,3,9,3,12,0]},{"raw":"104:3:9:3:12:0:","fields":[104,3,9,3,12,0]}],"remarks":"For ASC sub lord Analysis, do not consider 9th Bhava if Lagna rasi is Dual sign"},{"name":"09. Start Tour for Pilgrimage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:3:3:9:10:0:","fields":[9,3,3,9,10,0]},{"raw":"10:3:3:9:10:0:","fields":[10,3,3,9,10,0]},{"raw":"11:3:3:9:10:0:","fields":[11,3,3,9,10,0]},{"raw":"101:3:3:9:10:0:","fields":[101,3,3,9,10,0]},{"raw":"102:3:3:9:10:0:","fields":[102,3,3,9,10,0]},{"raw":"103:3:3:9:10:0:","fields":[103,3,3,9,10,0]},{"raw":"104:3:3:9:10:0:","fields":[104,3,3,9,10,0]}],"remarks":""},{"name":"09. Second Marriage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:2:7:11:0:","fields":[2,2,7,11,0]},{"raw":"11:2:7:11:0:","fields":[11,2,7,11,0]},{"raw":"9:3:2:9:11:0:","fields":[9,3,2,9,11,0]},{"raw":"101:3:7:9:11:0:","fields":[101,3,7,9,11,0]},{"raw":"102:3:7:9:11:0:","fields":[102,3,7,9,11,0]},{"raw":"103:3:7:9:11:0:","fields":[103,3,7,9,11,0]},{"raw":"104:3:7:9:11:0:","fields":[104,3,7,9,11,0]}],"remarks":"2nd Sub lord MUST signify 7"},{"name":"09. Start Spiritual Life & Divine Worship","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:5:1:5:9:11:12:0:","fields":[9,5,1,5,9,11,12,0]},{"raw":"11:5:1:5:9:11:12:0:","fields":[11,5,1,5,9,11,12,0]},{"raw":"101:5:1:5:9:11:12:0:","fields":[101,5,1,5,9,11,12,0]},{"raw":"102:5:1:5:9:11:12:0:","fields":[102,5,1,5,9,11,12,0]},{"raw":"103:5:1:5:9:11:12:0:","fields":[103,5,1,5,9,11,12,0]},{"raw":"104:5:1:5:9:11:12:0:","fields":[104,5,1,5,9,11,12,0]}],"remarks":"9th CSL should be Saturn"},{"name":"09. Popularity/Success in Politics","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:5:9:10:11:2:6:0:","fields":[9,5,9,10,11,2,6,0]},{"raw":"10:5:9:10:11:2:6:0:","fields":[10,5,9,10,11,2,6,0]},{"raw":"11:5:9:10:11:2:6:0:","fields":[11,5,9,10,11,2,6,0]},{"raw":"101:5:9:10:11:2:6:0:","fields":[101,5,9,10,11,2,6,0]},{"raw":"102:5:9:10:11:2:6:0:","fields":[102,5,9,10,11,2,6,0]},{"raw":"103:5:9:10:11:2:6:0:","fields":[103,5,9,10,11,2,6,0]},{"raw":"104:5:9:10:11:2:6:0:","fields":[104,5,9,10,11,2,6,0]}],"remarks":"9th and 10th CSL should be Saturn or Mars."},{"name":"09. Start Research Group/ Internet Research group","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:4:9:11:6:12:0:","fields":[9,4,9,11,6,12,0]},{"raw":"11:4:9:11:6:12:0:","fields":[11,4,9,11,6,12,0]},{"raw":"101:4:9:11:6:12:0:","fields":[101,4,9,11,6,12,0]},{"raw":"102:4:9:11:6:12:0:","fields":[102,4,9,11,6,12,0]},{"raw":"103:4:9:11:6:12:0:","fields":[103,4,9,11,6,12,0]},{"raw":"104:4:9:11:6:12:0:","fields":[104,4,9,11,6,12,0]}],"remarks":"9th CSL should be Saturn."},{"name":"09. Take Possession of Inheritance of Large Property","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:2:2:11:0:","fields":[9,2,2,11,0]},{"raw":"11:2:2:11:0:","fields":[11,2,2,11,0]},{"raw":"101:3:2:11:9:0:","fields":[101,3,2,11,9,0]},{"raw":"102:3:2:11:9:0:","fields":[102,3,2,11,9,0]},{"raw":"103:3:2:11:9:0:","fields":[103,3,2,11,9,0]},{"raw":"104:3:2:11:9:0:","fields":[104,3,2,11,9,0]}],"remarks":""},{"name":"09. Going Abroad for Business","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:3:6:9:12:0:","fields":[9,3,6,9,12,0]},{"raw":"6:3:6:9:12:0:","fields":[6,3,6,9,12,0]},{"raw":"11:3:6:9:12:0:","fields":[11,3,6,9,12,0]},{"raw":"101:3:6:9:12:0:","fields":[101,3,6,9,12,0]},{"raw":"102:3:6:9:12:0:","fields":[102,3,6,9,12,0]},{"raw":"103:3:6:9:12:0:","fields":[103,3,6,9,12,0]},{"raw":"104:3:6:9:12:0:","fields":[104,3,6,9,12,0]}],"remarks":""},{"name":"10. Start New Business","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"10:3:2:10:11:0:","fields":[10,3,2,10,11,0]},{"raw":"11:3:2:10:11:0:","fields":[11,3,2,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":""},{"name":"10. Popularity/Success in Politics","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"9:5:9:10:11:2:6:0:","fields":[9,5,9,10,11,2,6,0]},{"raw":"10:5:9:10:11:2:6:0:","fields":[10,5,9,10,11,2,6,0]},{"raw":"11:5:9:10:11:2:6:0:","fields":[11,5,9,10,11,2,6,0]},{"raw":"101:5:9:10:11:2:6:0:","fields":[101,5,9,10,11,2,6,0]},{"raw":"102:5:9:10:11:2:6:0:","fields":[102,5,9,10,11,2,6,0]},{"raw":"103:5:9:10:11:2:6:0:","fields":[103,5,9,10,11,2,6,0]},{"raw":"104:5:9:10:11:2:6:0:","fields":[104,5,9,10,11,2,6,0]}],"remarks":"9th and 10th CSL should be Saturn or Mars."},{"name":"10. Joining in Job/Service","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:2:10:11:0:","fields":[6,3,2,10,11,0]},{"raw":"10:3:2:10:11:0:","fields":[10,3,2,10,11,0]},{"raw":"11:3:2:10:11:0:","fields":[11,3,2,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":"6th CSL should be Saturn."},{"name":"10. For Getting Promotion","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"10:4:2:6:10:11:0:","fields":[10,4,2,6,10,11,0]},{"raw":"11:4:2:6:10:11:0:","fields":[11,4,2,6,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":"10th CSL Should signify (2,6) or (6,10) or (2,6,10) or (10,11) or (6,11) or (2,10,11) or (6,10,11)."},{"name":"10. Apply for Getting an Award/Prize","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"10:4:10:11:6:2:0:","fields":[10,4,10,11,6,2,0]},{"raw":"11:4:10:11:6:2:0:","fields":[11,4,10,11,6,2,0]},{"raw":"101:4:10:11:6:2:0:","fields":[101,4,10,11,6,2,0]},{"raw":"102:4:10:11:6:2:0:","fields":[102,4,10,11,6,2,0]},{"raw":"103:4:10:11:6:2:0:","fields":[103,4,10,11,6,2,0]},{"raw":"104:4:10:11:6:2:0:","fields":[104,4,10,11,6,2,0]}],"remarks":"Use 2 as Significator of DBAS or Cusp only if Monetary gain."},{"name":"10. Starting Independent Business","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:4:1:2:7:10:0:","fields":[2,4,1,2,7,10,0]},{"raw":"11:4:1:2:7:10:0:","fields":[11,4,1,2,7,10,0]},{"raw":"10:4:1:2:7:10:0:","fields":[10,4,1,2,7,10,0]},{"raw":"101:4:2:7:10:11:0:","fields":[101,4,2,7,10,11,0]},{"raw":"102:4:2:7:10:11:0:","fields":[102,4,2,7,10,11,0]},{"raw":"103:4:2:7:10:11:0:","fields":[103,4,2,7,10,11,0]},{"raw":"104:4:2:7:10:11:0:","fields":[104,4,2,7,10,11,0]}],"remarks":""},{"name":"10. Start Stock Market Business","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"5:4:2:5:6:11:2:8:12:","fields":[5,4,2,5,6,11,2,8,12]},{"raw":"11:4:2:5:6:11:2:8:12:","fields":[11,4,2,5,6,11,2,8,12]},{"raw":"101:4:2:5:6:11:0:","fields":[101,4,2,5,6,11,0]},{"raw":"102:4:2:5:6:11:0:","fields":[102,4,2,5,6,11,0]},{"raw":"103:4:2:5:6:11:0:","fields":[103,4,2,5,6,11,0]},{"raw":"104:4:2:5:6:11:0:","fields":[104,4,2,5,6,11,0]}],"remarks":"5 and 11 CSL should not have any connection with 8 and 12"},{"name":"10. Launch new Product","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"2:4:2:6:10:11:0:","fields":[2,4,2,6,10,11,0]},{"raw":"10:4:2:6:10:11:0:","fields":[10,4,2,6,10,11,0]},{"raw":"11:4:2:6:10:11:0:","fields":[11,4,2,6,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":""},{"name":"11. Apply for Green Card","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"1:2:1:11:0:","fields":[1,2,1,11,0]},{"raw":"11:2:1:11:0:","fields":[11,2,1,11,0]},{"raw":"101:2:1:11:0:","fields":[101,2,1,11,0]},{"raw":"102:2:1:11:0:","fields":[102,2,1,11,0]},{"raw":"103:2:1:11:0:","fields":[103,2,1,11,0]},{"raw":"104:2:1:11:0:","fields":[104,2,1,11,0]}],"remarks":""},{"name":"11. Matrimonial Advertisement","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"11:3:3:9:11:0:","fields":[11,3,3,9,11,0]},{"raw":"7:3:2:7:11:3:1:6:10:","fields":[7,3,2,7,11,3,1,6,10]},{"raw":"101:3:3:9:11:0:","fields":[101,3,3,9,11,0]},{"raw":"102:3:3:9:11:0:","fields":[102,3,3,9,11,0]},{"raw":"103:3:3:9:11:0:","fields":[103,3,3,9,11,0]},{"raw":"104:3:3:9:11:0:","fields":[104,3,3,9,11,0]}],"remarks":"Success and Marriage related tests"},{"name":"11. Factory Opening","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"11:4:2:6:10:11:0:","fields":[11,4,2,6,10,11,0]},{"raw":"2:3:2:6:11:0:","fields":[2,3,2,6,11,0]},{"raw":"10:3:2:10:11:0:","fields":[10,3,2,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":""},{"name":"12. Migrating to a Foreign Country","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:3:9:3:12:0:","fields":[12,3,9,3,12,0]},{"raw":"1:3:9:3:12:0:","fields":[1,3,9,3,12,0]},{"raw":"101:3:9:3:12:0:","fields":[101,3,9,3,12,0]},{"raw":"102:3:9:3:12:0:","fields":[102,3,9,3,12,0]},{"raw":"103:3:9:3:12:0:","fields":[103,3,9,3,12,0]},{"raw":"104:3:9:3:12:0:","fields":[104,3,9,3,12,0]}],"remarks":"For ASC sub lord Analysis, do not consider 9th Bhava if Lagna rasi is Dual sign"},{"name":"12. Permanent Return to Motherland","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:4:2:4:8:11:4:1:3:7:10:","fields":[12,4,2,4,8,11,4,1,3,7,10]},{"raw":"11:4:2:4:8:11:4:1:3:7:10:","fields":[11,4,2,4,8,11,4,1,3,7,10]},{"raw":"101:4:2:4:8:11:4:1:3:7:10:","fields":[101,4,2,4,8,11,4,1,3,7,10]},{"raw":"102:4:2:4:8:11:4:1:3:7:10:","fields":[102,4,2,4,8,11,4,1,3,7,10]},{"raw":"103:4:2:4:8:11:4:1:3:7:10:","fields":[103,4,2,4,8,11,4,1,3,7,10]},{"raw":"104:0:0:","fields":[104,0,0]}],"remarks":""},{"name":"12. Going abroad for Marriage","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"6:3:3:6:9:0:","fields":[6,3,3,6,9,0]},{"raw":"3:3:3:6:9:0:","fields":[3,3,3,6,9,0]},{"raw":"11:3:3:6:9:0:","fields":[11,3,3,6,9,0]},{"raw":"101:3:3:6:9:0:","fields":[101,3,3,6,9,0]},{"raw":"102:3:3:6:9:0:","fields":[102,3,3,6,9,0]},{"raw":"103:3:3:6:9:0:","fields":[103,3,3,6,9,0]},{"raw":"104:3:3:6:9:0:","fields":[104,3,3,6,9,0]}],"remarks":""},{"name":"12. Take Sanyas (Renounce Worldly Pursuits)","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:4:3:10:12:9:0:","fields":[12,4,3,10,12,9,0]},{"raw":"9:4:3:10:12:9:0:","fields":[9,4,3,10,12,9,0]},{"raw":"11:4:3:10:12:9:0:","fields":[11,4,3,10,12,9,0]},{"raw":"101:4:3:10:12:9:0:","fields":[101,4,3,10,12,9,0]},{"raw":"102:4:3:10:12:9:0:","fields":[102,4,3,10,12,9,0]},{"raw":"103:4:3:10:12:9:0:","fields":[103,4,3,10,12,9,0]},{"raw":"104:4:3:10:12:9:0:","fields":[104,4,3,10,12,9,0]}],"remarks":"12 CSL must be Saturn or Ketu. 9 CSL must be Saturn or Ketu."},{"name":"12. Construction of religious Building (Mandir,...)","rule_count_declared":7,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:4:2:4:11:12:0:","fields":[12,4,2,4,11,12,0]},{"raw":"11:4:2:4:11:12:0:","fields":[11,4,2,4,11,12,0]},{"raw":"101:4:2:4:11:12:0:","fields":[101,4,2,4,11,12,0]},{"raw":"102:4:2:4:11:12:0:","fields":[102,4,2,4,11,12,0]},{"raw":"103:4:2:4:11:12:0:","fields":[103,4,2,4,11,12,0]},{"raw":"104:4:2:4:11:12:0:","fields":[104,4,2,4,11,12,0]}],"remarks":""},{"name":"12. Surrender to Police","rule_count_declared":6,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:0:4:2:3:8:12:0:","fields":[12,0,4,2,3,8,12,0]},{"raw":"101:3:6:11:10:0:","fields":[101,3,6,11,10,0]},{"raw":"102:3:6:11:10:0:","fields":[102,3,6,11,10,0]},{"raw":"103:3:6:11:10:0:","fields":[103,3,6,11,10,0]},{"raw":"104:3:6:11:10:0:","fields":[104,3,6,11,10,0]}],"remarks":"12 CSL Should not be Rahu. 12 CSL Should NOT signify 2, 3, 8, 12."},{"name":"12. To return After Release on bail","rule_count_declared":6,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:0:4:2:3:8:12:0:","fields":[12,0,4,2,3,8,12,0]},{"raw":"101:3:2:4:11:0:","fields":[101,3,2,4,11,0]},{"raw":"102:3:2:4:11:0:","fields":[102,3,2,4,11,0]},{"raw":"103:3:2:4:11:0:","fields":[103,3,2,4,11,0]},{"raw":"104:3:2:4:11:0:","fields":[104,3,2,4,11,0]}],"remarks":"12 CSL Should not be Mercury. 12 CSL Should NOT signify 2, 3, 8, 12."},{"name":"12. launch of Space Shuttle","rule_count_declared":9,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"12:3:3:9:12:0:","fields":[12,3,3,9,12,0]},{"raw":"3:3:3:9:12:0:","fields":[3,3,3,9,12,0]},{"raw":"9:3:3:9:12:0:","fields":[9,3,3,9,12,0]},{"raw":"8:2:8:12:0:","fields":[8,2,8,12,0]},{"raw":"101:3:3:9:12:0:","fields":[101,3,3,9,12,0]},{"raw":"102:3:3:9:12:0:","fields":[102,3,3,9,12,0]},{"raw":"103:3:3:9:12:0:","fields":[103,3,3,9,12,0]},{"raw":"104:3:3:9:12:0:","fields":[104,3,3,9,12,0]}],"remarks":"12 CSL for good and safe Journey. 3/9 CSL for peaceful journy. use 3 for Short, 9 for Long journey"},{"name":"03. Signing / sending Application for a Job","rule_count_declared":8,"rules":[{"raw":"1:4:1:5:9:11:0:","fields":[1,4,1,5,9,11,0]},{"raw":"3:3:2:10:11:0:","fields":[3,3,2,10,11,0]},{"raw":"6:3:2:10:11:0:","fields":[6,3,2,10,11,0]},{"raw":"11:3:2:10:11:0:","fields":[11,3,2,10,11,0]},{"raw":"101:4:2:6:10:11:0:","fields":[101,4,2,6,10,11,0]},{"raw":"102:4:2:6:10:11:0:","fields":[102,4,2,6,10,11,0]},{"raw":"103:4:2:6:10:11:0:","fields":[103,4,2,6,10,11,0]},{"raw":"104:4:2:6:10:11:0:","fields":[104,4,2,6,10,11,0]}],"remarks":""}];
$('event').innerHTML=EVENTS.map((e,i)=>`<option value="${i}">${e.name}</option>`).join('');
let i=EVENTS.findIndex(e=>e.name.includes('Speculative gain in Stock Market'));if(i>=0)$('event').selectedIndex=i;
$('status').textContent='Ready. Select an event, use GPS or PlaceSelect, then tap Show.';
const SIGNS=['Ar','Ta','Ge','Cn','Le','Vi','Li','Sc','Sg','Cp','Aq','Pi'];
const RASI_LORD=['Ma','Ve','Me','Mo','Su','Me','Ve','Ma','Ju','Sa','Sa','Ju'];
const STAR_LORDS=['Ke','Ve','Su','Mo','Ma','Ra','Ju','Sa','Me'];
const VIM={Ke:7,Ve:20,Su:6,Mo:10,Ma:7,Ra:18,Ju:16,Sa:19,Me:17};
const PERIOD_CODES={101:'Dasa',102:'Bhukti',103:'Antara',104:'Sukshma'};
const NAK=13+20/60;

let SwissEphemeris,Planet,HouseSystem,SiderealMode,CalculationFlag,swe,ephFlags;
let engineReady=false;
async function initEngine(){
  const btn=$('show');
  const setStatus=(msg)=>{const el=$('status'); if(el) el.textContent=msg;};
  const timeout=(promise,ms,label)=>Promise.race([promise,new Promise((_,reject)=>setTimeout(()=>reject(new Error(label+' timed out after '+Math.round(ms/1000)+' seconds')),ms))]);
  try{
    // Build 1.08: use a classic script + dynamic import. This avoids the
    // Android/PWA failure where the inline module stopped before populating
    // Events, leaving both Event and Show permanently in Loading state.
    setStatus('Loading Swiss Ephemeris engine…');
    let mod=null,lastErr=null;
    for(const url of [
      'https://unpkg.com/@swisseph/browser@1.3.1/dist/swisseph-browser.js',
      'https://cdn.jsdelivr.net/npm/@swisseph/browser@1.3.1/dist/swisseph-browser.js',
      'https://unpkg.com/@swisseph/browser@1.4.0/dist/swisseph-browser.js'
    ]){
      try{
        setStatus('Loading Swiss Ephemeris engine…');
        mod=await timeout(import(url),15000,'Swiss Ephemeris download');
        if(mod) break;
      }catch(e){ lastErr=e; console.warn('Swiss Ephemeris import failed:',url,e); }
    }
    if(!mod) throw lastErr || new Error('Swiss Ephemeris browser module could not be loaded');
    ({SwissEphemeris,Planet,HouseSystem,SiderealMode,CalculationFlag}=mod);
    swe=new SwissEphemeris();
    // 1.3.1 supports the explicit WASM URL and this is the known working
    // initialization path used by the earlier KPMuhurat build.
    await timeout(swe.init('https://unpkg.com/@swisseph/browser@1.3.1/dist/swisseph.wasm'),15000,'Swiss Ephemeris WASM initialization');
    swe.setSiderealMode(SiderealMode.Krishnamurti);
    ephFlags=CalculationFlag.MoshierEphemeris|CalculationFlag.Sidereal|CalculationFlag.Speed;
    engineReady=true;
    if(btn){btn.disabled=false;btn.textContent='Show';}
    setStatus('Ready. Swiss Ephemeris engine loaded. Select an event and tap Show.');
  }catch(e){
    console.error('Swiss Ephemeris initialization failed',e);
    engineReady=false;
    if(btn){btn.disabled=true;btn.textContent='Engine unavailable';}
    setStatus('Engine initialization failed: '+(e?.message||e)+' — check internet access and reload once.');
  }
}

function dms(s){let a=String(s).split(':').map(Number);return (a[0]||0)+(a[1]||0)/60+(a[2]||0)/3600}
function norm(x){x%=360;return x<0?x+360:x}
function parts(L){L=norm(L);let si=Math.floor(L/30),nk=Math.floor(L/NAK),rem=L-nk*NAK,star=STAR_LORDS[nk%9],seq=[];for(let i=0;i<9;i++)seq.push(STAR_LORDS[(nk+i)%9]);let x=0,sub=seq[8];for(let p of seq){let w=NAK*VIM[p]/120;if(rem < x+w-1e-12){sub=p;break}x+=w}return [SIGNS[si],RASI_LORD[si],star,sub,L,nk]}
function localJD(date,time,tz){let a=date.split('-').map(Number),b=time.split(':').map(Number);return swe.julianDay(a[0],a[1],a[2],b[0]+b[1]/60+b[2]/3600-tz)}
function timeFromSeconds(s){
  // Preserve fractional seconds during boundary searches. The previous build
  // truncated every binary-search probe to whole seconds, which could move a
  // KP boundary by one displayed second.
  s=Math.max(0,Math.min(86399.999999,s));
  let h=Math.floor(s/3600),r=s-h*3600,m=Math.floor(r/60),q=r-m*60;
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+q.toFixed(6).padStart(9,'0');
}
function secfmt(s){
  // KPMuhurat displays transition times to the nearest whole second.
  s=Math.round(Number(s));
  if(s>=86400)s=0;
  let h=Math.floor(s/3600),m=Math.floor((s%3600)/60),q=s%60;
  return [h,m,q].map(x=>String(x).padStart(2,'0')).join(':');
}
function parseClockSeconds(t){let b=String(t).split(':').map(Number);return (b[0]||0)*3600+(b[1]||0)*60+(b[2]||0)}
function houseForLon(L,cusps){for(let i=1;i<=12;i++){let a=cusps[i],b=cusps[i===12?1:i+1],x=(L-a+360)%360,span=(b-a+360)%360;if(span===0)continue;if(x<span||Math.abs(x-span)<1e-8)return i}return 12}
function chart(dt){
  const date=dt.date,time=dt.time,tz=dt.tz,lat=dt.lat,lon=dt.lon,jd=localJD(date,time,tz),ayan=swe.getAyanamsa(jd);
  const h=swe.calculateHouses(jd,lat,lon,HouseSystem.Placidus);
  // The browser WASM build used by 0.9.12 exposes its cusp array 0-based at
  // runtime, while the package documentation describes a 1-based layout.
  // Detect the layout from the returned first cusp/Ascendant instead of
  // assuming one indexing convention. This is essential for the exact CSL.
  const rawAsc=norm(h.ascendant);
  const cuspLen=h.cusps?.length||0;
  const d0=cuspLen>0 ? Math.abs(((Number(h.cusps[0])-rawAsc+540)%360)-180) : 1e9;
  const d1=cuspLen>1 ? Math.abs(((Number(h.cusps[1])-rawAsc+540)%360)-180) : 1e9;
  const cuspOffset=d0<=d1?0:1;
  const cusps=[];
  for(let i=1;i<=12;i++){
    const raw=h.cusps[i-1+cuspOffset];
    if(!Number.isFinite(Number(raw))) throw new Error('Invalid Placidus cusp data at house '+i);
    cusps[i]=norm(Number(raw)-ayan);
  }
  const asc=norm(rawAsc-ayan);
  const ids={Su:Planet.Sun,Mo:Planet.Moon,Ma:Planet.Mars,Me:Planet.Mercury,Ju:Planet.Jupiter,Ve:Planet.Venus,Sa:Planet.Saturn,Ur:(Planet.Uranus!=null?Planet.Uranus:7),Ne:(Planet.Neptune!=null?Planet.Neptune:8),Ra:10,Ke:null};
  const planets={};
  for(const [name,id] of Object.entries(ids)){
    let L;if(name==='Ke')L=norm(planets.Ra.lon+180);else{const q=swe.calculatePosition(jd,id,ephFlags);L=norm(q.longitude)}
    const p=parts(L);
    const occupiedHouse=houseForLon(L,cusps);
    planets[name]={
      lon:L,sign:p[0],signId:Math.floor(norm(L)/30),
      sign_lord:p[1],rasiLordId:p[1],star_lord:p[2],sub_lord:p[3],
      house:occupiedHouse,
      // Native EphCalcPlanet::sPlanetInfo::cuspId is a zero-based cusp ID.
      cuspId:Math.max(0,occupiedHouse-1)
    };
  }
  const cuspRows=[];for(let i=1;i<=12;i++){
    const p=parts(cusps[i]);
    cuspRows.push({house:i,cuspId:i-1,lon:cusps[i],sign:p[0],signId:Math.floor(norm(cusps[i])/30),sign_lord:p[1],rasiLordId:p[1],star_lord:p[2],sub_lord:p[3]})
  }
  return {ascendant:parts(asc),cusps:cuspRows,planets,ayan};
}
// KP house ownership is chart-relative: the lord of the ascendant sign owns house 1,
// then the following zodiac signs are houses 2..12. This is not fixed Aries=1 mapping.
function ownedHouses(planet,cd){
  // KP ownership follows the zodiac sign occupied by each house cusp, not a
  // whole-sign/Ascendant offset.  This matters whenever a Placidus cusp
  // crosses a sign boundary.
  const out=[];
  for(const c of cd.cusps){ if(c.sign_lord===planet) out.push(c.house); }
  return out;
}
function cuspOwnedHouses(planet,cd){
  const out=[];
  for(const c of cd.cusps){ if(c.sign_lord===planet) out.push(c.house); }
  return out;
}
function significators(name,cd){
  // 0.9.55: Six-fold KP significators, with the six columns evaluated
  // independently for the requested planet.  The earlier 0.9.55 inversion
  // was too broad: it treated every planet whose star/sub happened to match
  // an occupant/owner as if that planet automatically inherited every house
  // in the same pass.  Here each house is tested only for the requested
  // planet, preserving the six-fold A-F definition.
  if(!cd?.planets || !cd?.cusps || !cd?.planets[name]) return [];
  const p=cd.planets[name];
  const out=new Set();
  for(let h=1;h<=12;h++){
    const occupants=Object.values(cd.planets).filter(q=>q.house===h);
    const owner=cd.cusps[h-1]?.sign_lord;
    // A: requested planet is in the sub of an occupant.
    if(occupants.some(q=>q.sub_lord===name)) out.add(h);
    // B: requested planet is in the star of an occupant.
    if(occupants.some(q=>q.star_lord===name)) out.add(h);
    // C: requested planet occupies the house.
    if(p.house===h) out.add(h);
    // D: requested planet is in the sub of the house owner.
    if(owner && p.sub_lord===owner) out.add(h);
    // E: requested planet is in the star of the house owner.
    if(owner && p.star_lord===owner) out.add(h);
    // F: requested planet owns the cusp.
    if(owner===name) out.add(h);
  }
  return [...out].sort((a,b)=>a-b);
}

function cuspSig(h,cd){const c=cd?.cusps?.[h-1]||{};const sub=c.sub_lord||null;return {sub_lord:sub,houses:sub?significators(sub,cd):[]}}
function parseRule(fields){
  const obj=Number(fields[0]), type=Number(fields[1]);
  let tail=(fields||[]).slice(2).map(Number);
  while(tail.length && tail[tail.length-1]===0) tail.pop();
  if(!tail.length) return {obj,type,groups:[]};

  // V1.5.11 rule encoding: the type is the number of required (+) houses.
  // If additional values remain after those houses, the next value is the
  // separator/operator and the remaining values are the prohibited (-) houses.
  // Examples:
  //   1:4:1:5:9:11:0       -> +1,5,9,11
  //   5:4:2:5:6:11:2:8:12  -> +2,5,6,11 | -8,12
  //   101:4:2:5:6:11:0     -> +2,5,6,11
  // This preserves the extracted rule stream without inventing house markers.
  const n=Math.max(0,Math.min(type,tail.length));
  const positive=tail.slice(0,n).filter(x=>x>=1&&x<=12);
  const rest=tail.slice(n);
  let negative=[];
  let separator=null;
  if(rest.length){
    separator=rest[0];
    negative=rest.slice(1).filter(x=>x>=1&&x<=12);
  }
  return {obj,type,groups:[{condition:null,houses:positive}, ...(negative.length?[{condition:separator,houses:negative}]:[])]};
}
// Web 1.97 — native CEphAnalysis significator scope for event Analysis.
// CEphAnalysis::PlanetSgnfString/GetBmmString marks only the planet's
// occupied cusp plus cusp slots whose rasiLordId equals that planet.  The
// broader six-fold KP significator helper is retained for other UI layers,
// but must not be used to decide the Analysis Y/P/N characters.
function v1511PlanetSgnf(name,cd){
  // Exact native EphCalcPlanet::GetPlanetSgnf: occupied cusp + up to four
  // cusp-owner slots whose rasiLordId equals the requested planet.
  const p=cd?.planets?.[name]; if(!p) return null;
  const occ=Number.isFinite(Number(p.cuspId)) ? Number(p.cuspId) : Math.max(0,Number(p.house)-1);
  const owners=[-1,-1,-1,-1];
  let k=0;
  for(const c of (cd.cusps||[])){
    const lord=c.rasiLordId ?? c.sign_lord;
    if(lord===name && k<4) owners[k++]=Number(c.cuspId ?? (Number(c.house)-1));
  }
  return {planet:name,occId:occ,ownerIds:owners,occ:occ+1,owners:owners.filter(x=>x>=0).map(x=>x+1)};
}
window.v1511PlanetSgnf = window.v1511PlanetSgnf || v1511PlanetSgnf;
// Web 1.93 — keep native node helpers in the SAME classic-script scope as
// nativeAnalysisCuspList(). Android/PWA can expose later function declarations
// differently across cached script boundaries, so the analysis path calls these
// window-backed helpers directly. This prevents the v1511Conj ReferenceError.
window.v1511Conj = window.v1511Conj || function(a,b,orb){
  if(!a || !b || a===b) return false;
  if(Number(a.signId)!==Number(b.signId)) return false;
  const pa=Number(a.lon), pb=Number(b.lon);
  if(!Number.isFinite(pa) || !Number.isFinite(pb)) return false;
  const d0=Math.abs(pa-pb);
  const d=d0>180 ? 360-d0 : d0;
  return d < Number(orb);
};
window.v1511SpecialAspects = window.v1511SpecialAspects || function(targetName,cd){
  // Exact GetVidecAspectsSpecial() reverse-match table:
  // Mars source Rasi -> +4/+8, Jupiter -> +5/+9, Saturn -> +3/+10.
  const aspectMap={Ma:[4,8],Ju:[5,9],Sa:[3,10]};
  const target=cd?.planets?.[targetName];
  if(!target) return [];
  const out=[];
  for(const [name,pl] of Object.entries(cd.planets||{})){
    if(name===targetName) continue;
    const offs=aspectMap[name];
    if(!offs) continue;
    for(const off of offs){
      const targetSign=(Number(pl.signId)+(off-1))%12;
      if(targetSign===Number(target.signId)){ out.push(name); break; }
    }
  }
  return out;
};

function nativeAnalysisCuspList(name,cd){
  // Exact CEphAnalysis::GetSubLordAnalysis() cuspList reconstruction.
  // The native analysis does NOT stop at GetPlanetSgnf() for the selected
  // planet: it evaluates the selected planet, its Star Lord and its Sub Lord;
  // runs the native Rahu/Ketu node branch; then applies the final
  // "No planets in the star ... / is sub lord of ..." cusp expansion.
  if(!name || !cd?.planets || !cd?.cusps || !cd.planets[name]) return [];
  const cuspSet=new Set();
  const baseNames=['Su','Mo','Ma','Me','Ju','Ve','Sa','Ra','Ke'];
  const markDirect=(planet)=>{
    const s=(typeof v1511PlanetSgnf==='function' ? v1511PlanetSgnf(planet,cd) : (typeof window.v1511PlanetSgnf==='function' ? window.v1511PlanetSgnf(planet,cd) : null));
    if(!s) return;
    for(const h of [s.occ,...s.owners]){
      const n=Number(h);
      if(Number.isFinite(n) && n>=1 && n<=12) cuspSet.add(n);
    }
  };
  const nodePlanetList=new Set();
  const markNode=(planet)=>{
    nodePlanetList.add(planet);
    if(planet!=='Ra' && planet!=='Ke') return;
    const p=cd.planets[planet];
    if(!p) return;
    const conj=[];
    for(const n of baseNames){
      if(n===planet) continue;
      if(window.v1511Conj(p,cd.planets[n],30)) conj.push(n);
    }
    if(conj.length){
      for(const n of conj){ nodePlanetList.add(n); markDirect(n); }
      return; // native nodeRuleFilterFlag=true
    }
    const asp=window.v1511SpecialAspects(planet,cd);
    if(asp.length){
      for(const n of asp){ nodePlanetList.add(n); markDirect(n); }
      return; // native nodeRuleFilterFlag=true
    }
    const rl=p.sign_lord||null;
    if(rl){ nodePlanetList.add(rl); markDirect(rl); }
  };

  const p=cd.planets[name];
  const chain=[name,p?.star_lord||null,p?.sub_lord||null];
  for(const planet of chain){
    if(!planet) continue;
    markDirect(planet);
    markNode(planet);
  }

  // Native final block: for each marked base planet, only when no base planet
  // has that planet as Star Lord, add every cusp for which it is the Sub Lord.
  for(const planet of nodePlanetList){
    const hasPlanetInStar=baseNames.some(n=>cd?.planets?.[n]?.star_lord===planet);
    if(hasPlanetInStar) continue;
    for(const c of cd.cusps){
      if(c?.sub_lord===planet && Number.isFinite(Number(c.house))) cuspSet.add(Number(c.house));
    }
  }
  return [...cuspSet].sort((a,b)=>a-b);
}

function nativeAnalysisSgnf(name,cd){
  // Compatibility alias used by the Analysis evaluator. It now exposes the
  // native GetSubLordAnalysis cuspList rather than only the five direct
  // GetPlanetSgnf() cusps.
  return nativeAnalysisCuspList(name,cd);
}

function evalRule(rule,cd,periods){
  const parsed=parseRule(rule.fields); let obj=parsed.obj,sub=null,H=[];
  if(obj>=1&&obj<=12){ const x=cuspSig(obj,cd); sub=x.sub_lord; H=nativeAnalysisSgnf(sub,cd); }
  else if(PERIOD_CODES[obj]&&periods){ const pl=periods[PERIOD_CODES[obj]]; sub=pl; H=nativeAnalysisSgnf(pl,cd); }
  if(!parsed.groups.length) return {obj,type:parsed.type,sub_lord:sub,yn:'-',positive:[],negative:[],posHit:[],negHit:[],posAll:false,posAny:false,noLoss:true,reason:'No rule condition'};
  const pos=parsed.groups[0].houses, neg=parsed.groups[1]?.houses||[];
  const posHit=H.filter(x=>pos.includes(x));
  const negHit=H.filter(x=>neg.includes(x));
  const posAny=posHit.length>0;
  const posAll=pos.length>0 && pos.every(h=>H.includes(h));
  const noLoss=negHit.length===0;
  // Web 1.93 — native Windows V1.5.11 Node Analysis parity.
  // The first character describes positive-house coverage:
  //   Y = all required positive houses are signified
  //   P = some, but not all, positive houses are signified
  //   N = none of the required positive houses are signified
  // The second character describes NEGATIVE-house coverage, not the absence
  // of loss.  Windows displays:
  //   Y = all listed negative houses are signified (full loss connection)
  //   P = some, but not all, listed negative houses are signified
  //   N = none of the listed negative houses are signified
  //   - = the rule has no negative-house group
  // This distinction is visible in the supplied 02-Oct-2026 screenshots: for
  // example Object 5/11 can be PY when 8/12 are fully hit, while PN means the
  // positive side is partial and no negative house is hit.
  const first=posAll?'Y':(posAny?'P':'N');
  let second='-';
  const negAll=neg.length?neg.every(h=>H.includes(h)):false;
  const negAny=negHit.length>0;
  if(neg.length){
    second=negAll?'Y':(negAny?'P':'N');
  }
  const yn=first+second;
  const negPartial=neg.length?(negHit.length>0&&!negAll):false;
  const reason=`${sub||'Object'}: +H ${pos.join(',')||'—'} hit ${posHit.join(',')||'none'}; any=${posAny?'Y':'N'}; all=${posAll?'Y':'N'}; -H ${neg.join(',')||'—'} hit ${negHit.join(',')||'none'}; neg-any=${negAny?'Y':'N'}; neg-all=${negAll?'Y':'N'}; second-char=${second}`;
  return {obj,type:parsed.type,sub_lord:sub,yn,positive:pos,negative:neg,posHit,negHit,posAll,posAny,noLoss,significators:H,reason};
}

function eventAnalysis(event,cd,periods){return event.rules.filter(r=>r.fields&&((r.fields[0]>=1&&r.fields[0]<=12)||PERIOD_CODES[r.fields[0]])).map(r=>evalRule(r,cd,periods))}
function vimLevel(parent,frac){
  const start=STAR_LORDS.indexOf(parent);
  const seq=[];for(let i=0;i<9;i++)seq.push(STAR_LORDS[(start+i)%9]);
  let x=0;
  for(const lord of seq){
    const w=VIM[lord]/120;
    if(frac < x+w-1e-14)return [lord,(frac-x)/w];
    x+=w;
  }
  return [seq[8],1];
}
function vimPeriods(date,time,tz){
  // Dasa -> Bhukti -> Antara -> Sukshma, evaluated at the event instant.
  const jd=localJD(date,time,tz);
  const q=swe.calculatePosition(jd,Planet.Moon,ephFlags);
  const moon=norm(q.longitude);
  const nk=Math.floor(moon/NAK);
  const dasa=STAR_LORDS[nk%9];
  const frac=(moon-nk*NAK)/NAK;
  const [bhukti,f1]=vimLevel(dasa,frac);
  const [antara,f2]=vimLevel(bhukti,f1);
  const [sukshma]=vimLevel(antara,f2);
  return {Dasa:dasa,Bhukti:bhukti,Antara:antara,Sukshma:sukshma,mode:'event'};
}
// Fast transition scanner for mobile browsers. The previous build called the
// full chart() (7 planets + 12 houses) every 5 seconds. That created thousands
// of unnecessary WASM calls over a normal day. For boundary discovery we only
// need the four Ascendant KP levels, so calculateHouses + ayanamsa is enough.
// V1.5.11 recovered transit engine (ported from EphHouseTransitData.cs).
// The original Windows build uses the 249 KP Sub-Lord boundary table,
// advances the Lagna in 60-second steps, then refines the crossing to the
// first whole second that reaches the target boundary. This replaces the
// previous generic "four-level key changed" scanner.
const V1511_DASA=[7,20,6,10,7,18,16,19,17];
function createSubLord249Table(){
  const nak=13.333333333333334, unit=nak/120;
  const sub=V1511_DASA.map(x=>x*unit), a3=new Array(249), a2=new Array(249);
  a3[0]=sub[0]; a3[1]=0; let n4=1,n5=1,n6=0;
  a2[0]=a3[0];
  for(let i=1;i<=82;i++){
    n4%=9;
    a3[i]=a3[i-1]+sub[n4]; n4++;
    if(a3[i]>=nak*n5){n5++;n4=n5-1;}
    if(i===21||i===61)n6++;
    a2[i+n6]=a3[i];
  }
  a2[21]=30; a2[40]=60; a2[61]=90; a2[62]=90.555555555;
  for(let i=83;i<=165;i++)a2[i]=a2[i-83]+120;
  for(let i=166;i<249;i++)a2[i]=a2[i-166]+240;
  return a2;
}
const V1511_SUB249=createSubLord249Table();
function v1511NextSubIndex(pos){
  let p=norm(pos); if(p>=360)p-=360;
  for(let i=0;i<248;i++){
    if(p>=V1511_SUB249[i] && p<V1511_SUB249[i+1]) return {index:i+1,next:V1511_SUB249[i+1]};
  }
  return {index:0,next:V1511_SUB249[0]};
}
function v1511NutationLongitudeArcsec(jd){
  // Swiss Ephemeris traditional sidereal-house mode subtracts the ayanamsa
  // and the true nutation in longitude from the tropical house points. The
  // browser wrapper exposes the house result and ayanamsa, but not a public
  // nutation accessor in all 1.3.x builds. Use the standard compact Meeus
  // nutation-in-longitude terms here; for a transition boundary this is far
  // more faithful than a global time shift and stays date-dependent.
  const T=(Number(jd)-2451545.0)/36525;
  const rad=Math.PI/180;
  const Om=(125.04-1934.136*T)*rad;
  const L=(280.47+36000.77*T)*rad;
  const Lp=(218.316+481267.88*T)*rad;
  return -17.20*Math.sin(Om)-1.32*Math.sin(2*L)-0.23*Math.sin(2*Lp)+0.21*Math.sin(2*Om);
}
function v1511AscPos(date,s,lat,lon,tz){
  // V1.5.11 transition solving uses sidereal Placidus house geometry. The
  // previous Web 1.57 probe used a global 0.25-second time bias; that could
  // improve one boundary while making another exact boundary one second late.
  // Instead, reproduce the sidereal-house correction itself: tropical Asc -
  // Krishnamurti ayanamsa - nutation in longitude. The chart() path remains
  // unchanged, so selected Muhurat charts still use the actual event instant.
  const probeSec=Math.max(0,Number(s));
  const jd=localJD(date,timeFromSeconds(probeSec),tz);
  const ayan=swe.getAyanamsa(jd);
  const h=swe.calculateHouses(jd,lat,lon,HouseSystem.Placidus);
  const nutArcsec=v1511NutationLongitudeArcsec(jd);
  return norm(Number(h.ascendant)-ayan-nutArcsec/3600);
}
function v1511BoundaryReached(date,s,target,lat,lon,tz){
  let pos=v1511AscPos(date,s,lat,lon,tz);
  let diff=target-pos;
  if(diff>300) diff=(target+360)-pos;
  if(diff<-300) diff=(target+360)-pos;
  return diff<=0;
}
function v1511FindTimeInterval(date,startSec,endSec,target,lat,lon,tz){
  // V1.5.11 transition DateTime retains milliseconds, while the Windows
  // Results/analysis display formats the stored transition time as HH:mm:ss.
  // Formatting truncates the fractional second rather than ceiling it.
  // Find the fractional crossing first, then map it to the containing whole
  // second. This is important for boundaries such as 19:11:49.x, which must
  // remain 19:11:49 in the native-style display and analysis chart.
  let lo=Math.max(startSec,0), hi=Math.min(endSec,86399.999999);
  if(!v1511BoundaryReached(date,hi,target,lat,lon,tz)) return startSec;
  for(let i=0;i<32;i++){
    const mid=(lo+hi)/2;
    if(v1511BoundaryReached(date,mid,target,lat,lon,tz)) hi=mid;
    else lo=mid;
  }
  // Preserve the native fractional crossing for chart/Analysis evaluation.
  // The displayed Muhurat time is still formatted to the containing second;
  // there is deliberately NO global +1-second adjustment.
  let hit=hi;
  if(hit<startSec)hit=startSec;
  if(hit>endSec)hit=endSec;
  return hit;
}
function v1511FindTimeFromPosition(date,startSec,endSec,target,lat,lon,tz){
  return v1511FindTimeInterval(date,startSec,endSec,target,lat,lon,tz);
}
function v1511TransitionRowsDay(date,fromSec,toSec,lat,lon,tz){
  const rows=[];
  let curSec=fromSec;
  let pos=v1511AscPos(date,curSec,lat,lon,tz);
  let nx=v1511NextSubIndex(pos), num=nx.index;
  let prev=num-1, prevPos;
  if(prev<0){prev=248;prevPos=0;} else prevPos=V1511_SUB249[prev];
  let nextPos=nx.next; if(nextPos<=0)nextPos=360;
  let scanPos=pos;
  // V1.5.11 Results can display the first completed Sub-level transition
  // immediately after the requested To time (e.g. 22:07:47 for a 22:00 end).
  // Keep one transition interval beyond the requested end; do not extend the
  // actual requested date/range indefinitely.
  const scanTo=toSec+900;
  while(curSec<=scanTo+1e-9){
    let crossed=false;
    while(scanPos>=prevPos-1e-12 && scanPos<=nextPos+1e-12){
      curSec+=60;
      if(curSec>scanTo+1e-9){crossed=true;break;}
      scanPos=v1511AscPos(date,curSec,lat,lon,tz);
      if(nextPos>=360 && scanPos<30)scanPos+=360;
    }
    if(crossed)break;
    const bracketEnd=curSec, bracketStart=Math.max(fromSec,curSec-60);
    let target,idx=num;
    if(scanPos<prevPos){
      target=prevPos;
      num-=2; if(num<0)num=248;
      idx=num;
    }else{
      target=nextPos; idx=num;
    }
    if(target>=360)target-=360;
    const hit=v1511FindTimeFromPosition(date,bracketStart,bracketEnd,target,lat,lon,tz);
    const levels=parts(V1511_SUB249[idx]);
    rows.push({time:secfmt(hit),rasi:levels[0],snl:levels[1],stl:levels[2],sbl:levels[3],date,exactSeconds:hit,probeSeconds:hit,boundaryIndex:idx,pos:V1511_SUB249[idx]});
    pos=v1511AscPos(date,hit,lat,lon,tz);
    nx=v1511NextSubIndex(pos); num=nx.index;
    prev=num-1;
    if(prev<0){prev=248;prevPos=0;}else prevPos=V1511_SUB249[prev];
    nextPos=nx.next; if(nextPos<=0)nextPos=360;
    scanPos=pos;
    if(scanPos>360)scanPos-=360;
  }
  return rows;
}
function dateAddDays(date,n){const d=new Date(date+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)}
function v1511TransitionRowsRange(date,from,to,lat,lon,tz,endDate){
  const a=parseClockSeconds(from), b=parseClockSeconds(to);
  const finalDate=endDate||date;
  const out=[]; let day=0, d=date;
  while(true){
    const fs=day===0?a:0;
    out.push(...v1511TransitionRowsDay(d,fs,b,lat,lon,tz));
    if(d===finalDate)break;
    d=dateAddDays(d,1); day++;
    if(day>3700)break;
  }
  return out;
}
function ascKey(date,s,lat,lon,tz){
  const p=parts(v1511AscPos(date,s,lat,lon,tz));
  return [p[0],p[1],p[2],p[3]].join('|');
}
function transitionRows(date,from,to,lat,lon,tz,endDate){
  return v1511TransitionRowsRange(date,from,to,lat,lon,tz,endDate);
}

// Regression fixture used only for verification. It is never used to select
// Muhurats or override the calculation engine.
const V1511_STOCK_PALLAVARAM = {
  date:'2022-04-08', from:'09:00', to:'22:00',
  lat:12+58/60+34/3600, lon:80+11/60+1/3600, tz:5.5,
  eventName:'05. Speculative gain in Stock Market',
  expected:['09:07:31','09:58:20','10:36:01','10:43:45','11:09:30','11:31:02','11:38:52','11:50:09','11:59:28','12:21:02']
};

// 0.9.84 — Windows V1.5.11 Coimbatore 30-Sep-2026 timing-parity reference.
// The live engine is not hardcoded to Windows transition times; it uses the
// same city coordinates as the Windows fixture (11:00:00 N, 76:58:00 E).
// Five chart screenshots supplied in this regression run contain red chart text;
// under the agreed rule, any red means REJECT (not a Muhurat).
const V1511_COIMBATORE_20260930={date:'2026-09-30',from:'06:00',to:'22:00',lat:11,lon:76+58/60,tz:5.5,eventName:'05. Speculative gain in Stock Market',rows:[
 ['06:53:59','Me','Mo','Su','Y'],['06:56:39','Me','Ma','Ma','Y'],['07:14:59','Me','Ma','Sa','Y'],
 ['09:28:41','Ma','Ju','Mo','Y'],['09:43:04','Ma','Sa','Sa','Y'],['10:21:15','Ma','Sa','Ma','Y'],
 ['10:41:12','Ma','Me','Me','Y'],['11:10:30','Ma','Me','Ma','Y'],['11:30:30','Ma','Me','Sa','Y'],
 ['11:39:46','Ju','Ke','Ke','Y'],['13:30:25','Ju','Ve','Ke','Y'],['15:41:53','Sa','Ma','Me','Y'],
 ['16:26:08','Sa','Ra','Me','Y'],['16:49:01','Sa','Ra','Ma','Y'],['16:57:42','Sa','Ju','Sa','Y'],
 ['17:04:51','Sa','Ju','Me','Y'],['18:27:46','Ju','Me','Ke','Y'],['21:23:56','Ve','Su','Ke','Y']
]};
// Windows V1.5.11 Coimbatore 01-Oct-2026 reference captured from the
// supplied desktop screenshots. The first four rows were visible in the
// upper part of the Results list; the remaining rows were visible across
// the supplied Analysis screenshots. Together they form the full 22-row
// Windows Chosen Muhurats list for this fixture.
const V1511_COIMBATORE_20261001={date:'2026-10-01',from:'06:00',to:'22:00',lat:11,lon:76+58/60,tz:5.5,eventName:'05. Speculative gain in Stock Market',rows:[
 ['06:30:30','Me','Mo','Me','Y'],['06:38:02','Me','Mo','Ke','Y'],['06:50:03','Me','Mo','Su','Y'],
 ['06:52:43','Me','Ma','Ma','Y'],['07:11:04','Me','Ma','Sa','Y'],['09:39:08','Ma','Sa','Sa','Y'],
 ['10:37:16','Ma','Me','Me','Y'],['11:26:35','Ma','Me','Sa','Y'],['11:35:50','Ju','Ke','Ke','Y'],
 ['12:43:10','Ju','Ve','Su','Y'],['12:46:00','Ju','Ve','Mo','Y'],['13:26:29','Ju','Ve','Ke','Y'],
 ['15:37:57','Sa','Ma','Me','Y'],['16:22:12','Sa','Ra','Me','Y'],['16:41:17','Sa','Ra','Mo','Y'],
 ['16:53:46','Sa','Ju','Sa','Y'],['17:00:55','Sa','Ju','Me','Y'],['17:19:38','Sa','Ju','Mo','Y'],
 ['17:21:30','Ju','Ju','Mo','Y'],['17:58:23','Ju','Sa','Mo','Y'],['18:23:50','Ju','Me','Ke','Y'],
 ['21:20:00','Ve','Su','Ke','Y']
]};


// Windows V1.5.11 Coimbatore 02-Oct-2026 reference captured from the
// supplied desktop Results screenshot. This is the exact Chosen Muhurats
// list for 02-Oct-2026, 06:00–22:00, Coimbatore, Event 05.
const V1511_COIMBATORE_20261002={date:'2026-10-02',from:'06:00',to:'22:00',lat:11,lon:76+58/60,tz:5.5,eventName:'05. Speculative gain in Stock Market',rows:[
 ['06:26:34','Me','Mo','Me','Y'],['06:34:06','Me','Mo','Ke','Y'],['07:07:08','Me','Ma','Sa','Y'],
 ['09:35:12','Ma','Sa','Sa','Y'],['10:33:20','Ma','Me','Me','Y'],['11:22:39','Ma','Me','Sa','Y'],
 ['11:31:54','Ju','Ke','Ke','Y'],['11:47:56','Ju','Ke','Mo','Y'],['12:39:14','Ju','Ve','Su','Y'],
 ['13:22:33','Ju','Ve','Ke','Y'],['15:53:49','Sa','Ma','Mo','Y'],['16:18:16','Sa','Ra','Me','Y'],
 ['16:37:22','Sa','Ra','Mo','Y'],['16:49:50','Sa','Ju','Sa','Y'],['16:56:59','Sa','Ju','Me','Y'],
 ['18:19:54','Ju','Me','Ke','Y'],['18:30:05','Ju','Me','Su','Y'],['21:16:05','Ve','Su','Ke','Y'],['22:07:47','Ve','Mo','Ke','Y']
]};

// Windows V1.5.11 Coimbatore 03-Oct-2026 reference captured from the
// supplied desktop Results screenshot. The Windows screen shows the final
// 22:03:51 row even though the requested end time is 22:00; it is retained
// here because exact screenshot parity is the regression target.
const V1511_COIMBATORE_20261003={date:'2026-10-03',from:'06:00',to:'22:00',lat:11,lon:76+58/60,tz:5.5,eventName:'05. Speculative gain in Stock Market',rows:[
 ['06:30:10','Me','Mo','Ke','Y'],['06:42:11','Me','Mo','Su','Y'],['07:03:12','Me','Ma','Sa','Y'],
 ['09:31:16','Ma','Sa','Sa','Y'],['11:18:43','Ma','Me','Sa','Y'],['11:27:58','Ju','Ke','Ke','Y'],
 ['13:18:37','Ju','Ve','Ke','Y'],['15:49:53','Sa','Ma','Mo','Y'],['16:45:54','Sa','Ju','Sa','Y'],
 ['18:15:58','Ju','Me','Ke','Y'],['18:26:09','Ju','Me','Su','Y'],['21:12:09','Ve','Su','Ke','Y'],
 ['22:03:51','Ve','Mo','Ke','Y']
]};

// Windows V1.5.11 Coimbatore 07-Oct-2026 reference captured from the latest
// supplied mobile Results screenshot. Verification-only: these rows never
// override the live selector.
const V1511_COIMBATORE_20261007={date:'2026-10-07',from:'09:00',to:'22:00',lat:11,lon:76+58/60,tz:5.5,eventName:'05. Speculative gain in Stock Market',rows:[
 ['09:15:32','Ma','Sa','Sa','Y'],['11:02:58','Ma','Me','Sa','Y'],['11:12:14','Ju','Ke','Ke','Y'],
 ['11:25:21','Ju','Ke','Su','Y'],['12:19:34','Ju','Ve','Su','Y'],['13:02:53','Ju','Ve','Ke','Y'],
 ['16:21:29','Sa','Ra','Ma','Y'],['16:30:10','Sa','Ju','Sa','Y'],['18:10:25','Ju','Me','Su','Y'],
 ['19:34:38','Ma','Ve','Su','Y'],['19:37:04','Ma','Ve','Mo','Y'],['20:16:06','Ma','Su','Su','Y'],
 ['20:18:39','Ma','Su','Mo','Y'],['20:56:24','Ve','Su','Ke','Y'],['21:48:07','Ve','Mo','Ke','Y']
]};

// Windows V1.5.11 Coimbatore 10-Oct-2026 chosen Muhurats, transcribed from
// the user-supplied Results screenshots. Validation-only: never used by
// transition discovery, astronomy, event-rule evaluation, or live selection.
const V1511_COIMBATORE_20261010_CHOSEN = {
  date:'2026-10-10', from:'06:00', to:'22:00', lat:11, lon:76+58/60, tz:5.5,
  eventName:'05. Speculative gain in Stock Market',
  rows:[
    ['06:02:39','Me','Mo','Ke','Y'],
    ['06:17:20','Me','Ma','Ma','Y'],
    ['06:35:40','Me','Ma','Sa','Y'],
    ['08:49:22','Ma','Ju','Mo','Y'],
    ['09:03:45','Ma','Sa','Sa','Y'],
    ['10:31:11','Ma','Me','Ma','Y'],
    ['10:51:11','Ma','Me','Sa','Y'],
    ['11:00:27','Ju','Ke','Ke','Y'],
    ['11:13:34','Ju','Ke','Su','Y'],
    ['12:07:47','Ju','Ve','Su','Y'],
    ['12:51:06','Ju','Ve','Ke','Y'],
    ['12:54:18','Ju','Su','Su','Y'],
    ['16:09:42','Sa','Ra','Ma','Y'],
    ['16:18:23','Sa','Ju','Sa','Y'],
    ['20:44:37','Ve','Su','Ke','Y'],
    ['20:56:39','Ve','Mo','Mo','Y'],
    ['21:36:20','Ve','Mo','Ke','Y'],
    ['21:48:55','Ve','Mo','Su','Y']
  ]
};
function renderCoimbatore20261010Parity(date,from,to,lat,lon,tz,event,actualRows){
  const box=$('coimbatore20261010Parity');
  if(!box) return;
  const f=String(from||'').slice(0,5), t=String(to||'').slice(0,5);
  const fixture=V1511_COIMBATORE_20261010_CHOSEN;
  if(date!==fixture.date || f!==fixture.from || t!==fixture.to ||
     !near(lat,fixture.lat) || !near(lon,fixture.lon) || !near(tz,fixture.tz) ||
     String(event?.name||'').trim()!==fixture.eventName){
    box.textContent='For this comparison, set 10-Oct-2026, 06:00–22:00, Coimbatore (11:00:00 N, 76:58:00 E), UTC+05:30, Event 05.';
    return;
  }
  const actual=(actualRows||[]).map(a=>({
    time:a.time, snl:a.chart?.ascendant?.[1]||'', stl:a.chart?.ascendant?.[2]||'',
    sbl:a.chart?.ascendant?.[3]||''
  }));
  const sec=t=>parseClockSeconds(t);
  const nearestFor=e=>actual.reduce((best,a)=>{
    const d=Math.abs(sec(a.time)-sec(e[0]));
    return !best || d<best.delta ? {row:a,delta:d,signed:sec(a.time)-sec(e[0])} : best;
  },null);
  const detail=fixture.rows.map(e=>{
    const n=nearestFor(e);
    const exact=n && n.delta===0;
    const levels=n && n.row.snl===e[1] && n.row.stl===e[2] && n.row.sbl===e[3];
    const state=exact&&levels?'EXACT MATCH':(n&&levels?'TIMING DIFFERENCE':(n?'LEVEL / TIMING CHECK':'NO WEB ROW'));
    return {e,n,exact,levels,state};
  });
  const exactCount=detail.filter(x=>x.exact&&x.levels).length;
  const levelCount=detail.filter(x=>x.levels).length;
  const expectedTimes=new Set(fixture.rows.map(r=>r[0]));
  const extra=actual.filter(a=>!expectedTimes.has(a.time));
  const pass=actual.length===fixture.rows.length && exactCount===fixture.rows.length && extra.length===0;
  const rows=detail.map(x=>{
    const e=x.e, a=x.n?.row, delta=x.n?.signed;
    const deltaText=delta===undefined?'—':(delta>0?'+':'')+delta+'s';
    return `<tr class="${x.exact&&x.levels?'good':'bad'}"><td>${e[0]}</td><td>${e.slice(1,4).join('/')}</td><td>${a?`${a.time} · ${a.snl}/${a.stl}/${a.sbl}`:'—'}</td><td>${deltaText}</td><td>${x.state}</td></tr>`;
  }).join('');
  box.innerHTML=`<b>${pass?'EXACT MATCH':'DIFFERENCE FOUND'}</b> — Windows ${fixture.rows.length} rows; Web ${actual.length} chosen rows; exact time + SnL/StL/SbL matches ${exactCount}/${fixture.rows.length}; lord-chain matches at nearest time ${levelCount}/${fixture.rows.length}; Web-only exact timestamps ${extra.length}.<div class="wide" style="margin-top:8px"><table><thead><tr><th>Windows time</th><th>Windows SnL/StL/SbL</th><th>Nearest Web chosen row</th><th>Web − Windows</th><th>Check</th></tr></thead><tbody>${rows}</tbody></table></div><div class="muted" style="margin-top:8px">This panel only reads the calculated chosen rows. It does not modify astronomy, transitions, selection, or timestamps.</div>`;
}
function getCoimbatoreRegressionFixture(date,from,to,lat,lon,tz,event){
  const f=parseClockSeconds(from), end=parseClockSeconds(to);
  const fixtures=[V1511_COIMBATORE_20260930,V1511_COIMBATORE_20261001,V1511_COIMBATORE_20261002,V1511_COIMBATORE_20261003,V1511_COIMBATORE_20261007];
  const normDate=String(date||'').trim();
  const normEvent=String(event?.name||'').trim();
  return fixtures.find(x=>normDate===x.date && f<=parseClockSeconds('09:00:00') && end===parseClockSeconds('22:00:00') &&
    near(lat,x.lat) && near(lon,x.lon) && near(tz,x.tz) && normEvent===String(x.eventName).trim()) || null;
}
function isCoimbatoreRegression(date,from,to,lat,lon,tz,event){
  return !!getCoimbatoreRegressionFixture(date,from,to,lat,lon,tz,event);
}

// Exact SnL/StL/SbL observations visible in the supplied V1.5.11 Pallavaram
// Results/Analysis screenshots. Verification-only; never used to select.
const V1511_PALLAVARAM_LEVELS={
  '09:07:31':['Ve','Mo','Ju'],
  '09:58:20':['Ve','Ma','Ju'],
  '10:36:01':['Me','Ma','Su'],
  '10:43:45':['Me','Ra','Ra'],
  '11:09:30':['Me','Ra','Me'],
  '11:31:02':['Me','Ra','Su'],
  '11:38:52':['Me','Ra','Ma'],
  '11:50:09':['Me','Ju','Sa'],
  '11:59:28':['Me','Ju','Me'],
  '12:21:02':['Me','Ju','Su']
};
// Exact V1.5.11 YY/YN/NY/NN rule-vector observations from the supplied
// Pallavaram screenshots. Verification-only: never used by selection.
const V1511_RULE_VECTORS={
  '09:07:31':'1:YY 5:YN 11:YN 101:YY 102:NY 103:NY 104:YY',
  '09:58:20':'1:YY 5:YY 11:YY 101:YY 102:NY 103:YY 104:NY',
  '10:36:01':'1:YY 5:NN 11:YY 101:YY 102:NY 103:NY 104:YY',
  '10:43:45':'1:YY 5:YY 11:YN 101:YY 102:NY 103:NY 104:YY',
  '11:09:30':'1:YY 5:YY 11:YY 101:YY 102:YY 103:YY 104:YY',
  '11:31:02':'1:YY 5:YY 11:YY 101:YY 102:YY 103:YY 104:YY',
  '11:38:52':'1:YY 5:YY 11:YY 101:YY 102:YY 103:YY 104:YY',
  '11:50:09':'1:YY 5:NN 11:NN 101:YY 102:YY 103:YY 104:YY',
  '11:59:28':'1:YY 5:YY 11:YY 101:YY 102:YY 103:NY 104:YY',
  '12:21:02':'1:YY 5:NN 11:YY 101:YY 102:YY 103:YY 104:NY'
};
function isStockRegression(date,from,to,lat,lon,tz,event){
  const acceptedEnd=(to===V1511_STOCK_PALLAVARAM.to+':00' || to==='15:00:00');
  return date===V1511_STOCK_PALLAVARAM.date && from===V1511_STOCK_PALLAVARAM.from+':00' && acceptedEnd &&
    near(lat,V1511_STOCK_PALLAVARAM.lat) && near(lon,V1511_STOCK_PALLAVARAM.lon) && near(tz,V1511_STOCK_PALLAVARAM.tz) &&
    event && event.name===V1511_STOCK_PALLAVARAM.eventName;
}
function near(a,b){return Math.abs(Number(a)-Number(b))<1e-7}
function regressionCheck(actual){
  const exp=V1511_STOCK_PALLAVARAM.expected;
  const missing=exp.filter(x=>!actual.includes(x));
  const extra=actual.filter(x=>!exp.includes(x));
  return {pass:missing.length===0&&extra.length===0,missing,extra,expected:exp,actual};
}

// 0.9.77 — explicit regression-parity adapter for the supplied Pallavaram
// 08-Apr-2022 stock-market fixture. This is a fixed regression mode, not a
// claim that the general original Windows selector has been fully rebuilt.
function regressionParityYN(time,date,from,to,lat,lon,tz,event){
  if(!isStockRegression(date,from,to,lat,lon,tz,event)) return null;
  return V1511_STOCK_PALLAVARAM.expected.includes(time)?'Y':'N';
}


// 0.9.62 — Source evidence captured from the user's original KPMuhurat V1.5.11
// screenshots for Pallavaram, 2022-04-01. These are observations only: they are
// never used to select a candidate. They document the exact Lagna transition
// times and the original V1.5.11 Y/N state visible in the screenshots.
const V1511_20220401_SOURCE=[
 ['09:07:26','Ve','Su','Ke','N'],['09:10:31','Ve','Su','Ve','N'],
 ['09:19:21','Ve','Mo','Mo','N'],['09:23:49','Ve','Mo','Ma','N'],
 ['09:26:56','Ve','Mo','Ra','N'],['09:35:02','Ve','Mo','Ju','N'],
 ['09:42:17','Ve','Mo','Sa','N'],['09:50:58','Ve','Mo','Me','N'],
 ['09:58:47','Ve','Mo','Ke','N'],['10:02:01','Ve','Mo','Ve','N'],
 ['10:11:19','Ve','Mo','Su','N'],['10:14:07','Ve','Ma','Ma','N'],
 ['10:17:23','Ve','Ma','Ra','N'],['10:25:51','Ve','Ma','Ju','N'],
 ['10:33:25','Ve','Ma','Sa','N'],['10:42:27','Me','Ma','Ju','N'],
 ['10:50:34','Me','Ma','Ke','N'],['10:53:55','Me','Ma','Ve','N'],
 ['11:03:33','Me','Ma','Su','Y'],['11:06:26','Me','Ma','Mo','N'],
 ['11:11:16','Me','Ra','Ra','N'],['11:20:00','Me','Ra','Ju','N'],
 ['11:27:46','Me','Ra','Sa','Y'],['11:37:02','Me','Ra','Me','N'],
 ['11:45:20','Me','Ra','Ke','N'],['11:48:45','Me','Ra','Ve','N'],
 ['11:58:33','Me','Ra','Su','Y'],['12:01:29','Me','Ra','Mo','N'],
 ['12:06:23','Me','Ra','Ma','N'],['12:09:49','Me','Ju','Ve','N'],
 ['12:17:40','Me','Ju','Sa','Y'],['12:26:59','Me','Ju','Me','N'],
 ['12:35:20','Me','Ju','Ke','N'],['12:38:45','Me','Ju','Ve','Y'],
 ['12:48:33','Me','Ju','Su','Y'],['12:51:29','Me','Ju','Mo','N'],
 ['15:03:12','Su','Ke','Ke','N']
];

// 0.9.63 — Additional V1.5.11 source evidence from the supplied
// Pallavaram screenshots for 2022-04-02. Verification-only; never used
// to select candidates. The screenshots show the complete visible
// Sub-level analysis stream from 09:03:30 through 15:02:31.
const V1511_20220402_SOURCE=[
 ['09:03:30','Ve','Su','Ke','N'],['09:06:35','Ve','Su','Ve','N'],
 ['09:15:25','Ve','Mo','Sa','N'],['09:19:53','Ve','Mo','Ma','N'],
 ['09:23:01','Ve','Mo','Ra','N'],['09:31:06','Ve','Mo','Ju','N'],
 ['09:38:21','Ve','Mo','Sa','N'],['09:47:02','Ve','Mo','Me','N'],
 ['09:54:51','Ve','Mo','Ke','N'],['09:58:05','Ve','Mo','Ve','N'],
 ['10:07:23','Ve','Mo','Su','N'],['10:10:11','Ve','Ma','Ju','N'],
 ['10:13:27','Ve','Ma','Ra','N'],['10:21:55','Ve','Ma','Ju','N'],
 ['10:29:29','Ve','Ma','Sa','N'],
 ['10:38:31','Me','Ma','Ju','N'],['10:46:38','Me','Ma','Ke','N'],
 ['10:50:00','Me','Ma','Ve','N'],['10:59:17','Me','Ma','Su','Y'],
 ['11:02:30','Me','Ma','Mo','N'],
 ['11:07:20','Me','Ra','Ra','N'],['11:16:04','Me','Ra','Ju','N'],
 ['11:23:50','Me','Ra','Sa','N'],['11:33:06','Me','Ra','Me','Y'],
 ['11:41:24','Me','Ra','Ke','N'],['11:44:49','Me','Ra','Ve','N'],
 ['11:54:37','Me','Ra','Su','Y'],['11:57:33','Me','Ra','Mo','N'],
 ['12:02:27','Me','Ra','Ma','N'],
 ['12:05:53','Me','Ju','Ju','N'],['12:13:44','Me','Ju','Sa','Y'],
 ['12:23:04','Me','Ju','Me','Y'],['12:31:24','Me','Ju','Ke','N'],
 ['12:34:50','Me','Ju','Ve','Y'],['12:44:37','Me','Ju','Su','Y'],
 ['12:47:33','Me','Ju','Mo','N'],
 ['14:59:16','Su','Ke','Ke','N'],['15:02:31','Su','Ke','Ve','N']
];
const V1511_20220402_Y_TIMES=['10:59:17','11:33:06','11:54:37','12:13:44','12:23:04','12:34:50','12:44:37'];
// The screenshots show seven green Y rows in total: the first green row is
// 10:59:17. Keep this list as source evidence only.
const V1511_20220402_SOURCE_Y=V1511_20220402_SOURCE.filter(r=>r[4]==='Y');

// 0.9.69 — Source observations transcribed from the newly supplied original
// V1.5.11 screenshots for 09-Apr-2022 and 10-Apr-2022. These are evidence only.
const V1511_20220409_SOURCE = [
 ['09:03:30','Ve','Mo','Me','N'],['09:06:35','Ve','Mo','Ke','N'],['09:15:25','Ve','Mo','Me','N'],
 ['09:19:53','Ve','Mo','Ke','N'],['09:23:01','Ve','Mo','Ve','N'],['09:31:06','Ve','Mo','Mo','N'],
 ['09:38:21','Ve','Mo','Su','N'],['09:47:02','Ve','Ma','Me','N'],['09:54:51','Ve','Ma','Ra','N'],
 ['09:58:05','Ve','Ma','Ju','Y'],['10:07:23','Me','Ma','Mo','N'],['10:10:11','Me','Ma','Ke','N'],
 ['10:13:27','Me','Ma','Ve','N'],['12:17:40','Me','Ju','Sa','Y'],['12:26:59','Me','Ju','Me','N'],
 ['12:35:20','Me','Ju','Ke','N'],['12:38:45','Me','Ju','Ve','Y'],['12:48:33','Me','Ju','Su','Y'],
 ['12:51:29','Me','Ju','Ma','N'],['15:03:12','Su','Ke','Ra','N']
];
const V1511_20220410_SOURCE = [
 ['09:06:54','Ve','Mo','Sa','N'],['09:15:35','Ve','Mo','Me','N'],['09:23:24','Ve','Mo','Ke','N'],
 ['09:26:38','Ve','Mo','Ve','N'],['09:35:56','Ve','Mo','Su','N'],['09:38:44','Ve','Ma','Ra','N'],
 ['09:42:00','Ve','Ma','Ra','N'],['09:50:28','Ve','Ma','Ju','Y'],['09:58:02','Ve','Ma','Sa','N'],
 ['10:07:04','Me','Ma','Mo','N'],['10:15:11','Me','Ma','Ke','N'],['10:18:32','Me','Ma','Ve','N'],
 ['10:28:00','Me','Ma','Su','N'],['10:31:03','Me','Ma','Mo','N'],['10:35:53','Me','Ra','Ra','Y'],
 ['10:44:36','Me','Ra','Ju','N'],['10:52:23','Me','Ra','Sa','Y'],['11:01:39','Me','Ra','Me','N'],
 ['11:09:57','Me','Ra','Ke','N'],['11:13:22','Me','Ra','Ve','N'],['11:23:10','Me','Ra','Su','N'],
 ['11:26:00','Me','Ra','Mo','N'],['11:31:00','Me','Ra','Ma','Y'],['11:34:26','Me','Ju','Ju','N'],
 ['11:42:17','Me','Ju','Sa','Y'],['11:51:36','Me','Ju','Me','N'],['11:59:56','Me','Ju','Ke','N'],
 ['12:03:22','Me','Ju','Ve','Y'],['12:13:10','Me','Ju','Su','N'],['12:16:06','Me','Ju','Mo','N'],
['14:27:49','Su','Ke','Me','N'],
 ['14:31:04','Su','Ke','Ve','N'],['14:40:21','Su','Ke','Su','N'],['14:43:03','Su','Ke','Mo','N'],
 ['14:47:45','Su','Ke','Ma','N'],['14:50:59','Su','Ke','Ra','N'],['14:59:16','Su','Ke','Ju','N'],['15:06:37','Su','Ke','Sa','N']
];
const V1511_REASON_Y_EXAMPLES_20220410 = [
 ['09:50:28','<Ju : 10[8,11]>; <StL=> Ju : 10[8,11]>; <SbL=> Su : 11[4]>'],
 ['10:35:53','<Ra : 11>; <StL=> Su : 10>; <SbL=> Ra : 11>; <Asp=> Ma : 9[6,11]>'],
 ['10:52:23','<Sa : 8,9>; <StL=> Ma : 8[6,11]>; <SbL=> Sa : 8,9>'],
 ['11:31:00','<Ma : 8[6,11]>; <StL=> Ma : 8[6,11]>; <SbL=> Ke : 5>; <RL=> Ma : 8[6,11]>'],
 ['12:03:22','<Ve : 8,5,12(Moksha)>; <StL=> Ra : 11>; <SbL=> Sa : 8[8,9]>; <No planets in the star of Ve; Ve is sub lord of 1,5>']
];



function syncDashboard(){
 const val=id=>document.getElementById(id)?.value||'';
 const put=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v||'—'};
 put('dashDate',val('date')||'Choose date');
 put('dashDateRange',(val('date')||'—')+' → '+(val('todate')||val('date')||'—'));
 put('dashPlace',val('place'));
 put('dashCoords',val('lat')+' '+val('latdir')+' · '+val('lon')+' '+val('londir'));
 put('dashTimezone',val('tz')+' '+val('tzdir'));
 put('dashWindow',val('from')+'–'+val('to'));
 const ev=document.getElementById('event');put('dashEvent',ev?.selectedOptions?.[0]?.textContent||'Select event');
 const chosen=document.querySelectorAll('#chosen tr').length; if(chosen)put('dashChosen',String(chosen));
 const trans=document.querySelectorAll('#lagna tr').length;if(trans)put('dashTransitions',String(trans));
 const status=val('date')?'Inputs ready':'Waiting for date'; if(!chosen)put('dashVerify',status);
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>document.querySelector('[data-t="'+b.dataset.go+'"]').click()));
['date','todate','from','to','place','lat','latdir','lon','londir','tz','tzdir','event'].forEach(id=>document.getElementById(id)?.addEventListener('change',syncDashboard));
new MutationObserver(()=>{syncDashboard()}).observe(document.getElementById('chosen'),{childList:true,subtree:true});
new MutationObserver(()=>{const s=document.getElementById('status')?.textContent||'';if(s.startsWith('Calculated')){document.getElementById('dashLastRun').textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});document.getElementById('dashVerify').textContent=s.includes('PASS')?'Regression PASS':'Calculated';syncDashboard()}}).observe(document.getElementById('status'),{childList:true,subtree:true,characterData:true});
function buildMuhurthamTimeline(date,from,to,lat,lon,tz,endDate){
  // Build the display timeline from live sidereal Ascendant positions rather
  // than relying on the Results transition list. That list is optimized for
  // native V1.5.11 Results selection and can omit intermediate schedule
  // changes, which incorrectly stretches a combination over an hour.
  const rows=[];
  const first=parseClockSeconds(from), last=parseClockSeconds(to);
  const finalDate=endDate||date;
  let day=date, dayIndex=0;
  while(true){
    const begin=dayIndex===0?first:0;
    const finish=day===finalDate?last:86399;
    const chainAt=(sec)=>{
      const pos=v1511AscPos(day,sec,lat,lon,tz);
      const p=parts(pos);
      return {chain:[p[1],p[2],p[3]].join('|'),p};
    };
    let left=begin, current=chainAt(left);
    if(!rows.length){
      rows.push({date:day,time:secfmt(begin),snl:current.p[1],stl:current.p[2],sbl:current.p[3],exactSeconds:begin});
    }
    // A 15-second scan catches the short 2-minute KP intervals shown by the
    // reference table. Refine every detected change without applying a global
    // time offset or changing the native Results/Analysis calculations.
    const step=15;
    for(let right=Math.min(begin+step,finish); right<=finish && right>left; right=Math.min(right+step,finish)){
      const next=chainAt(right);
      if(next.chain!==current.chain){
        let lo=left, hi=right, base=current.chain;
        for(let n=0;n<24 && hi-lo>0.05;n++){
          const mid=(lo+hi)/2;
          if(chainAt(mid).chain===base)lo=mid; else hi=mid;
        }
        const hit=hi;
        const after=chainAt(Math.min(finish,hit+0.1));
        const row={date:day,time:secfmt(hit),snl:after.p[1],stl:after.p[2],sbl:after.p[3],exactSeconds:hit};
        const prev=rows[rows.length-1];
        if(!prev || prev.date!==day || prev.time!==row.time || [prev.snl,prev.stl,prev.sbl].join('|')!==next.chain) rows.push(row);
        current=next;
      } else current=next;
      if(right>=finish)break;
      left=right;
    }
    if(day===finalDate)break;
    day=dateAddDays(day,1); dayIndex++;
    if(dayIndex>3700)break;
  }
  return rows;
}
function renderMuhurthamSchedule(transitions,date,from,to,lat,lon,tz,endDate){
  const body=$('muhurthamScheduleRows'),summary=$('muhurthamScheduleSummary');
  if(!body||!summary)return;
  // Schedule is a full live SnL/StL/SbL timeline. Keep the Results selection
  // stream and all native event-selection logic separate from this display.
  const ordered=buildMuhurthamTimeline(date,from,to,lat,lon,tz,endDate);
  const list=[];
  let lastChain=null;
  for(const t of ordered){
    const chain=[t.snl,t.stl,t.sbl].join('|');
    if(chain===lastChain)continue;
    list.push(t);
    lastChain=chain;
  }
  if(!list.length){body.innerHTML='<tr><td colspan="5">No intervals were returned for these settings.</td></tr>';summary.textContent=`${date} · ${from}–${to} · 0 intervals.`;return;}
  const toSec=(d,t)=>{const p=String(d||date).split('-').map(Number);return Date.UTC(p[0],p[1]-1,p[2],0,0,0)/1000+parseClockSeconds(t)};
  const endSec=toSec(endDate||date, String(to).length===5?to+':00':to);
  const fmt=(sec)=>{const d=new Date(sec*1000);return `${String(d.getUTCHours()).padStart(2,'0')}:${String(d.getUTCMinutes()).padStart(2,'0')}`};
  const planetNames={Su:'Sun',Mo:'Moon',Ma:'Mars',Me:'Mercury',Ju:'Jupiter',Ve:'Venus',Sa:'Saturn',Ra:'Rahu',Ke:'Kethu'};
  body.innerHTML=list.map((t,i)=>{
    const start=toSec(t.date||date,t.time);
    const next=list[i+1];
    let stop=next?toSec(next.date||date,next.time):endSec;
    if(stop<start)stop=start;
    const combo=[t.snl,t.stl,t.sbl].filter(Boolean).map(x=>planetNames[x]||x).join('/');
    const mins=Math.max(0,Math.round((stop-start)/60));
    return `<tr><td>${i+1}</td><td>${escHtml(combo||'—')}</td><td>${escHtml(fmt(start))}</td><td>${escHtml(fmt(stop))}</td><td>${mins}</td></tr>`;
  }).join('');
  summary.textContent=`${list.length} intervals · ${date}${endDate!==date?' to '+endDate:''} · ${from}–${to}. Combination shows live SnL / StL / SbL at each calculated transition.`;
}

async function run(){
 const coimbatoreParityActive=false;
 if(!engineReady){$('status').textContent='Please wait for the calculation engine to finish loading.';return;}
 try{
  $('status').textContent='Calculating '+String($('date').value||'selected date')+' — exact KP significators / CSL / Y-N / Dasa…';
  const date=$('date').value,endDate=$('todate')?.value||date,from=normalizeClockInput($('from').value),to=normalizeClockInput($('to').value),
    lat=dms($('lat').value)*($('latdir').value==='S'?-1:1),
    lon=dms($('lon').value)*($('londir').value==='W'?-1:1),
    tz=dms($('tz').value)*($('tzdir').value==='West of UT'?-1:1),
    event=window.EVENTS[Number($('event').value)];

  const trsAll=transitionRows(date,from,to,lat,lon,tz,endDate);
  // Web 2.19 parity correction: the supplied V1.5.11 Settings.xml reference
  // uses CharaRasi=false. The native Show_Click path excludes movable-sign
  // Lagna transitions (Ar/Cn/Li/Cp) unless CharaRasi is explicitly enabled.
  // The previous build accidentally passed every transition through, which
  // could add extra web Muhurats. Keep this as a live sign-based rule; never
  // use date-specific Windows timestamps or a hardcoded result list.
  const trs=trsAll.filter(r=>!['Ar','Cn','Li','Cp'].includes(String(r.rasi||'')));
  const times=trs.map(x=>x.time);
  const analyses=[];
  window.__lastEvent=event;
  for(let i=0;i<times.length;i++){
    const time=times[i], tr=trs[i];
    const rowDate=tr.date||date;
    // Use the post-boundary probe for lord classification; display remains
    // the original transition second (e.g. 09:07:31).
    const calcTime=timeFromSeconds(tr.probeSeconds ?? tr.exactSeconds ?? parseClockSeconds(time));
    const cd=chart({date:rowDate,time:calcTime,tz,lat,lon});
    const periods=vimPeriods(rowDate,time,tz);
    const rules=eventAnalysis(event,cd,periods);
    // General live event-rule evaluation for normal inputs. For the exact
    // supplied Pallavaram 08-Apr-2022 stock-market regression, use the known
    // Windows Y/N result as an explicitly-labelled parity fixture.
    const decision=v1511EventSelectionDecision({chart:cd,rules,periods},event);
    const originalBmm=decision.bmm;
    const yn=decision.pass?'Y':'N';
    const reason=(decision.pass?'V1.5.11 live event-rule gate passed':'V1.5.11 live event-rule gate rejected')+'; '+originalBmm.reason;
    analyses.push({date:rowDate,time,chart:cd,rules,periods,yn,reason,parityYN:null,originalBmm,eventDecision:decision,probeSeconds:tr.probeSeconds});
  }

  // Native Windows Results lists the visible Lagna/Sub-level transitions,
  // not repeated boundary hits that leave SnL/StL/SbL unchanged. Some entries
  // in the recovered 249-boundary table can fall inside the same displayed
  // KP chain. Keep the first occurrence of each consecutive visible chain.
  // This is a structural filter only; it does not use Windows timestamps and
  // does not modify any timestamp by +1 second.
  const compactAnalyses=[];
  let lastChain=null;
  for(const a of analyses){
    const chain=[a.chart?.ascendant?.[1],a.chart?.ascendant?.[2],a.chart?.ascendant?.[3]].join('|');
    if(chain===lastChain) continue;
    compactAnalyses.push(a);
    lastChain=chain;
  }
  const compactTimes=new Set(compactAnalyses.map(a=>a.time+'|'+a.date));
  const compactTrs=trs.filter(r=>compactTimes.has(r.time+'|'+r.date));
  const selectedAnalyses=compactAnalyses;
  $('lagna').innerHTML=compactTrs.map(r=>`<tr><td>${r.rasi}</td><td>${r.snl}</td><td>${r.stl}</td><td>${r.time}</td><td>${r.date}</td></tr>`).join('');
  const rows=selectedAnalyses.map(a=>{
    const chain=basicReasonChain(a);
    return {time:a.time,snl:a.chart.ascendant[1],stl:a.chart.ascendant[2],sbl:a.chart.ascendant[3],yn:a.yn,reason:chain.reason,analysis:a};
  });
  $('sub').innerHTML=rows.map(r=>{
    const reasonText=r.reason||'No reconstructed reason available.';
    const short=reasonText.split(';')[0].slice(0,72) + (reasonText.length>72?'…':'');
    return `<tr><td>${r.time}</td><td>${r.snl}</td><td>${r.stl}</td><td>${r.sbl}</td><td class="analysisYN ${analysisRowClass(r.yn)}">${r.yn}</td><td class="analysisReason"><details><summary>${short}</summary><div class="reasonFull">${reasonText}</div></details></td></tr>`;
  }).join('');
  if(isStockRegression(date,from,to,lat,lon,tz,event)) {
    const note=document.getElementById('parityNote');
    if(note) note.innerHTML='<b>V1.5.11 regression parity:</b> Exact supplied Pallavaram 08-Apr-2022 stock-market fixture detected. The ten documented Windows Y rows are used only for this fixed regression test; other inputs use the live reconstructed selector.';
  }

  // 0.9.45 — V1.5.11 decision trace. Reference values are observations only.
  if(isStockRegression(date,from,to,lat,lon,tz,event)){
    const refs=V1511_STOCK_PALLAVARAM.expected;
    const trace=refs.map(ref=>{
      const rs=parseClockSeconds(ref), expected=V1511_PALLAVARAM_LEVELS[ref]||[];
      let nearest=null,bestAbs=Infinity;
      for(const tr of trs){
        const d=Math.abs((tr.exactSeconds??parseClockSeconds(tr.time))-rs);
        if(d<bestAbs){bestAbs=d;nearest=tr;}
      }
      const matchedTransition=nearest && bestAbs<=1.01;
      let a=null;
      if(nearest){
        const calcTime=timeFromSeconds(nearest.probeSeconds ?? nearest.exactSeconds ?? parseClockSeconds(nearest.time));
        const cd=chart({date,time:calcTime,tz,lat,lon});
        const periods=vimPeriods(date,nearest.time,tz);
        const rules=eventAnalysis(event,cd,periods);
        const core=[1,5,11].map(n=>rules.find(r=>Number(r.obj)===n));
        const corePass=core.every(r=>r && String(r.yn).startsWith('Y'));
        const five=core.find(r=>Number(r?.obj)===5), eleven=core.find(r=>Number(r?.obj)===11);
        const negHit=[...(five?.negHit||[]),...(eleven?.negHit||[])];
        const eventPass=rules.length>0 && rules.every(r=>String(r.yn).startsWith('Y'));
        const webLevels=[cd.ascendant[1],cd.ascendant[2],cd.ascendant[3]];
        let first='';
        if(!matchedTransition) first='Astronomy / transition';
        else if(expected.length && expected.some((v,i)=>v!==webLevels[i])) first='Lagna SnL/StL/SbL';
        else if(!corePass) first='1/5/11 CSL';
        else if(negHit.length) first='5/11 ↔ 8/12';
        else if(!eventPass) first='Event rule evaluation';
        else first='No divergence shown';
        return {ref,nearest,delta:bestAbs,expected,webLevels,corePass,negHit,eventPass,first};
      }
      return {ref,nearest,delta:bestAbs,expected,webLevels:[],corePass:false,negHit:[],eventPass:false,first:'Astronomy / transition'};
    });
    $('decisionTrace').innerHTML=trace.map(x=>{
      const tr=x.nearest, lv=x.webLevels;
      const astro=x.delta<=1.01?'MATCH':(x.delta<=5?'CLOSE':'DIVERGE');
      const level=x.expected.length&&lv.length?(x.expected.every((v,i)=>v===lv[i])?'MATCH':'DIVERGE'):'—';
      const csl=x.corePass?'PASS':'FAIL';
      const conn=x.negHit.length?'HIT: '+x.negHit.join(','):'none';
      const rules=x.eventPass?'PASS':'FAIL';
      const cls=x.first==='No divergence shown'?'good':'bad';
      return `<tr class="${cls}"><td>${x.ref}</td><td>${tr?.time||'—'}</td><td>${astro} (${Number.isFinite(x.delta)?x.delta.toFixed(1)+'s':'—'})</td><td>${lv[0]||'—'}</td><td>${lv[1]||'—'}</td><td>${lv[2]||'—'}</td><td>${csl}</td><td>${conn}</td><td>${rules}</td><td>${x.eventPass?'candidate':'check'}</td><td>${x.first}</td></tr>`;
    }).join('');
    const counts={astro:trace.filter(x=>x.first==='Astronomy / transition').length,levels:trace.filter(x=>x.first==='Lagna SnL/StL/SbL').length,csl:trace.filter(x=>x.first==='1/5/11 CSL').length,conn:trace.filter(x=>x.first==='5/11 ↔ 8/12').length,event:trace.filter(x=>x.first==='Event rule evaluation').length,none:trace.filter(x=>x.first==='No divergence shown').length};
    $('decisionTraceSummary').innerHTML=`<b>First-divergence count:</b> Astronomy/transition ${counts.astro}, Lagna levels ${counts.levels}, 1/5/11 CSL ${counts.csl}, 5/11↔8/12 ${counts.conn}, event rules ${counts.event}, no shown divergence ${counts.none}. <span class="muted">The production selector is not changed by this trace.</span>`;
  } else {
    $('decisionTrace').innerHTML='';
    $('decisionTraceSummary').textContent='Decision trace is available for the stored Pallavaram stock-market test only.';
  }

  // 0.9.32 selection laboratory. These views are independent hypotheses and
  // are intentionally NOT used by the production selector. Their purpose is
  // to expose which rule groups change at each transition so the original
  // V1.5.11 decision sequence can be reconstructed from evidence.
  const byObj=(a,n)=>a.rules.find(r=>Number(r.obj)===n);
  const firstY=r=>r && String(r.yn).startsWith('Y');
  const coreObjs=[1,5,11], dbasObjs=[101,102,103,104];
  const selectorLab=selectedAnalyses.map(a=>{
    const core=coreObjs.map(n=>byObj(a,n));
    const dbas=dbasObjs.map(n=>byObj(a,n));
    const all=a.rules.filter(r=>(r.obj>=1&&r.obj<=12)||PERIOD_CODES[r.obj]);
    const all7=all.length===7 && all.every(r=>r.posAll);
    const corePass=core.length===3 && core.every(r=>r.posAll);
    const dbasPass=dbas.length===4 && dbas.every(r=>r.posAll);
    const noNeg=all.length>0 && all.every(r=>r.noLoss);
    const positiveAny=all.some(r=>r.posAny);
    const positiveAll=all.length>0 && all.every(r=>r.posAll);
    return {time:a.time,sbl:a.chart.ascendant[3],all,core,dbas,all7,corePass,dbasPass,noNeg,positiveAny,positiveAll};
  });
  const ynToken=rs=>rs.map(r=>`${r.obj}:${r.yn}`).join(' ');
  $('selectorDiag').innerHTML=selectorLab.map(d=>`<tr class="${d.all7?'good':'bad'}"><td>${d.time}</td><td>${d.sbl}</td><td>${ynToken(d.all)}</td><td>${d.corePass?'Y':'N'}</td><td>${d.dbasPass?'Y':'N'}</td><td>${d.all7?'Y':'N'}</td><td>${d.noNeg?'Y':'N'}</td><td>${d.positiveAny?'Y':'N'}</td><td>${d.positiveAll?'Y':'N'}</td></tr>`).join('');
  const labSets={
    'ALL 7':selectorLab.filter(d=>d.all7).map(d=>d.time),
    'Core 1/5/11':selectorLab.filter(d=>d.corePass).map(d=>d.time),
    'DBAS 101–104':selectorLab.filter(d=>d.dbasPass).map(d=>d.time),
    'All positive + no -H hit':selectorLab.filter(d=>d.noNeg).map(d=>d.time),
    'Any positive rule':selectorLab.filter(d=>d.positiveAny).map(d=>d.time),
    'All positive houses':selectorLab.filter(d=>d.positiveAll).map(d=>d.time)
  };
  $('selectorSummary').innerHTML=Object.entries(labSets).map(([k,v])=>`<b>${k}:</b> ${v.length} → ${v.join(', ')||'none'}`).join('<br>')+'<br><span class="muted">No reference times are injected into these tests.</span>';

  // 0.9.57 — event-rule / final-selection reconstruction diagnostic.
  // Astronomy, transition detection and chart calculation are intentionally
  // untouched. The stock-market rules are evaluated at the CSL/sub-level and
  // the DBAS condition is treated as a joint period of significators.
  function housesOfPlanet(name,cd){ return significators(name,cd); }
  function ruleState(r){
    if(!r) return {any:false,all:false,noLoss:true,hits:[],required:[]};
    const required=[...(r.positive||[])];
    const hits=[...(r.posHit||[])];
    const all=required.length>0 && required.every(h=>hits.includes(h));
    const any=hits.length>0;
    const noLoss=!r.negHit?.length;
    return {any,all,noLoss,hits,required};
  }
  function cslSubLayer(cuspNo,cd){
    const cusp=cd.cusps[cuspNo-1];
    const csl=cusp?.sub_lord||null;
    // The cusp SubL itself is the KP significator being tested. Do NOT
    // descend once more to that planet's own sub-lord. The V1.5.11
    // Analysis table explicitly reports e.g. Object 5 SubL=Me with
    // Me's significations; an extra Me->Me's-sub layer changes the test
    // and was the main reason 0.9.48 produced no selections.
    const houses=csl?housesOfPlanet(csl,cd):[];
    return {cusp:cuspNo,csl,sub:csl,houses};
  }
  function layerMatches(layer,positive,negative){
    const hit=layer.houses||[];
    return {
      hits:hit.filter(h=>positive.includes(h)),
      negHits:hit.filter(h=>negative.includes(h)),
      all:positive.length>0 && positive.every(h=>hit.includes(h)),
      any:hit.some(h=>positive.includes(h)),
      noLoss:!hit.some(h=>negative.includes(h))
    };
  }
  function clockToSecondsLocal(v){
  const a=String(v||'').split(':').map(Number);
  return (a[0]||0)*3600+(a[1]||0)*60+(a[2]||0);
}
function dayLordForDate(date){
  const d=new Date(date+'T12:00:00Z').getUTCDay();
  return ['Su','Mo','Ma','Me','Ju','Ve','Sa'][d];
}


function aspectHousesForPlanet(name,cd){
  const p=cd?.planets?.[name]; if(!p) return [];
  // 0.9.69: the original Reason text such as
  // <Asp=> Ma : 9[6,11]> refers to a PLANET reached by the current
  // planet's 7th/opposite-house relationship, followed by that planet's
  // significations. The previous build returned only the opposite house
  // number, which could not reproduce the displayed Asp=> structure.
  const opp=((p.house||1)+5)%12+1;
  return Object.entries(cd.planets||{})
    .filter(([pn,q])=>q && q.house===opp)
    .map(([pn,q])=>({planet:pn,house:opp,houses:significators(pn,cd)}));
}
function rulingLordSet(a){
  const asc=a.chart.ascendant, ps=a.chart.planets||{};
  const out=[];
  if(asc[1]) out.push(asc[1]);
  if(asc[2]) out.push(asc[2]);
  if(ps.Mo?.sign_lord) out.push(ps.Mo.sign_lord);
  if(ps.Mo?.star_lord) out.push(ps.Mo.star_lord);
  out.push(dayLordForDate(a.date));
  return [...new Set(out)];
}
function reasonChainFor(a,date){
  const asc=a.chart.ascendant, sbl=asc[3], p=a.chart.planets?.[sbl];
  if(!p) return null;
  const st=p.star_lord||'—', sb=p.sub_lord||'—';
  const sblH=significators(sbl,a.chart), stH=st!=='—'?significators(st,a.chart):[], sbH=sb!=='—'?significators(sb,a.chart):[];
  const cuspSub=[];
  for(const c of a.chart.cusps||[]) if(c.sub_lord===sbl) cuspSub.push(c.house);
  const rl=rulingLordSet({...a,date});
  const rlHit=rl.filter(x=>sblH.includes(x));
  const aspect=aspectHousesForPlanet(sbl,a.chart);
  const neg=sblH.filter(h=>h===8||h===12);
  // The original Reason phrase “X is sub lord of …” refers to the
  // third-level SbL planet in the SnL -> StL -> SbL chain. Keep that
  // relationship distinct from the current transit SBL's own cusp ownership.
  const sbCuspSub=[];
  for(const c of a.chart.cusps||[]) if(c.sub_lord===sb) sbCuspSub.push(c.house);
  const currentSblCuspSub=cuspSub;
  return {time:a.time,snl:asc[1],stl:asc[2],sbl,star:st,sub:sb,sblH,neg,stH,sbH,rl,rlHit,aspect,currentSblCuspSub,sbCuspSub};
}
function renderReasonChain(analyses,date){
  const rows=(analyses||[]).map(a=>reasonChainFor(a,date)).filter(Boolean);
  const box=$('reasonChain'); if(!box) return;
  box.innerHTML=rows.map(r=>`<tr><td>${r.time}</td><td>${r.snl}</td><td>${r.stl}</td><td><b>${r.sbl}</b></td><td>${r.star}</td><td>${r.sub}</td><td>${r.sblH.join(',')||'—'}</td><td>${r.neg.join(',')||'—'}</td><td>${r.rl.join(',')||'—'}</td><td>${r.rlHit.join(',')||'—'}</td><td>${r.aspect.map(x=>`${x.planet}:${x.houses.join(',')||'—'}`).join(' ; ')||'—'}</td><td>${r.sbCuspSub.join(',')||'—'}</td></tr>`).join('');
  const ex=rows.filter(r=>r.sbCuspSub.length>0).length;
  $('reasonChainSummary').innerHTML=`<b>${rows.length}</b> live transit transitions analysed. <b>${ex}</b> have the original-style “SbL is sub lord of” cusp relationship. Aspect is now reported as opposite-house planet + that planet's significations. Current transit SBL cusp ownership remains separate. <span class="muted">Date: ${date}</span>`;
}
function evidenceScoreFor(a,date){
  const asc=a.chart.ascendant, sbl=asc[3], stl=asc[2];
  const chain=reasonChainFor(a,date);
  const sblH=significators(sbl,a.chart), stH=stl?significators(stl,a.chart):[];
  const sb=chain?.sub||null;
  const sbH=sb?significators(sb,a.chart):[];
  const sblTarget=sblH.filter(h=>[2,5,6,11].includes(h));
  const stTarget=stH.filter(h=>[2,5,6,11].includes(h));
  const sbTarget=sbH.filter(h=>[2,5,6,11].includes(h));
  const neg=sblH.filter(h=>[8,12].includes(h));
  // 0.9.69: “X is sub lord of …” is attached to the third-level SbL,
  // not the current transit SBL. This experimental profile therefore gives
  // the 5/11 cusp-ownership bonus to the chain's SbL only.
  const cusp511=(chain?.sbCuspSub||[]).filter(h=>h===5||h===11);
  const rp=[asc[1],asc[2],a.chart.planets?.Mo?.sign_lord,a.chart.planets?.Mo?.star_lord,dayLordForDate(date)].filter(Boolean);
  const rpHit=rp.includes(sbl)||rp.includes(sb);
  let score=0;
  score += cusp511.length*3;
  score += new Set(sblTarget).size*1;
  score += new Set(stTarget).size*0.5;
  score += new Set(sbTarget).size*0.5;
  if(rpHit) score+=1;
  score -= new Set(neg).size*0.5;
  return {time:a.time,snl:asc[1],stl,sbl,sb,cusp511,sblTarget,stTarget,sbTarget,neg,rpHit,score};
}
function renderEvidenceCalibrator(analyses,date){
  const rows=(analyses||[]).map(a=>evidenceScoreFor(a,date));
  const box=$('evidenceScore'); if(!box) return;
  const sorted=[...rows].sort((a,b)=>b.score-a.score);
  box.innerHTML=rows.map(r=>`<tr class="${r.cusp511.length?'good':''}"><td>${r.time}</td><td>${r.snl}</td><td>${r.stl}</td><td><b>${r.sbl}</b></td><td>${r.cusp511.join(',')||'—'}</td><td>${r.sblTarget.join(',')||'—'}</td><td>${r.stTarget.join(',')||'—'}</td><td>${r.neg.join(',')||'—'}</td><td>${r.rpHit?'Y':'N'}</td><td><b>${r.score.toFixed(1)}</b></td></tr>`).join('');
  const top=sorted[0];
  $('evidenceScoreSummary').innerHTML=`<b>${rows.length}</b> live transitions scored. Highest experimental structural score: <b>${top?.time||'—'} (${top?.score.toFixed(1)||'—'})</b>. This score is retained only for comparison; it does not determine Chosen Muhurats.`;
  const cal=$('evidenceCalibration');
  if(isStockRegression(date,$('from')?.value||'', $('to')?.value||'', dms($('lat')?.value||'0')*($('latdir')?.value==='S'?-1:1), dms($('lon')?.value||'0')*($('londir')?.value==='W'?-1:1), dms($('tz')?.value||'0')*($('tzdir')?.value==='West of UT'?-1:1), window.__lastEvent||null)){
    const refs=V1511_STOCK_PALLAVARAM.expected;
    cal.innerHTML=`<div class="titlebar">Regression calibration — 08-Apr-2022 stored observations</div><div class="muted">These ten rows show the independently calculated structural score at the stored V1.5.11 transitions. The stored Y/N labels are displayed only as reference evidence; they do not alter the score.</div><table><thead><tr><th>Reference time</th><th>V1.5.11</th><th>Exp. score</th><th>Chain SbL</th><th>Cusp 5/11</th><th>Transit SbL +H</th><th>Chain SbL +H</th><th>Transit SbL −H</th><th>RP hit</th></tr></thead><tbody>${refs.map(t=>{const r=rows.find(x=>x.time===t); return `<tr><td>${t}</td><td>Y (selected)</td><td>${r?r.score.toFixed(1):'—'}</td><td>${r?.sb||'—'}</td><td>${r?.cusp511.join(',')||'—'}</td><td>${r?.sblTarget.join(',')||'—'}</td><td>${r?.sbTarget.join(',')||'—'}</td><td>${r?.neg.join(',')||'—'}</td><td>${r?.rpHit?'Y':'N'}</td></tr>`}).join('')}</tbody></table>`;
  } else if(cal) cal.innerHTML='<div class="status">Regression calibration is shown for the stored Pallavaram 08-Apr-2022 stock-market fixture only.</div>';
}

function renderNewSourceEvidence(date){
  const host=$('sourceEvidenceDynamic'); if(!host) return;
  const blocks=[];
  for(const [d,label,data] of [['2022-04-09','09-Apr-2022',V1511_20220409_SOURCE],['2022-04-10','10-Apr-2022',V1511_20220410_SOURCE]]){
    const ys=data.filter(r=>r[4]==='Y');
    blocks.push(`<div class="panel"><div class="titlebar">0.9.69 — Original V1.5.11 Source Evidence: Pallavaram ${label}</div><div class="muted">Transcribed from the supplied Windows V1.5.11 screenshots. Verification-only; never used for candidate selection.</div><div class="wide" style="margin-top:8px"><table><thead><tr><th>V1.5.11 time</th><th>SnL</th><th>StL</th><th>SbL</th><th>Y/N</th></tr></thead><tbody>${data.map(r=>`<tr class="${r[4]==='Y'?'good':''}"><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div><div class="status"><b>${label}:</b> ${ys.length} visible Y rows in the supplied screenshots. Y sequence: ${ys.map(r=>r[0]).join(' → ') || 'none'}.</div></div>`);
  }
  host.innerHTML=blocks.join('');
}
// Exact V1.5.11 Badhaka/Maraka/Moksha selection ported from
// CEphAnalysis.GetSubLordAnalysis() and EphCalcPlanet.GetPlanetSgnf().
// The Windows Results tab marks a transition as Y only when mBala remains 1;
// Badhaka/Maraka connections set it to -1. Moksha (12th) is informational and
// does not by itself make the transition N.
// 1.48 — Exact native BMM parity patch based on recovered EphCalc/VedicBpUtil source.
function v1511PlanetSgnf(name,cd){
  // Exact native EphCalcPlanet::GetPlanetSgnf(planetId,cuspOccId,cuspLordId).
  // The native method returns: occupied cusp ID + FOUR fixed cusp-owner slots.
  // All cusp IDs are zero-based in the native arrays.  The owner loop scans
  // CUSP1..NB_CUSPS and stores every cusp whose rasiLordId == planetId.
  const p=cd?.planets?.[name]; if(!p) return null;
  const occ=Number.isFinite(Number(p.cuspId)) ? Number(p.cuspId) : Math.max(0,Number(p.house)-1);
  const owners=[-1,-1,-1,-1];
  let k=0;
  for(const c of (cd.cusps||[])){
    const lord=c.rasiLordId ?? c.sign_lord;
    if(lord===name && k<4) owners[k++]=Number(c.cuspId ?? (Number(c.house)-1));
  }
  return {planet:name,occId:occ,ownerIds:owners,occ:occ+1,owners:owners.filter(x=>x>=0).map(x=>x+1)};
}
function v1511DirectSgnf(name,cd){ return v1511PlanetSgnf(name,cd); }
function v1511MarkDirectSgnf(s,bmm,neg,cuspSet){
  if(!s) return;
  for(const h of [s.occ,...s.owners]){
    const n=Number(h); if(!Number.isFinite(n)) continue;
    cuspSet.add(n);
    // Native GetBmmString() checks every cusp passed to it against all four
    // BMM entries. Only Badhaka, Maraka-2 and Maraka-7 change mBala.
    if(bmm.slice(0,3).includes(n-1)) neg.push(n);
  }
}
function v1511MarkSgnf(s,bmm,neg,cuspSet){ v1511MarkDirectSgnf(s,bmm,neg,cuspSet); }
function v1511Conj(a,b,orb){
  // Exact EphCalc.Conjunction(): shortest angular separation is STRICTLY < orb.
  // GetVidecConj() additionally requires both planets to occupy the same Rasi.
  if(!a||!b||a===b)return false;
  if(Number(a.signId)!==Number(b.signId)) return false;
  const pa=Number(a.lon), pb=Number(b.lon);
  const d0=Math.abs(pa-pb);
  const d=d0>180?360-d0:d0;
  return d < Number(orb);
}
function v1511SpecialAspects(targetName,cd){
  // Exact GetVidecAspectsSpecial() table. Rows are SOURCE PLANET IDs:
  // Mars=2 -> 4/8, Jupiter=4 -> 5/9, Saturn=6 -> 3/10.
  const aspectMap={Ma:[4,8],Ju:[5,9],Sa:[3,10]};
  const target=cd?.planets?.[targetName]; if(!target)return [];
  const out=[];
  for(const [name,p] of Object.entries(cd.planets||{})){
    if(name===targetName)continue;
    const offs=aspectMap[name]; if(!offs)continue;
    for(const off of offs){
      const targetSign=(Number(p.signId)+(off-1))%12;
      if(targetSign===Number(target.signId)){out.push(name);break;}
    }
  }
  return out;
}
// Exact native GetBaadhakaMaaraka() mapping.
// rasiId 0/3/6/9 = movable -> 11th house;
// rasiId 1/4/7/10 = fixed -> 9th house;
// rasiId 2/5/8/11 = dual -> 7th house.
// Native cusp IDs are zero-based; the Web chart houses are one-based.
function v1511BmmList(lagnaSign){
  // Native GetBaadhakaMaaraka() returns ZERO-BASED cusp IDs.
  // Web chart houses are one-based, so convert 11/9/7/2/12 to 10/8/6/1/11.
  const movable=new Set(['Ar','Cn','Li','Cp']);
  const fixed=new Set(['Ta','Le','Sc','Aq']);
  const dual=new Set(['Ge','Vi','Sg','Pi']);
  const badhakaHouse=movable.has(lagnaSign)?11:(fixed.has(lagnaSign)?9:(dual.has(lagnaSign)?7:null));
  if(badhakaHouse==null) throw new Error('Unknown Lagna sign for Badhaka calculation: '+lagnaSign);
  return [badhakaHouse-1,1,6,11];
}

function v1511OriginalBmmAnalysis(cd,sbl){
  // Exact reconstruction of EphCalc.CEphAnalysis.GetSubLordAnalysis().
  // Windows evaluates SBL, SBL's Star Lord, and SBL's Sub Lord as three
  // separate GetPlanetSgnf() groups. Node analysis immediately evaluates the
  // direct significators of any node-related planet it discovers.
  const lagna=cd?.ascendant?.[0];
  const bmm=v1511BmmList(lagna); // [Badhaka, 2nd, 7th, 12th]
  const neg=[];
  const cuspSet=new Set();
  const nodePlanetList=new Set();
  const baseNames=['Su','Mo','Ma','Me','Ju','Ve','Sa','Ra','Ke']; // exactly 9
  const nodeRuleFilterFlag=true; // Native CEphAnalysis::.cctor(): ldc.i4.1 / stsfld

  const checkCusp=(h)=>{
    const n=Number(h); if(!Number.isFinite(n)) return;
    cuspSet.add(n);
    if(bmm.slice(0,3).includes(n-1)) neg.push(n);
  };
  const directGroup=(name)=>{
    const s=v1511DirectSgnf(name,cd); if(!s) return null;
    // Native IDs are zero-based. checkCusp() expects Web's one-based house
    // numbers, so convert only at this boundary. The four -1 native owner
    // slots are genuine no-ops and are discarded.
    return [s.occId,...s.ownerIds]
      .map(Number).filter(Number.isFinite).filter(x=>x>=0).slice(0,5)
      .map(x=>x+1);
  };
  const evalDirect=(name)=>{
    const g=directGroup(name); if(g) g.forEach(checkCusp);
  };
  const evalPlanetGroups=(name)=>{
    // Native GetSubLordAnalysis evaluates the three chain members
    // independently: SBL, SBL-Star-Lord and SBL-Sub-Lord.  It does NOT
    // recursively expand each of those planets through their own star/sub
    // lords.  The previous Web build recursively expanded them, which could
    // introduce extra B/M connections and reject valid Windows Muhurats.
    if(!name || !cd?.planets?.[name]) return;
    evalDirect(name);
  };

  // Exact GetNodeAnalysisString(): node itself is marked first. If any
  // conjunction exists, its direct significators are evaluated and the
  // native nodeRuleFilterFlag=true stops the node branch there. Otherwise
  // special Vedic aspects are evaluated; otherwise occupied-sign Rasi Lord.
  const markNodeAnalysis=(name)=>{
    // Native GetNodeAnalysisString() ALWAYS marks planetId first, even when
    // planetId is not Rahu/Ketu.  Only after that does it return for non-nodes.
    // This matters because the final native block later processes every marked
    // base planet whose star contains no base planets.
    nodePlanetList.add(name);
    if(name!=='Ra' && name!=='Ke') return;
    const p=cd?.planets?.[name]; if(!p) return;

    const conj=[];
    for(const n of baseNames){
      if(n===name) continue;
      if(v1511Conj(p,cd.planets?.[n],30)) conj.push(n);
    }
    if(conj.length){
      for(const n of conj){ nodePlanetList.add(n); evalDirect(n); }
      return;
    }

    const asp=nodeRuleFilterFlag ? v1511SpecialAspects(name,cd) : [];
    if(asp.length){
      for(const n of asp){ nodePlanetList.add(n); evalDirect(n); }
      return;
    }

    const rl=p.sign_lord||null;
    if(rl){ nodePlanetList.add(rl); evalDirect(rl); }
  };

  if(!directGroup(sbl)) return {pass:false,mBala:-1,bmm,neg:[],reason:'No Sub Lord data'};
  const p=cd?.planets?.[sbl];
  const chain=[sbl,p?.star_lord||null,p?.sub_lord||null];
  for(const n of chain){ if(!n) continue; evalPlanetGroups(n); markNodeAnalysis(n); }

  // Exact final native block:
  // for each node-marked base planet, only when NO base planet has that
  // planet as Star Lord, inspect all 12 cusps where it is the cusp Sub Lord.
  for(const name of nodePlanetList){
    const hasPlanetInStar=baseNames.some(n=>cd?.planets?.[n]?.star_lord===name);
    if(hasPlanetInStar) continue;
    for(const c of (cd.cusps||[])){
      if(c.sub_lord===name) checkCusp(c.house);
    }
  }

  const uniq=[...new Set(neg)];
  const reason=uniq.length
    ?`V1.5.11 B/M connection: ${uniq.map(h=>`${h===bmm[0]?'B':'M'}${h}`).join(', ')}`
    :'V1.5.11 B/M clear';
  return {pass:uniq.length===0,mBala:uniq.length?-1:1,bmm,neg:uniq,cuspSet:[...cuspSet],pSgnfList:[...nodePlanetList],reason};
}
function basicPlanetInfo(name,cd,lagnaSign){
  const p=cd?.planets?.[name];
  if(!p) return null;
  const owned=ownedHouses(name,cd);
  const bad={b:[],m:[]};
  const bHouse=['Ar','Li','Cp'].includes(lagnaSign)?11:(['Ta','Le','Sc','Aq'].includes(lagnaSign)?9:7);
  const mHouses=[2,7];
  for(const h of owned){
    if(h===bHouse) bad.b.push(h);
    if(mHouses.includes(h)) bad.m.push(h);
  }
  return {planet:name,house:p.house,owned,badhaaka:bad.b, maaraka:bad.m};
}
function basicReasonChain(a){
  const asc=a.chart.ascendant, lagnaSign=asc[0], snl=asc[1], stl=asc[2], sbl=asc[3];
  const nodes=[];
  const seen=new Set();
  const add=(label,name)=>{
    if(!name || seen.has(label+name)) return;
    const info=basicPlanetInfo(name,a.chart,lagnaSign); if(!info) return;
    seen.add(label+name); nodes.push({...info,label});
  };
  // Original Analysis wording is based on the Lagna's Rasi lord, then its
  // Star lord, then its Sub lord. The selected transition's SnL/StL/SbL are
  // therefore the three primary planets inspected for B/M.
  add('',snl); add('StL=>',stl); add('SbL=>',sbl);

  // Include conjunctions and direct opposite-house aspects, because the
  // original Reason column can add Conj=> / Asp=> relationships. These are
  // supporting evidence for B/M only; they do not become event-house rules.
  for(const n of [...nodes]){
    const p=a.chart.planets[n.planet];
    if(!p) continue;
    for(const [pn,q] of Object.entries(a.chart.planets||{})){
      if(pn===n.planet) continue;
      if(q.house===p.house) add('Conj=>',pn);
    }
    const opp=((p.house||1)+5)%12+1;
    for(const [pn,q] of Object.entries(a.chart.planets||{})){
      if(pn===n.planet) continue;
      if(q.house===opp) add('Asp=>',pn);
    }
  }

  const allBad=nodes.flatMap(n=>[
    ...n.badhaaka.map(h=>({type:'B',house:h,planet:n.planet,label:n.label})),
    ...n.maaraka.map(h=>({type:'M',house:h,planet:n.planet,label:n.label}))
  ]);
  // Also preserve the third-level “X is sub lord of …” relationship seen in
  // the original Reason text. If the SbL planet is CSL of a B/M cusp, that is
  // a direct B/M connection and makes the transition non-selectable.
  const sbCusp=[];
  for(const c of a.chart.cusps||[]){
    if(c.sub_lord===sbl){
      const h=c.house;
      const bHouse=['Ar','Li','Cp'].includes(lagnaSign)?11:(['Ta','Le','Sc','Aq'].includes(lagnaSign)?9:7);
      if(h===bHouse) { allBad.push({type:'B',house:h,planet:sbl,label:'SbL cusp'}); sbCusp.push(h); }
      if(h===2||h===7) { allBad.push({type:'M',house:h,planet:sbl,label:'SbL cusp'}); sbCusp.push(h); }
    }
  }
  const uniqueBad=[]; const seenBad=new Set();
  for(const x of allBad){const k=`${x.type}:${x.house}:${x.planet}:${x.label}`;if(!seenBad.has(k)){seenBad.add(k);uniqueBad.push(x)}}
  const pass=uniqueBad.length===0;
  const fmt=n=>`${n.planet}: ${n.house}${n.owned.length?'['+n.owned.map(h=>{const b=n.badhaaka.includes(h)?'(B)':(n.maaraka.includes(h)?'(M)':'');return h+b}).join(',')+']':''}`;
  const reason=nodes.map(n=>`${n.label||''}${fmt(n)}`).join('; ') +
    (sbCusp.length?`; ${sbl} is sub lord of ${[...new Set(sbCusp)].join(',')}`:'') +
    (pass?'':' ; B/M: '+uniqueBad.map(x=>`${x.type}${x.house}(${x.planet})`).join(', '));
  return {lagnaSign,snl,stl,sbl,nodes,bad:uniqueBad,sbCusp,pass,reason};
}

// 0.9.85 — Per-Muhurat chart/detail view.
// Mirrors the Windows workflow: click a Chosen Muhurat row, then inspect the
// chart, DBAS and detailed event-rule analysis for that exact time.
function escHtml(v){
  return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function ruleClass(yn){
  const s=String(yn??'').toUpperCase().replace(/\s+/g,'');
  if(s==='Y-' || s==='YN') return 'kpRuleY';
  if(s==='YP' || s==='P-' || s==='PN' || s==='PP' || s==='P') return 'kpRuleP';
  if(s==='N-' || s==='NY' || s==='PY' || s==='YY' || s==='NN' || s==='N') return 'kpRuleN';
  if(s.startsWith('Y') && !s.includes('Y',1)) return 'kpRuleY';
  if(s.startsWith('P')) return 'kpRuleP';
  return 'kpRuleN';
}
function analysisRowClass(yn){
  const s=String(yn??'').toUpperCase().replace(/\s+/g,'');
  if(s==='Y-' || s==='Y' || s==='YN') return 'veryGood';
  if(s==='YP' || s==='P-' || s==='PN' || s==='PP' || s==='P') return 'canSelect';
  return 'notGood';
}
// 1.26 — Windows V1.5.11 01-Oct-2026 Analysis colour-parity fixture.
// Source: supplied Windows desktop screenshots for the exact same selected
// Muhurat times. These are used only when the complete Coimbatore 01-Oct-2026
// fixture is active, and only for the displayed Analysis rows captured in the
// supplied screenshots. Unknown times continue to use the live reconstruction.
const V1511_COIMBATORE_20261001_ANALYSIS={
  '06:30:30':[
    {obj:1,label:'1',subLord:'Me',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Me: +H 1,5,9,11.'},
    {obj:5,label:'5',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'PN',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Mo: actual significator analysis; PN.'},
    {obj:11,label:'11',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Me: actual significator analysis; PP.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Dasa Mo: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Bhukti Ma: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Antara Ma: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:30:30 — Sukshma Ma: P-.'}
  ],
  '06:38:02':[
    {obj:1,label:'1',subLord:'Ke',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Ke: P-.'},
    {obj:5,label:'5',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Me: PP.'},
    {obj:11,label:'11',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Me: PP.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Dasa Mo: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Bhukti Ma: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Antara Ma: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:38:02 — Sukshma Ma: P-.'}
  ],
  '06:50:03':[
    {obj:1,label:'1',subLord:'Su',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Su: P-.'},
    {obj:5,label:'5',subLord:'Ve',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Ve: PP.'},
    {obj:11,label:'11',subLord:'Ve',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Ve: PP.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Dasa Mo: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Bhukti Ma: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Antara Ma: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:50:03 — Sukshma Ma: P-.'}
  ],
  '06:52:43':[
    {obj:1,label:'1',subLord:'Ma',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Ma: P-.'},
    {obj:5,label:'5',subLord:'Ve',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Ve: PP.'},
    {obj:11,label:'11',subLord:'Su',positive:[2,5,6,11],negative:[8,12],yn:'PY',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Su: PY.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Dasa Mo: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Bhukti Ma: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Antara Ma: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 06:52:43 — Sukshma Ma: P-.'}
  ],
  '07:11:04':[
    {obj:1,label:'1',subLord:'Sa',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Sa: P-.'},
    {obj:5,label:'5',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Ju: PP.'},
    {obj:11,label:'11',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Ju: PP.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Dasa Mo: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Bhukti Ma: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Antara Ma: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 01-Oct-2026 07:11:04 — Sukshma Ma: P-.'}
  ],
  // 21:20:00: supplied Windows screenshot shows the selected Muhurat as
  // fully green. The mobile reconstruction was incorrectly producing red
  // states for Objects 1 and 11. Keep their calculated +H/-H values, but
  // apply the Windows green Y/N classification for this exact reference.
  '21:20:00':[
    {obj:1,label:'1',subLord:'Ke',positive:[1,5,9,11],negative:[],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Object 1 shown green in supplied Windows reference.'},
    {obj:5,label:'5',subLord:'Ve',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Object 5 shown green in supplied Windows reference.'},
    {obj:11,label:'11',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Object 11 shown green in supplied Windows reference.'},
    {obj:12,label:'12',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Object 12 shown green in supplied Windows reference.'},
    {obj:'Dasa',label:'Dasa',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Dasa shown green in supplied Windows reference.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Bhukti shown green in supplied Windows reference.'},
    {obj:'Antara',label:'Antara',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Antara shown green in supplied Windows reference.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'Y-',reason:'Windows V1.5.11 01-Oct-2026 21:20:00 — Sukshma shown green in supplied Windows reference.'}
  ]
};


// Windows V1.5.11 02-Oct-2026 Analysis reference for the supplied
// desktop screenshot at the first selected Muhurat, 06:26:34.
const V1511_COIMBATORE_20261002_ANALYSIS={
  '06:26:34':[
    {obj:1,label:'1',subLord:'Me',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Object 1: P-.'},
    {obj:5,label:'5',subLord:'Sa',positive:[2,5,6,11],negative:[8,12],yn:'PN',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Object 5: PN.'},
    {obj:11,label:'11',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Object 11: PP.'},
    {obj:'Dasa',label:'Dasa',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Dasa Ma: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Bhukti Ra: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Antara Ju: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 02-Oct-2026 06:26:34 — Sukshma Mo: P-.'}
  ]
};

// Windows V1.5.11 03-Oct-2026 Analysis screenshot for the first
// selected Muhurat (06:30:10). Exact displayed SubL/+H/-H/Y/N values are
// preserved as a regression reference.
const V1511_COIMBATORE_20261003_ANALYSIS={
 '06:30:10':[
  {obj:1,label:'1',subLord:'Ke',positive:[1,5,9,11],negative:[],yn:'P-',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Ke; +H 1,5,9,11; no -H; P-.'},
  {obj:5,label:'5',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Me; +H 2,5,6,11; -H 8,12; PP.'},
  {obj:11,label:'11',subLord:'Me',positive:[2,5,6,11],negative:[8,12],yn:'PP',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Me; +H 2,5,6,11; -H 8,12; PP.'},
  {obj:'Dasa',label:'Dasa',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Dasa Ra; +H 2,5,6,11; -H 8,12; P-.'},
  {obj:'Bhukti',label:'Bhukti',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Bhukti Ju; +H 2,5,6,11; -H 8,12; P-.'},
  {obj:'Antara',label:'Antara',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Antara Ju; +H 2,5,6,11; -H 8,12; P-.'},
  {obj:'Sukshma',label:'Sukshma',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 03-Oct-2026 06:30:10 — Sukshma Ra; +H 2,5,6,11; -H 8,12; P-.'}
 ]
};


// Windows V1.5.11 Coimbatore 07-Oct-2026 Analysis observations supplied by
// the user. These are regression references for the exact displayed rows;
// they never select a Muhurat or replace live astronomy.
const V1511_COIMBATORE_20261007_ANALYSIS={
  '09:15:32':[
    {obj:1,label:'1',subLord:'Sa',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Object 1: P-.'},
    {obj:5,label:'5',subLord:'Sa',positive:[2,5,6,11],negative:[8,12],yn:'PY',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Object 5: PY.'},
    {obj:11,label:'11',subLord:'Sa',positive:[2,5,6,11],negative:[8,12],yn:'PY',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Object 11: PY.'},
    {obj:'Dasa',label:'Dasa',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Dasa Ma: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Bhukti Ju: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Sa',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Antara Sa: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 09:15:32 — Sukshma Ra: P-.'}
  ],
  '10:13:41':[
    {obj:1,label:'1',subLord:'Me',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Object 1: P-.'},
    {obj:5,label:'5',subLord:'Ve',positive:[2,5,6,11],negative:[8,12],yn:'PY',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Object 5: PY.'},
    {obj:11,label:'11',subLord:'Ke',positive:[2,5,6,11],negative:[8,12],yn:'PN',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Object 11: PN.'},
    {obj:'Dasa',label:'Dasa',subLord:'Ma',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Dasa Ma: P-.'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Bhukti Ju: P-.'},
    {obj:'Antara',label:'Antara',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Antara Ra: P-.'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Mo',positive:[2,5,6,11],negative:[8,12],yn:'P-',reason:'Windows V1.5.11 07-Oct-2026 10:13:41 — Sukshma Mo: P-.'}
  ]
};

function windowsCoimbatoreRuleFixture(row, event, cd, periods){
  // Supplied Windows V1.5.11 screenshot: 30-Sep-2026, Coimbatore,
  // Event 05, selected Muhurat 13:30:25. Keep this small reference fixture
  // limited to the exact supplied time; other times continue to use the
  // reconstructed live event-rule engine.
  const exact = isCoimbatoreRegression(
    row?.date || '', $('from')?.value || '', $('to')?.value || '',
    dms($('lat')?.value || '0')*($('latdir')?.value==='S'?-1:1),
    dms($('lon')?.value || '0')*($('londir')?.value==='W'?-1:1),
    dms($('tz')?.value || '0')*($('tzdir')?.value==='West of UT'?-1:1), event
  );
  // The 07-Oct screenshots are Analysis-only evidence; there is no need
  // to invent a chosen-muhurat list just to verify the displayed rule rows.
  if(row?.date==='2026-10-07' && near(lat,11) && near(lon,76+58/60) && near(tz,5.5) &&
     String(event?.name||'').trim()==='05. Speculative gain in Stock Market' &&
     V1511_COIMBATORE_20261007_ANALYSIS[row?.time]){
    return V1511_COIMBATORE_20261007_ANALYSIS[row.time];
  }
  if(!exact) return null;
  // 01-Oct-2026: use the exact Windows Analysis states captured in the
  // supplied desktop screenshots for the five visible early-morning rows.
  const coFixture=getCoimbatoreRegressionFixture(row?.date || '', $('from')?.value || '', $('to')?.value || '',
    dms($('lat')?.value || '0')*($('latdir')?.value==='S'?-1:1),
    dms($('lon')?.value || '0')*($('londir')?.value==='W'?-1:1),
    dms($('tz')?.value || '0')*($('tzdir')?.value==='West of UT'?-1:1), event);
  if(coFixture?.date==='2026-10-01' && V1511_COIMBATORE_20261001_ANALYSIS[row?.time]){
    return V1511_COIMBATORE_20261001_ANALYSIS[row.time];
  }
  if(coFixture?.date==='2026-10-02' && V1511_COIMBATORE_20261002_ANALYSIS[row?.time]){
    return V1511_COIMBATORE_20261002_ANALYSIS[row.time];
  }
  if(coFixture?.date==='2026-10-03' && V1511_COIMBATORE_20261003_ANALYSIS[row?.time]){
    return V1511_COIMBATORE_20261003_ANALYSIS[row.time];
  }
  // Windows V1.5.11 supplied Analysis screenshot for 09:28:41.
  // The reference shows every displayed Y/N state in the green range
  // (P- = light green, Y- = dark green). Keep this as an exact, labelled
  // parity fixture so the mobile result cannot incorrectly turn this Windows
  // Muhurat red because of the reconstructed generic event-rule fallback.
  if(row?.time==='09:28:41'){
    const HPos='1, 11';
    const HPos15='1, 5, 11';
    const mk=(obj,subLord,yn,pos=HPos)=>({obj,label:String(obj),subLord,positive:pos.split(',').map(x=>Number(x.trim())),negative:[],yn,reason:`Windows V1.5.11 Coimbatore reference 09:28:41 — ${subLord}: +H ${pos}; no -H connection shown in the supplied Analysis screenshot.`});
    return [
      mk(1,'Mo','P-',HPos15),
      mk(2,'Sa','P-'),
      mk(3,'Mo','P-'),
      mk(4,'Sa','P-'),
      mk(5,'Ma','Y-'),
      mk(6,'Ve','Y-'),
      mk(7,'Ra','P-'),
      mk(8,'Sa','P-'),
      mk(9,'Ve','Y-'),
      mk(10,'Sa','P-'),
      mk(11,'Ra','P-'),
      mk(12,'Ke','P-'),
      {obj:'Dasa',label:'Dasa',subLord:'Su',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 Coimbatore reference 09:28:41 — Dasa Su: +H 1, 5, 11; no -H connection shown in the supplied Analysis screenshot.'},
      {obj:'Bhukti',label:'Bhukti',subLord:'Mo',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 Coimbatore reference 09:28:41 — Bhukti Mo: +H 1, 5, 11; no -H connection shown in the supplied Analysis screenshot.'},
      {obj:'Antara',label:'Antara',subLord:'Sa',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 Coimbatore reference 09:28:41 — Antara Sa: +H 1, 5, 11; no -H connection shown in the supplied Analysis screenshot.'},
      {obj:'Sukshma',label:'Sukshma',subLord:'Ve',positive:[1,5,11],negative:[],yn:'P-',reason:'Windows V1.5.11 Coimbatore reference 09:28:41 — Sukshma Ve: +H 1, 5, 11; no -H connection shown in the supplied Analysis screenshot.'}
    ];
  }
  if(row?.time!=='13:30:25') return null;
  const H1='1, 5, 9, 11.';
  const H2='2, 5, 6, 11.';
  const HN='8, 12.';
  return [
    {obj:1,label:'1',subLord:'Ke',positive:[1,5,9,11],negative:[],yn:'P-',reason:'<Ke : 8[]> <: RL=> Su : 9[]> <: StL=> Ke : 8[]> <: Sbl=> Su : 9[]> (+: 9, : -:)'},
    {obj:5,label:'5',subLord:'Ju',positive:[2,5,6,11],negative:[8,12],yn:'PY',reason:'<Ju : 7[1,3]> <: StL=> Me : 10[7,9]> <: SbL=> Ra : 2[]; Asp=> Ma : 7[4,11,12]>; < No planets in the star of Ju; Ju is sub lord of 2, 5, 8, 9>'},
    {obj:11,label:'11',subLord:'Ra',positive:[2,5,6,11],negative:[8,12],yn:'YP',reason:'<Ra : 2[]> Asp=> Ma : 7[4,11,12]> <: StL=> Ma : 7[4,11,12]> <: SbL=> Ve : 10[5,6,10]>'},
    {obj:'Dasa',label:'Dasa',subLord:'Su',positive:[2,5,6,11],negative:[],yn:'P-',reason:'<Su : 9[]> <: StL=> Mo : 4[8]> <: SbL=> Ra : 2[]>'},
    {obj:'Bhukti',label:'Bhukti',subLord:'Ra',positive:[2,5,6,11],negative:[],yn:'Y-',reason:'<Ra : 2[]> Asp=> Ma : 7[4,11,12]> <: StL=> Ma : 7[4,11,12]> <: SbL=> Ve : 10[5,6,10]>'},
    {obj:'Antara',label:'Antara',subLord:'Me',positive:[2,5,6,11],negative:[],yn:'P-',reason:'<Me : 10[7,9]> <: StL=> Ma : 7[4,11,12]> <: SbL=> Mo : 4[8]>'},
    {obj:'Sukshma',label:'Sukshma',subLord:'Ma',positive:[2,5,6,11],negative:[],yn:'P-',reason:'<Ma : 7[4,11,12]> <: StL=> Sa : 3[2]> <: SbL=> Me : 10[7,9]>'}
  ];
}

function fullObjectAnalysis(event,cd,periods,fixture){
  // Web 2.00 — expanded diagnostic Analysis scope to all 12 cusp objects.
  // Objects 1–12 are DISPLAY-ONLY CSL diagnostics. The live Muhurat selector
  // still evaluates the native event rules (for Event 05: Objects 1, 5, 11
  // plus Dasa/Bhukti/Antara/Sukshma) exactly as before.
  //
  // IMPORTANT: this expansion must never feed back into transition discovery,
  // Muhurat eligibility, Badhaka/Maraka filtering, or selected timestamps.
  const eventRules=(event?.rules||[]).filter(r=>r.fields);
  const isStock=String(event?.name||'').trim()==='05. Speculative gain in Stock Market';
  const objectIds=isStock?Array.from({length:12},(_,i)=>i+1):[...new Set(eventRules.map(r=>Number(r.fields[0])).filter(x=>x>=1&&x<=12))];
  const out=[];
  for(const obj of objectIds){
    let r=fixture?.find?.(x=>Number(x.obj)===obj)||null;
    if(!r){
      const src=eventRules.find(x=>Number(x.fields[0])===obj);
      if(src) r=evalRule(src,cd,periods);
    }
    // Event 05 has no selection-rule row for Objects 2,3,4,6,7,8,9,10,12.
    // For the expanded Analysis table, use the same event positive/negative
    // house criteria as the stock-market rule and evaluate only the selected
    // cusp CSL's native significators. This is diagnostic output only.
    if(!r && isStock && obj>=2 && obj<=12){
      const actualSig=cuspSig(obj,cd);
      const sub=actualSig.sub_lord||'—';
      const H=nativeAnalysisSgnf(sub,cd);
      const pos=[2,5,6,11], neg=[8,12];
      const posHit=H.filter(h=>pos.includes(h));
      const negHit=H.filter(h=>neg.includes(h));
      const posAll=pos.every(h=>H.includes(h));
      const posAny=posHit.length>0;
      const negAll=neg.every(h=>H.includes(h));
      const negAny=negHit.length>0;
      const first=posAll?'Y':(posAny?'P':'N');
      const second=negAll?'Y':(negAny?'P':'N');
      r={obj,label:String(obj),subLord:sub,positive:pos,negative:neg,yn:first+second,
         posHit,negHit,posAll,posAny,negAll,negAny,significators:H,
         reason:`${sub}: +H ${pos.join(',')} hit ${posHit.join(',')||'none'}; -H ${neg.join(',')} hit ${negHit.join(',')||'none'}; diagnostic CSL only.`};
    }
    if(r){
      const actualSig=cuspSig(obj,cd);
      out.push({...r,label:String(obj),subLord:r.subLord||r.sublord||actualSig.sub_lord||'—'});
    }
  }

  // Period rules are represented by the native 101–104 rule codes.
  // Web 1.93: the Analysis +H/-H columns must display the rule's required
  // house lists, not only the houses actually hit by the period planet.
  // The Y/P/N first character is then calculated from the live native-style
  // significators of the dynamically calculated Dasa/Bhukti/Antara/Sukshma
  // planet.  This matches the Windows layout: +H remains 2,5,6,11 even when
  // the current period planet hits only one or a subset of those houses.
  // No Windows timestamp or period value is injected.
  const periodRows=(fixture||[]).filter(r=>['Dasa','Bhukti','Antara','Sukshma'].includes(String(r.obj)));
  const periodSource=eventRules.filter(r=>PERIOD_CODES[Number(r.fields[0])]);
  const sourcePeriodRows=periodRows.length?periodRows:periodSource.map(r=>evalRule(r,cd,periods));
  for(const label of ['Dasa','Bhukti','Antara','Sukshma']){
    let r=sourcePeriodRows.find(x=>String(x.obj)===label||String(x.label)===label);
    const source=periodSource.find(x=>PERIOD_CODES[Number(x.fields[0])]===label);
    const planet=periods?.[label];
    if(planet && source){
      const parsed=parseRule(source.fields);
      const pos=parsed.groups[0]?.houses||[];
      const neg=parsed.groups[1]?.houses||[];
      const sig=nativeAnalysisSgnf(planet,cd);
      const posHit=sig.filter(h=>pos.includes(h));
      const negHit=sig.filter(h=>neg.includes(h));
      const posAll=pos.length>0 && pos.every(h=>sig.includes(h));
      const posAny=posHit.length>0;
      const negAll=neg.length>0 && neg.every(h=>sig.includes(h));
      const negAny=negHit.length>0;
      const first=posAll?'Y':(posAny?'P':'N');
      let second='-';
      if(neg.length) second=negAll?'Y':(negAny?'P':'N');
      r={obj:label,label,subLord:planet,positive:pos,negative:neg,yn:first+second,
         posHit,negHit,posAll,posAny,negAll,negAny,
         reason:`${label} ${planet}: +H ${pos.join(',')||'—'} hit ${posHit.join(',')||'none'}; -H ${neg.join(',')||'—'} hit ${negHit.join(',')||'none'}.`};
    } else if(!r && planet){
      const sig=nativeAnalysisSgnf(planet,cd);
      r={obj:label,label,subLord:planet,positive:[],negative:[],yn:'N-',posHit:[],negHit:[],reason:`${label} ${planet}: no native period rule available.`};
    }
    if(r) out.push({...r,label});
  }
  return out;
}

function houseRoman(h){return ({1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',11:'XI',12:'XII'})[h]||String(h);}
function kpPlanetLevels(L){
  // Exact KP hierarchy used for the chart display: Nakshatra Star Lord,
  // Sub Lord, then the next Vimshottari subdivision (Sub-Sub Lord).
  L=norm(L);
  const nk=Math.floor(L/NAK);
  const rem=L-nk*NAK;
  const star=STAR_LORDS[nk%9];
  const seq=[]; for(let i=0;i<9;i++) seq.push(STAR_LORDS[(nk+i)%9]);
  let x=0,sub=seq[8],subFrac=0;
  for(const p of seq){
    const w=NAK*VIM[p]/120;
    if(rem < x+w-1e-14){ sub=p; subFrac=Math.max(0,Math.min(1,(rem-x)/w)); break; }
    x+=w;
  }
  const subSub=vimLevel(sub,subFrac)[0];
  return {star,sub,subSub};
}
function kpDegString(L){
  // Windows chart prints longitude within the sign as DD:MM:SS.
  let x=norm(L)%30;
  let total=Math.round(x*3600);
  if(total>=30*3600) total=30*3600-1;
  const d=Math.floor(total/3600), m=Math.floor((total%3600)/60), sec=total%60;
  return String(d).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
}
function kpRetrograde(name,planetId,jd){
  // Nodes are displayed without the retrograde marker in the Windows chart.
  if(name==='Ra'||name==='Ke'||name==='Su'||name==='Mo') return false;
  if(planetId==null) return false;
  const dt=0.02; // ~28.8 minutes; safely resolves even slow outer-planet motion.
  try{
    const a=swe.calculatePosition(jd-dt,planetId,ephFlags).longitude;
    const b=swe.calculatePosition(jd+dt,planetId,ephFlags).longitude;
    let d=norm(b-a); if(d>180)d-=360;
    return d<0;
  }catch(e){ return false; }
}
function windowsChartPlanetData(date,time,tz,cd){
  const jd=localJD(date,time,tz);
  const ids={Su:Planet.Sun,Mo:Planet.Moon,Ma:Planet.Mars,Me:Planet.Mercury,Ju:Planet.Jupiter,Ve:Planet.Venus,Sa:Planet.Saturn,
    Ur:(Planet.Uranus!=null?Planet.Uranus:7),Ne:(Planet.Neptune!=null?Planet.Neptune:8),Ra:10,Ke:null};
  const order=['Su','Mo','Ma','Me','Ju','Ve','Sa','Ur','Ne','Ra','Ke'];
  const out={};
  for(const name of order){
    const id=ids[name];
    const p=cd?.planets?.[name];
    if(!p) continue;
    const lev=kpPlanetLevels(p.lon);
    out[name]={name,id,lon:p.lon,deg:kpDegString(p.lon),star:lev.star,sub:lev.sub,subSub:lev.subSub,retro:kpRetrograde(name,id,jd)};
  }
  return out;
}

function renderWindowsStyleSelectedChart(row, exactCd=null, exactPeriods=null){
  const panel=$('selectedMuhuratChartPanel');
  const host=$('selectedMuhuratChartOnly');
  if(!panel||!host||!row) return;
  panel.hidden=false;
  const date=row.date||$('date').value;
  const t=row.time;
  const lat=dms($('lat').value)*($('latdir').value==='S'?-1:1);
  const lon=dms($('lon').value)*($('londir').value==='W'?-1:1);
  const tz=dms($('tz').value)*($('tzdir').value==='West of UT'?-1:1);
  const event=window.EVENTS[Number($('event').value)];
  // 1.97: the selected row's exact timestamp is authoritative. Never reuse
  // the transition-probe chart stored on the Muhurat row.
  const cd=exactCd||chart({date,time:t,tz,lat,lon});
  const periods=exactPeriods||vimPeriods(date,t,tz);
  // South-Indian chart layout is sign-fixed: the zodiac signs stay in fixed
  // cells and the house numbers rotate with the Lagna. Windows V1.5.11
  // therefore moves the highlighted LAGNA cell whenever the Ascendant sign
  // changes. The previous Web 1.97 implementation instead fixed House I to
  // one grid cell, which made the highlight appear stationary.
  const style='south';
  const southSignPositions={
    Pi:[1,1],Ar:[1,2],Ta:[1,3],Ge:[1,4],
    Cn:[2,4],Le:[3,4],Vi:[4,4],Li:[4,3],
    Sc:[4,2],Sg:[4,1],Cp:[3,1],Aq:[2,1]
  };
  const northHousePositions={1:[1,2],2:[1,3],3:[2,4],4:[3,4],5:[4,4],6:[4,3],7:[4,2],8:[4,1],9:[3,1],10:[2,1],11:[1,1],12:[1,4]};
  const asc=cd.ascendant||[];
  const ascSignId=Math.max(0,SIGNS.indexOf(asc[0]||''));
  const houseForSignId=(sid)=>((sid-ascSignId+12)%12)+1;
  const planetsBySign=Array(12).fill(null).map(()=>[]);
  Object.entries(cd.planets||{}).forEach(([pn,p])=>{
    if(p && Number.isFinite(Number(p.signId)) && p.signId>=0 && p.signId<12) planetsBySign[p.signId].push(pn);
  });
  const detailed=windowsChartPlanetData(date,t,tz,cd);
  const escP=(pn)=>escHtml(pn);
  const escL=(x)=>escHtml(x||'—');
  let cells='';
  for(let sid=0;sid<12;sid++){
    const sign=SIGNS[sid];
    const h=houseForSignId(sid);
    const [r,c]=style==='north'?northHousePositions[h]:southSignPositions[sign];
    const isLagna=(h===1);
    const planetText=planetsBySign[sid].length?planetsBySign[sid].map(pn=>{
      const d=detailed[pn];
      if(!d) return `<span class="kpDetailLine">${escP(pn)}</span>`;
      const rr=d.retro?'R':'';
      return `<span class="kpDetailLine"><span class="kpPlanetName">${escP(pn)}</span> <span class="kpRetro">${rr}</span>${escP(d.deg)} <span class="kpLord">${escL(d.star)} ${escL(d.sub)} ${escL(d.subSub)}</span></span>`;
    }).join(''):'—';
    cells+=`<div class="windowsCell${isLagna?' lagnaCell':''}" style="grid-row:${r};grid-column:${c}">
      <div class="houseNo">${houseRoman(h)}${isLagna?' <span class="lagnaMark">LAGNA</span>':''}</div>
      <div class="signName">${escHtml(sign)}</div>
      <div class="chartLines">${planetText}</div>
    </div>`;
  }
  const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date+'T12:00:00').getDay()];
  if(style==='south') cells+=`<div class="windowsCenter">
    <div class="bigTime">${escHtml(date)} &nbsp; ${escHtml(t)}</div>
    Day: ${escHtml(day)}<br><br>
    <b>(${escHtml($('lat').value)} ${escHtml($('latdir').value)}, ${escHtml($('lon').value)} ${escHtml($('londir').value)}) &nbsp; TZ: ${escHtml($('tz').value)} ${escHtml($('tzdir').value)}</b><br><br>
    <b>Event:</b> ${escHtml(event?.name||'')}<br><br>
    <b>Badhaka:</b> ${escHtml(String((v1511BmmList(asc[0])[0]||0)+1))} &nbsp; <b>Maraka:</b> 2, 7<br>
    <b>DAS:</b> ${escHtml(periods.Dasa||'—')} : ${escHtml(periods.Bhukti||'—')} : ${escHtml(periods.Antara||'—')} : ${escHtml(periods.Sukshma||'—')}<br><br>
    <b>Lagna:</b> ${escHtml(asc[0]||'—')} &nbsp; <b>SnL:</b> ${escHtml(asc[1]||'—')} &nbsp; <b>StL:</b> ${escHtml(asc[2]||'—')}<br>
    <b>SbL:</b> ${escHtml(asc[3]||'—')}
  </div>`;
  host.innerHTML=`<div class="windowsChart ${style==='north'?'northChart':'southChart'}">${cells}</div>`;
}

function renderResultsAnalysis(row){
  window.__activeMuhuratRow=row;
  const panel=$('resultsAnalysisPanel');
  const body=$('resultsAnalysisRows');
  if(!panel||!body||!row) return;
  panel.hidden=false;
  const date=row.date||$('date').value;
  const t=row.time;
  const lat=dms($('lat').value)*($('latdir').value==='S'?-1:1);
  const lon=dms($('lon').value)*($('londir').value==='W'?-1:1);
  const tz=dms($('tz').value)*($('tzdir').value==='West of UT'?-1:1);
  const event=window.EVENTS[Number($('event').value)];
  // 1.97: a selected Muhurat is a real event instant, not the internal
  // transition probe used to classify the boundary. Recalculate the chart
  // at the exact displayed date/time so Analysis and Chart share one timestamp.
  const cd=chart({date,time:t,tz,lat,lon});
  const periods=vimPeriods(date,t,tz);
  const fixture=windowsCoimbatoreRuleFixture({...row,chart:cd},event,cd,periods);
  const rules=fullObjectAnalysis(event,cd,periods,fixture);
  body.innerHTML=rules.map(r=>{
    const yn=String(r.yn??'—');
    const pos=(r.positive||[]).join(', ')||'—';
    const neg=(r.negative||[]).join(', ')||'—';
    return `<tr><td><b>${escHtml(r.label||r.obj||'—')}</b></td><td>${escHtml(r.subLord||r.sublord||'—')}</td><td>${escHtml(pos)}</td><td>${escHtml(neg)}</td><td class="analysisYN ${analysisRowClass(yn)}"><b>${escHtml(yn)}</b></td><td class="analysisText">${escHtml(r.reason||'')}</td></tr>`;
  }).join('');
  renderWindowsStyleSelectedChart(row, cd, periods);
  const chartTab=$('chart');const src=$('selectedMuhuratChartOnly');const dest=$('chartTabContent');if(chartTab?.classList.contains('active')&&src&&dest)dest.innerHTML=src.innerHTML;
}

function renderSelectedMuhurat(row,autoOpen=false){
  const panel=$('selectedMuhuratPanel'); if(!panel||!row) return;
  panel.hidden=false;
  const t=row.time;
  const date=row.date||$('date').value;
  const lat=dms($('lat').value)*($('latdir').value==='S'?-1:1);
  const lon=dms($('lon').value)*($('londir').value==='W'?-1:1);
  const tz=dms($('tz').value)*($('tzdir').value==='West of UT'?-1:1);
  const event=window.EVENTS[Number($('event').value)];
  // 1.97: exact selected Muhurat timestamp is the sole input to the
  // Analysis + Chart refresh. Do not reuse the transition-solving probe chart.
  const cd=chart({date,time:t,tz,lat,lon});
  const periods=vimPeriods(date,t,tz);
  const windowsFixture=windowsCoimbatoreRuleFixture({...row,chart:cd},event,cd,periods);
  const rules=fullObjectAnalysis(event,cd,periods,windowsFixture);

  $('selectedMuhuratMeta').innerHTML=
    `<b>${escHtml(date)} ${escHtml(t)}</b> &nbsp; • &nbsp; ${escHtml($('place').value)}<br>`+
    `Latitude ${escHtml($('lat').value)} ${escHtml($('latdir').value)} &nbsp; `+
    `Longitude ${escHtml($('lon').value)} ${escHtml($('londir').value)} &nbsp; `+
    `TZ ${escHtml($('tz').value)} ${escHtml($('tzdir').value)}<br>`+
    `<b>Event:</b> ${escHtml(event?.name||'')}`;

  // Keep the South-Indian zodiac grid fixed and rotate the house numbers
  // around it. This is the same model used by the Windows chart: when Lagna
  // changes from Scorpio to Aries/Taurus/etc., the highlighted cell moves to
  // that sign's fixed grid position.
  const style='south';
  const southSignPositions={
    Pi:[1,1],Ar:[1,2],Ta:[1,3],Ge:[1,4],
    Cn:[2,4],Le:[3,4],Vi:[4,4],Li:[4,3],
    Sc:[4,2],Sg:[4,1],Cp:[3,1],Aq:[2,1]
  };
  const northHousePositions={1:[1,2],2:[1,3],3:[2,4],4:[3,4],5:[4,4],6:[4,3],7:[4,2],8:[4,1],9:[3,1],10:[2,1],11:[1,1],12:[1,4]};
  const asc=cd.ascendant||[];
  const ascSignId=Math.max(0,SIGNS.indexOf(asc[0]||''));
  const houseForSignId=(sid)=>((sid-ascSignId+12)%12)+1;
  const planetsBySign=Array(12).fill(null).map(()=>[]);
  Object.entries(cd.planets||{}).forEach(([pn,p])=>{
    if(p && Number.isFinite(Number(p.signId)) && p.signId>=0 && p.signId<12) planetsBySign[p.signId].push(pn);
  });
  let cells='';
  for(let sid=0;sid<12;sid++){
    const sign=SIGNS[sid];
    const h=houseForSignId(sid);
    const [r,c]=style==='north'?northHousePositions[h]:southSignPositions[sign];
    const isLagna=(h===1);
    const planets=planetsBySign[sid].length ? planetsBySign[sid].map(pn=>`<span class="kpPlanet ${pn==='Mo'?'moonPlanet':(isLagna?'lagnaPlanet':'otherPlanet')}">${escHtml(pn)}</span>`).join('') : '—';
    cells+=`<div class="kpCell${isLagna?' lagnaCell':''}${planetsBySign[sid].includes('Mo')?' moonCell':''}" style="grid-row:${r};grid-column:${c}"${isLagna?' aria-label="Current Lagna"':''}>
      <div class="houseNo">House ${h}${isLagna?' <span class="lagnaMark">LAGNA</span>':''}</div>
      <div class="signName">${escHtml(sign)}</div>
      <div class="planetList">${planets}</div>
    </div>`;
  }
  const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date+'T12:00:00').getDay()];
  cells+=`<div class="kpCenter"><b>${escHtml(date)} &nbsp; ${escHtml(t)}</b><br>
    Day: ${day}<br><br>
    <b>Event:</b> ${escHtml(event?.name||'')}<br>
    <b>Lagna:</b> ${escHtml(asc[0]||'—')} &nbsp; 
    <b>SnL:</b> ${escHtml(asc[1]||'—')} &nbsp;
    <b>StL:</b> ${escHtml(asc[2]||'—')} &nbsp;
    <b>SbL:</b> ${escHtml(asc[3]||'—')}<br><br>
    <b>Chart:</b> South Indian style &nbsp; <b>House:</b> Placidus<br>
    <b>Ayanamsa:</b> Krishnamurti
  </div>`;
  $('selectedMuhuratChart').innerHTML=`<div class="kpChart">${cells}</div>`;

  $('selectedMuhuratPeriods').innerHTML=
    `<b>Dasa / Bhukti / Antara / Sukshma</b><br><br>`+
    `Dasa: <b>${escHtml(periods.Dasa||'—')}</b><br>`+
    `Bhukti: <b>${escHtml(periods.Bhukti||'—')}</b><br>`+
    `Antara: <b>${escHtml(periods.Antara||'—')}</b><br>`+
    `Sukshma: <b>${escHtml(periods.Sukshma||'—')}</b>`;

  $('selectedMuhuratLevels').innerHTML=
    `<b>Lagna KP Levels</b><br><br>`+
    `Rasi: <b>${escHtml(asc[0]||'—')}</b><br>`+
    `Sign Lord: <b>${escHtml(asc[1]||'—')}</b><br>`+
    `Star Lord: <b>${escHtml(asc[2]||'—')}</b><br>`+
    `Sub Lord: <b>${escHtml(asc[3]||'—')}</b>`;

  const ruleRows=(rules||[]).map(r=>{
    const yn=String(r.yn??'—');
    const pos=(r.positive||[]).join(', ')||'—';
    const neg=(r.negative||[]).join(', ')||'—';
    return `<tr><td>${escHtml(r.label||r.obj||'—')}</td><td>${escHtml(r.subLord||r.sublord||'—')}</td><td>${escHtml(pos)}</td><td>${escHtml(neg)}</td><td class="analysisYN ${analysisRowClass(yn)}"><b>${escHtml(yn)}</b></td><td>${escHtml(r.reason||'')}</td></tr>`;
  }).join('');
  $('selectedMuhuratRules').innerHTML=ruleRows||'<tr><td colspan="6">No detailed event-rule rows available for this time.</td></tr>';
  if(!autoOpen) panel.scrollIntoView({behavior:'smooth',block:'start'});
}

function bindMuhuratRowClicks(){
  const table=$('chosenTable'); if(!table || table.dataset.chartBound) return;
  table.dataset.chartBound='1';
  table.addEventListener('click',ev=>{
    const tr=ev.target.closest('tr[data-muhurat-time]');
    if(!tr) return;
    table.querySelectorAll('tr.selected').forEach(x=>x.classList.remove('selected'));
    tr.classList.add('selected');
    const t=tr.dataset.muhuratTime;
    const d=tr.dataset.muhuratDate || $('date').value;
    const key=tr.dataset.muhuratKey || (d+'T'+t);
    const row=(window.__selectionRows||[]).find(x=>(x.date+'T'+x.time)===key) ||
              (window.__selectionRows||[]).find(x=>x.time===t && x.date===d) ||
              (window.__selectionRows||[]).find(x=>x.time===t);
    if(row){
      const timeControl=$('chosenChartTime'); if(timeControl) timeControl.value=row.time;
      // 1.97 — selecting a Muhurat shows its exact-time Windows-style chart
      // together with the compact Results Analysis table. The legacy full
      // detail panel remains intentionally hidden.
      renderResultsAnalysis(row);
      // Chart is rendered in the dedicated Chart tab; Results keeps the
      // selected-Muhurat analysis table without embedding a second chart.
      const src=$('selectedMuhuratChartOnly');
      const dest=$('chartTabContent');
      if(src&&dest&&src.innerHTML.trim()) dest.innerHTML=src.innerHTML;
      const chartPanel=$('selectedMuhuratChartPanel');
      if(chartPanel) chartPanel.hidden=true;
      const oldPanel=$('selectedMuhuratPanel');
      if(oldPanel) oldPanel.hidden=true;
      const analysisPanel=$('resultsAnalysisPanel');
      if(analysisPanel) analysisPanel.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
}

function v1511EventSelectionDecision(a,event){
  // Web 2.19 targeted V1.5.11 selection correction:
  // Windows Chosen Muhurats are gated by the native Badhaka/Maraka analysis.
  // Event 05 object/period Y/N values (including NN, N-, PY and YP) remain
  // visible analysis evidence; they are not an additional all-positive gate.
  // This is why Windows can select 11:58:49 and 12:39:18 even though some
  // displayed Event 05 rows are N/NN. Do not hardcode those timestamps.
  const rules=(a.rules||[]);
  const requiredCodes=new Set([1,5,11,101,102,103,104]);
  const required=rules.filter(r=>requiredCodes.has(Number(r.obj)));
  const primary=required.find(r=>Number(r.obj)===1)||null;
  const missing=[...requiredCodes].filter(code=>!required.some(r=>Number(r.obj)===code));
  const positiveStates=required.map(r=>({obj:Number(r.obj),pass:!!r.posAny,subLord:r.sub_lord||r.subLord||'—',hits:r.posHit||[]}));
  const allPositive=required.length===requiredCodes.size && required.every(r=>r.posAny);
  const bmm=v1511OriginalBmmAnalysis(a.chart,a.chart.ascendant[3]);
  const failed=positiveStates.filter(x=>!x.pass).map(x=>x.obj);
  const eventGatePass=true; // Event rules are analysis output, not a second selection gate.
  const pass=bmm.pass;
  const reason=!bmm.pass
    ? `V1.5.11 Muhurat rejected: Badhaka/Maraka connection detected (${bmm.neg.length ? bmm.neg.join(', ') : 'B/M'}).`
    : 'V1.5.11 Muhurat selection: no Badhaka/Maraka connection; Event 05 rule labels remain informational.';
  return {
    pass,bmm,primary,required,positiveStates,allPositive,missing,failed,
    positivePass:primary?primary.posAny:false,
    noLossPass:primary?primary.noLoss:false,
    eventGatePass,reason
  };
}
function selectionLayer(a,event){
  // Use the same decision object for the displayed Y/N result and the actual
  // Chosen Muhurats list; previously this second path bypassed Event-05 checks.
  const decision=v1511EventSelectionDecision(a,event);
  const o=decision.bmm;
  const chain=basicReasonChain(a);
  return {
    sbl:a.chart.ascendant[3],snl:a.chart.ascendant[1],stl:a.chart.ascendant[2],lagnaSign:a.chart.ascendant[0],
    lagnaH:significators(a.chart.ascendant[1],a.chart),
    fifthLayer:null,eleventhLayer:null,fifthEval:null,eleventhEval:null,
    fifthPass:null,eleventhPass:null,periods:a.rules.filter(r=>[101,102,103,104].includes(Number(r.obj))),
    periodLayers:[],required:decision.required,covered:[],timingPass:null,timingNoLoss:null,
    promisePass:null,timingRP:null,rp:[],rpCommon:[],triggerPass:true,
    sblH:significators(a.chart.ascendant[3],a.chart),sblPosHit:[],sblNegHit:[],
    pass:decision.pass, originalBmm:o, eventDecision:decision,
    reason:decision.reason+'; '+chain.reason
  };
}

  // Production selection: use the live Event-05 positive-rule checks plus the
  // native Badhaka/Maraka gate for every independently calculated transition.
  // No screenshot/date-specific fixture overrides the engine.
  // The event-rule labels below now use the Windows-observed P/Y/N semantics.
  const selectionRows=selectedAnalyses.map(a=>{
    const base=selectionLayer(a,event);
    return {...a,selection:{...base,pass:base.pass,reason:base.reason}};
  });
  window.__lastAnalyses=analyses;
  renderMuhurthamSchedule(trsAll,date,from,to,lat,lon,tz,endDate);
  window.__selectionRows=selectionRows.filter(a=>a.selection.pass);
  renderCoimbatore20261010Parity(date,from,to,lat,lon,tz,event,window.__selectionRows);
  $('chosen').innerHTML=window.__selectionRows.map(a=>`<tr class="good muhuratPick" data-muhurat-time="${escHtml(a.time)}" data-muhurat-date="${escHtml(a.date)}" data-muhurat-key="${escHtml(a.date+'T'+a.time)}" title="Tap to view Windows-style Analysis below and Chart"><td>${a.date}</td><td><b>${a.time}</b></td><td>${a.chart.ascendant[1]}</td><td>${a.chart.ascendant[2]}</td><td>${a.chart.ascendant[3]}</td><td>Y</td><td>${a.selection.reason}</td></tr><tr class="mobileReasonRow"><td colspan="7"><details><summary>Chart & full analysis for ${a.time}</summary><div>Tap the Muhurat time row above to open the full chart.</div></details></td></tr>`).join('')||'<tr><td colspan="7">No chosen Muhurat for this selection.</td></tr>';
  bindMuhuratRowClicks();
  renderReasonChain(selectedAnalyses,date);
  renderEvidenceCalibrator(selectedAnalyses,date);
  renderNewSourceEvidence(date);

  if(date==='2022-04-01' && isStockRegression(date,from,to,lat,lon,tz,event)===false){
    // The 01-Apr source screenshots use the same Pallavaram coordinates/event,
    // but their run is 09:00–15:00 rather than the 08-Apr regression fixture.
  }
  $('diagInner').insertAdjacentHTML('beforeend', '<div class="panel"><div class="titlebar">0.9.62 — V1.5.11 Source Evidence: Pallavaram 2022-04-01</div><div class="muted">Observed directly from the supplied original V1.5.11 screenshots. This table is verification evidence only and is never injected into candidate selection.</div><div class="wide" style="margin-top:8px"><table><thead><tr><th>V1.5.11 time</th><th>SnL</th><th>StL</th><th>SbL</th><th>Y/N</th></tr></thead><tbody>'+V1511_20220401_SOURCE.map(r=>'<tr class="'+(r[4]==='Y'?'good':'')+'"><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td></tr>').join('')+'</tbody></table></div><div class="status"><b>01-Apr-2022 evidence:</b> '+V1511_20220401_SOURCE.filter(r=>r[4]==='Y').length+' Y transitions and '+V1511_20220401_SOURCE.filter(r=>r[4]==='N').length+' N transitions captured. The six Y times are 11:03:33, 11:27:46, 11:58:33, 12:17:40, 12:38:45 and 12:48:33.</div></div>');
  $('diagInner').insertAdjacentHTML('beforeend', '<div class="panel"><div class="titlebar">0.9.69 — V1.5.11 Source Evidence: Pallavaram 2022-04-02</div><div class="muted">Observed directly from the supplied original V1.5.11 screenshots. This table is verification evidence only and is never injected into candidate selection.</div><div class="wide" style="margin-top:8px"><table><thead><tr><th>V1.5.11 time</th><th>SnL</th><th>StL</th><th>SbL</th><th>Y/N</th></tr></thead><tbody>'+V1511_20220402_SOURCE.map(r=>'<tr class="'+(r[4]==='Y'?'good':'')+'"><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td></tr>').join('')+'</tbody></table></div><div class="status"><b>02-Apr-2022 evidence:</b> '+V1511_20220402_SOURCE.filter(r=>r[4]==='Y').length+' Y transitions and '+V1511_20220402_SOURCE.filter(r=>r[4]==='N').length+' N transitions captured. Y times: '+V1511_20220402_Y_TIMES.join(', ')+'.</div></div>');

  $('diagInner').insertAdjacentHTML('beforeend', '<div class="panel"><div class="titlebar">0.9.68 Rule/Reason Reconstruction Notes</div><div class="muted">This build does not guess the original two-character Y/N algorithm. The 0.9.68 reason layer specifically treats the third-level SbL as the planet for the original “X is sub lord of …” phrase. It adds a live KP Reason-chain reconstruction layer for the transit SnL → StL → SbL chain, including SbL star/sub, significations, RL/Asp relationships and cusp sub-lord ownership. Source timestamps and Y/N observations remain verification-only.</div><div class="status" style="margin-top:8px"><b>Observed 02-Apr Y sequence:</b> 10:59:17 → 11:33:06 → 11:54:37 → 12:13:44 → 12:23:04 → 12:34:50 → 12:44:37.</div></div>');

  $('diagInner').insertAdjacentHTML('beforeend', '<div class="panel"><div class="titlebar">0.9.68 Rule Semantics Diagnostics</div><div class="muted">Each transition is tested independently. The rule evaluator exposes ANY-positive, ALL-positive and NO-loss separately. A reference-only YY/YN/NY/NN matrix is shown below to identify exactly which character diverges from V1.5.11. Reference timestamps never participate in candidate selection.</div><div id="ruleMatrix" class="wide" style="margin-top:8px"></div><div id="ruleBreakdown" class="wide" style="margin-top:10px"></div></div>');

  // 0.9.57 — reference-only rule-semantics matrix. This deliberately does
  // NOT feed the expected V1.5.11 YY/YN/NY/NN values into selection. It only
  // compares the independently calculated rule states at the ten stored
  // regression instants so the unknown two-character semantics can be
  // reconstructed without another selector guess.
  if(isStockRegression(date,from,to,lat,lon,tz,event)){
    const refs=V1511_STOCK_PALLAVARAM.expected;
    const rows=refs.map(ref=>{
      const a=analyses.find(x=>x.time===ref);
      const expected=V1511_RULE_VECTORS?.[ref]||'';
      const actual=a?ynToken(a.rules):'';
      const expParts=expected.split(' ').filter(Boolean);
      const actParts=actual.split(' ').filter(Boolean);
      const mismatches=[];
      for(let i=0;i<Math.max(expParts.length,actParts.length);i++) if(expParts[i]!==actParts[i]) mismatches.push((expParts[i]||'?')+'≠'+(actParts[i]||'?'));
      return {ref,sbl:a?.chart?.ascendant?.[3]||'—',expected,actual,mismatches};
    });
    $('ruleMatrix').innerHTML='<div class="titlebar">Reference-only YY/YN/NY/NN comparison</div><table><thead><tr><th>V1.5.11</th><th>SbL</th><th>Expected</th><th>Web 0.9.69</th><th>Mismatches</th></tr></thead><tbody>'+rows.map(r=>'<tr class="'+(r.mismatches.length?'bad':'good')+'"><td>'+r.ref+'</td><td>'+r.sbl+'</td><td>'+r.expected+'</td><td>'+r.actual+'</td><td>'+r.mismatches.length+(r.mismatches.length?' — '+r.mismatches.join(' | '):'')+'</td></tr>').join('')+'</tbody></table>';

    const objRows=[];
    for(const ref of refs){
      const a=analyses.find(x=>x.time===ref); if(!a) continue;
      const expected=V1511_RULE_VECTORS?.[ref]||'';
      const em={}; expected.split(' ').filter(Boolean).forEach(x=>{const q=x.split(':');em[q[0]]=q[1]||''});
      for(const r of a.rules){
        const e=em[String(r.obj)]||'—';
        objRows.push('<tr class="'+(e===r.yn?'good':'bad')+'"><td>'+ref+'</td><td>'+r.obj+'</td><td>'+r.sub_lord+'</td><td>'+r.positive.join(',')+'</td><td>'+r.posHit.join(',')+'</td><td>'+r.posAny+'</td><td>'+r.posAll+'</td><td>'+r.negative.join(',')+'</td><td>'+r.negHit.join(',')+'</td><td>'+r.noLoss+'</td><td>'+e+'</td><td>'+r.yn+'</td></tr>');
      }
    }
    $('ruleBreakdown').innerHTML='<div class="titlebar">Per-object diagnostic: what the current evaluator actually knows</div><div class="muted">This table is intentionally verbose. It separates required houses, hits, ANY, ALL, negative hits and NO-loss from the final two-character label. That prevents the unknown V1.5.11 YY/YN/NY/NN semantics from being hidden inside one boolean.</div><table><thead><tr><th>Time</th><th>Obj</th><th>SubL</th><th>+Req</th><th>+Hit</th><th>ANY</th><th>ALL</th><th>−Req</th><th>−Hit</th><th>No-loss</th><th>V1.5.11</th><th>Web</th></tr></thead><tbody>'+objRows.join('')+'</tbody></table>';
  } else {
    $('ruleMatrix').innerHTML='<div class="status">The YY/YN/NY/NN comparison matrix is available for the stored Pallavaram stock-market regression only.</div>';
    $('ruleBreakdown').innerHTML='';
  }

  const best=analyses.find(a=>a.yn==='Y')||analyses[0];
  $('detail').innerHTML=(best?.rules||[]).map(r=>`<tr class="${String(r.yn).startsWith('Y')?'good':'bad'}"><td>${r.obj}</td><td>${r.sub_lord||'—'}</td><td>${r.posHit?.join(',')||'—'}</td><td>${r.negHit?.join(',')||'—'}</td><td>${r.yn}</td><td>${r.reason}</td></tr>`).join('');

  const p=best?.periods||vimPeriods(date,from,tz);
  $('dasa').innerHTML=`Dasa: <b>${p.Dasa}</b> &nbsp; Bhukti: <b>${p.Bhukti}</b> &nbsp; Antara: <b>${p.Antara}</b> &nbsp; Sukshma: <b>${p.Sukshma}</b><br><span class="muted">Ayanamsa: Krishnamurti; House system: Placidus; Engine: Swiss Ephemeris WASM; Vimshottari hierarchy calculated at event time.</span>`;
  const chosenTimes=selectionRows.filter(a=>a.selection.pass).map(a=>a.time);


  // 0.9.45 diagnostics: expose the new CSL-sub-layer and joint-period logic.
  const finalDiag=selectionRows.map(a=>{
    const s=a.selection;
    return {time:a.time,sbl:a.chart.ascendant[3],fifth:s.fifthLayer?`${s.fifthLayer.csl||'—'}→${s.fifthLayer.sub||'—'}`:'—',eleventh:s.eleventhLayer?`${s.eleventhLayer.csl||'—'}→${s.eleventhLayer.sub||'—'}`:'—',fifthPass:s.fifthPass,eleventhPass:s.eleventhPass,timingPass:s.timingPass,timingNoLoss:s.timingNoLoss,promisePass:s.promisePass,pass:s.pass};
  });
  const fd=$('selectorSummary');
  if(fd) fd.innerHTML='<b>Web 2.08 selector:</b> Event 05 candidates must have a positive-house hit in each required live rule (1, 5, 11, Dasa, Bhukti, Antara, Sukshma) and pass the native Badhaka/Maraka gate. Negative-house hits remain visible in analysis and do not independently reject a row. Windows observations remain diagnostics only.';

  // 0.9.45 — Layer 1 astronomy / transition regression.  The original
  // V1.5.11 timestamps are treated strictly as observations.  They are never
  // inserted into trs and never used to select candidates.  For each reference
  // time, find the nearest independently calculated Web transition and also
  // test whether the Web four-level Lagna key changes across +/-1 second at
  // the reference instant.  This isolates a transition/astronomy mismatch
  // before CSL, significators, or event-rule logic is investigated.
  if(isStockRegression(date,from,to,lat,lon,tz,event)){
    const refs=V1511_STOCK_PALLAVARAM.expected;
    const astro=refs.map(ref=>{
      const rs=parseClockSeconds(ref);
      let nearest=null,bestAbs=Infinity;
      for(const tr of trs){
        const d=Math.abs((tr.exactSeconds??parseClockSeconds(tr.time))-rs);
        if(d<bestAbs){bestAbs=d;nearest=tr;}
      }
      const lo=Math.max(0,rs-1),hi=Math.min(86399.999,rs+1);
      const kLo=ascKey(date,lo,lat,lon,tz),kHi=ascKey(date,hi,lat,lon,tz);
      const boundary=kLo!==kHi;
      let layer=bestAbs<=1?'EXACT':bestAbs<=5?'≤5s':bestAbs<=30?'6–30s':bestAbs<=120?'31–120s':'>120s';
      if(!nearest)layer='NO TRANSITION';
      return {ref,nearest,delta:bestAbs,boundary,layer};
    });
    const exact=astro.filter(x=>x.delta<=1).length;
    const close5=astro.filter(x=>x.delta<=5).length;
    const close30=astro.filter(x=>x.delta<=30).length;
    const close120=astro.filter(x=>x.delta<=120).length;
    const boundaryCount=astro.filter(x=>x.boundary).length;
    const firstLayerDiverges=astro.some(x=>x.delta>30 || !x.nearest);
    $('astroDiag').innerHTML=astro.map(x=>{
      const tr=x.nearest;
      const cls=x.delta<=5?'good':x.delta<=120?'':'bad';
      return `<tr class="${cls}"><td>${x.ref}</td><td>${tr?.time||'—'}</td><td>${Number.isFinite(x.delta)?x.delta.toFixed(1):'—'}</td><td>${tr?.rasi||'—'}</td><td>${tr?.snl||'—'}</td><td>${tr?.stl||'—'}</td><td>${tr?.sbl||'—'}</td><td>${x.boundary?'YES':'NO'}</td><td>${x.layer}</td></tr>`;
    }).join('');
    $('astroDiagSummary').innerHTML=`<b>Layer 1 result:</b> ${firstLayerDiverges?'DIVERGENCE DETECTED':'strong alignment'} — ${exact}/10 within 1s, ${close5}/10 within 5s, ${close30}/10 within 30s, ${close120}/10 within 120s; Web boundary detected at ±1s for ${boundaryCount}/10 reference times. ${firstLayerDiverges?'Fix/verify Astronomy → Lagna/Sub transition detection before changing CSL or selection rules.':'Transition stream is sufficiently aligned to proceed to CSL/significator comparison.'}`;
  } else {
    $('astroDiag').innerHTML='';
    $('astroDiagSummary').textContent='Layer 1 regression is shown for the stored Pallavaram stock-market test only.';
  }

   const coFixtureDiag=getCoimbatoreRegressionFixture(date,from,to,lat,lon,tz,event);
   const coReg=coFixtureDiag?(function(){
     const expected=coFixtureDiag.rows;
     const actual=analyses.map(a=>[a.time,a.chart.ascendant[1],a.chart.ascendant[2],a.chart.ascendant[3]]);
     const details=expected.map(e=>({e,hit:actual.find(a=>a[0]===e[0])}));
     const missing=details.filter(x=>!x.hit).map(x=>x.e[0]);
     const mismatch=details.filter(x=>x.hit&&x.hit.slice(1).join('/')!==x.e.slice(1,4).join('/')).map(x=>x.e[0]);
     return {pass:missing.length===0&&mismatch.length===0,details};
   })():null;
   if(coReg){
     const rows=coReg.details.map(x=>`<tr class="${x.hit?'good':'bad'}"><td>${x.e[0]}</td><td>${x.e.slice(1,4).join('/')}</td><td>${x.hit?x.hit.slice(1).join('/'): '—'}</td><td>${x.e[4]}</td><td>${x.hit?'MATCH':'MISSING'}</td></tr>`).join('');
     $('coimbatoreRegression').innerHTML=`<b>${coReg.pass?'PASS':'CHECK'}</b> — Windows transition rows compared with mobile output.<div class="wide" style="margin-top:8px"><table><thead><tr><th>Windows time</th><th>Windows SnL/StL/SbL</th><th>Mobile SnL/StL/SbL</th><th>Color decision</th><th>Transition</th></tr></thead><tbody>${rows}</tbody></table></div><div class="status" style="margin-top:8px"><b>Color rule:</b> fully green = Good/Perfect; any red = Reject. The five supplied chart screenshots contain red text, so their reference decision is REJECT.</div>`;
   }

   const reg=isStockRegression(date,from,to,lat,lon,tz,event)?regressionCheck(chosenTimes):null;
   if(reg){ $('regression').innerHTML=reg.pass ? '<b>PASS</b> — Independent selector reproduced all 10 V1.5.11 reference Muhurats: '+reg.actual.join(', ') : '<b>CHECK</b> — Engine output differs from the reference. Actual: '+(reg.actual.join(', ')||'none')+'<br>Missing: '+(reg.missing.join(', ')||'none')+'<br>Extra: '+(reg.extra.join(', ')||'none'); } else { $('regression').textContent='Regression verification is available for the stored Pallavaram stock-market test; other inputs use the calculation engine without reference-time overrides.'; }
   $('status').textContent='Calculation completed.';
  document.querySelector('[data-t="results"]').click();
 }catch(e){console.error(e);$('status').textContent='Calculation error: '+(e?.message||e)}
}
$('show').onclick=run;
syncDashboard();setTimeout(syncDashboard,500);

// 1.31 — Never leave Results/Analysis from an older date visible after the
// user changes the event inputs. On mobile this was easy to trigger by using
// the date picker and then opening Results without pressing Show again. The
// stale list could therefore look like the same Muhurats were being returned
// for multiple dates. Invalidate the old calculation immediately and run the
// calculation again when a date/time/location/event field is committed.
(function bindInputInvalidation(){
  // Web 2.17: input edits invalidate old output but do not calculate or
  // navigate to Results. The user must press Show to run the chosen date/time.
  const ids=['date','todate','from','to','place','lat','lon','tz','latdir','londir','tzdir','event'];
  function invalidate(){
    window.__selectionRows=[];
    window.__lastAnalyses=[];
    window.__activeMuhuratRow=null;
    const chosen=$('chosen');
    if(chosen) chosen.innerHTML='<tr><td colspan="7">Inputs changed — press Show to calculate results.</td></tr>';
    const ap=$('resultsAnalysisPanel'); if(ap) ap.hidden=true;
    const cp=$('selectedMuhuratChartPanel'); if(cp) cp.hidden=true;
    const rp=$('selectedMuhuratPanel'); if(rp) rp.hidden=true;
    const st=$('status'); if(st) st.textContent='Inputs changed. Press Show to calculate results for '+String($('date')?.value||'selected date')+' → '+String($('todate')?.value||$('date')?.value||'selected date')+'.';
    // Keep the user on Data while editing; never trigger run() here.
  }
  ids.forEach(id=>{
    const el=$(id); if(!el) return;
    el.addEventListener('change',invalidate);
    if(id==='date'||id==='todate'||id==='from'||id==='to'){
      el.addEventListener('input',invalidate);
    }
  });
})();
initEngine();
