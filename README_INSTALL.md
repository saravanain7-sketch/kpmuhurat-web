# KPMuhurat V1.5.11 Web 1.43 — Installable PWA

## Contents
- `index.html` — Web 1.43 application
- `KPMuhurat_V1.5.11_Web_1.43.html` — same application source
- `manifest.webmanifest` — PWA manifest
- `sw.js` — service worker/cache
- `icon-192.png`, `icon-512.png` — app icons
- `VERSION.txt` — build information

## Install
1. Host this folder from an HTTPS web origin (or localhost for development).
2. Open `index.html` in Chrome.
3. Use Chrome's Install/Add to Home screen option when it is offered.

A ZIP file itself is not directly installable as a PWA; the files must be served by a web origin. Chrome's available install UI can vary by browser/version and current installation state.

## Parity note
Web 1.43 is a calculation-engine revision from Web 1.42. It does not hard-code the 02-Oct-2026 result list. The revision restores the recovered native Vedic-conjunction semantics (same Rasi, <30°) while retaining the recovered `nodeRuleFilterFlag=true` and planet-ID special-aspect mapping.

The exact Windows timing/selection parity still needs live regression confirmation after running this build against the Windows fixture. Do not treat the build as fully parity-certified until the 02-Oct-2026 result list and the one-second boundary timing have both been checked.
