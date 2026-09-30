KPMuhurat V1.5.11 Mobile/PWA — Build 1.05

This build changes the engine loader to prefer same-origin local Swiss Ephemeris files and only use CDN as a fallback. It also gives explicit engine loading/error status.

IMPORTANT: the current workspace did not contain the official @swisseph/browser WASM binary, so vendor/swisseph-browser.js and vendor/swisseph.wasm are intentionally not fabricated. The official package documents that await swe.init() loads swisseph.wasm from the same directory as the JavaScript bundle.

To make this build completely self-contained/offline, add the matching @swisseph/browser distribution files:
  vendor/swisseph-browser.js
  vendor/swisseph.wasm

Do not substitute another astronomy engine if Windows V1.5.11 parity is required.
