const CACHE='kpmuhurat-0.9.69';
const CORE=['./','./index.html','./manifest.webmanifest','./data/places.json','./data/events.txt','./data/Settings.xml','./LICENSE.txt','./SHA256SUMS.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();if(new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match('./index.html'))));});
