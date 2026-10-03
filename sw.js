const CACHE = 'kpmuhurat-v1.45-kpicon2';
const SHELL = ['./','./index.html', './KPMuhurat_V1.5.11_Web_1.45.html','./manifest.webmanifest','./kp-icon-180.png','./kp-icon-192.png','./kp-icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('kpmuhurat-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
