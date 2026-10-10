const CACHE_NAME = "kp-muhurat-notes-2026-10-09-v2-ui";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./kp-icon-192.png", "./kp-icon-512.png",
  "./reference-timings-2026-10-09-01.jpg",
  "./reference-timings-2026-10-09-02.jpg",
  "./reference-timings-2026-10-09-03.jpg",
  "./reference-timings-2026-10-09-04.jpg",
  "./reference-timings-2026-10-09-05.jpg",
  "./reference-timings-2026-10-09-06.jpg",
  "./reference-timings-2026-10-09-07.jpg"
];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; const url = new URL(event.request.url); if (url.origin !== self.location.origin) return; if (event.request.mode === "navigate") { event.respondWith(fetch(event.request).then(response => { if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy)); } return response; }).catch(() => caches.match("./index.html"))); return; } event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); } return response; }).catch(() => caches.match("./index.html")))); });
