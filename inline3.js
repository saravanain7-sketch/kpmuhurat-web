
(function(){
  
// Web 2.12: compact railway-time control; chart is always South Indian style.
(function bindChartControls215(){
  const timeInput=$('chosenChartTime');
  function activeRow(){
    return window.__activeMuhuratRow ||
      (window.__selectionRows||[]).find(r=>r.selection?.pass) || null;
  }
  function refreshAtTime(value){
    if(!timeInput) return;
    const t=String(value||'').trim();
    if(!/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t)){
      timeInput.setCustomValidity('Enter time as HH:MM:SS, for example 16:18:22.');
      timeInput.reportValidity();
      return;
    }
    timeInput.setCustomValidity('');
    const base=activeRow();
    if(!base){
      const status=$('status');
      if(status) status.textContent='No calculated Muhurat is available. Set the date/time in Data and press Show first.';
      return;
    }
    // Clone the chosen row with the user-entered time. Recalculate the chart,
    // planetary periods and Analysis at this exact date/time.
    const row={...base,date:base.date||$('date').value,time:t};
    window.__activeMuhuratRow=row;
    renderResultsAnalysis(row);
    const analysisPanel=$('resultsAnalysisPanel');
    if(analysisPanel){analysisPanel.hidden=false;analysisPanel.style.display='block';}
    const src=$('selectedMuhuratChartOnly');
    const chartTab=$('chartTabContent');
    if(src&&chartTab&&src.innerHTML.trim()) chartTab.innerHTML=src.innerHTML;
    const status=$('status');
    if(status) status.textContent='Analysis and chart refreshed for '+row.date+' '+t+'.';
  }
  if(timeInput){
    timeInput.addEventListener('change',()=>refreshAtTime(timeInput.value));
    timeInput.addEventListener('keydown',ev=>{
      if(ev.key==='Enter'){ev.preventDefault();refreshAtTime(timeInput.value);timeInput.blur();}
    });
    timeInput.addEventListener('blur',()=>{
      if(timeInput.value.trim()) refreshAtTime(timeInput.value);
    });
  }
})();
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js?v=2.30').catch(function(e){console.warn('SW registration failed',e);}); }
  var b=document.getElementById('install');
  var deferred=null;
  function updateInstallState(){
    var standalone=window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
    if(standalone){ if(b)b.hidden=true; return; }
    if(b)b.hidden=false;
  }
  updateInstallState();
  window.addEventListener('beforeinstallprompt',function(e){
    e.preventDefault();
    deferred=e;
    if(b){b.hidden=false;b.disabled=false;b.textContent='Install app';}
  });
  window.addEventListener('appinstalled',function(){
    deferred=null;
    if(b){b.hidden=true;}
  });
  if(b)b.onclick=async function(){
    if(deferred){
      var p=deferred;
      deferred=null;
      try{await p.prompt(); await p.userChoice;}catch(e){console.warn('Install prompt failed',e);}
      updateInstallState();
      return;
    }
    alert('Install is available from Chrome menu ⋮ → Install app (or Add to Home screen). If the button still shows no prompt, refresh the page once so the new PWA manifest and service worker can load.');
  };
})();
