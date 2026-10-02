# KPMuhurat V1.5.11 Web 1.42 — Installable PWA

This package keeps the supplied Web 1.42 calculation/UI build and adds the files needed to install it as a PWA.

## Important
Open the app from an **HTTPS URL** (for example GitHub Pages), not from a `content://` file opened from Android Downloads. Chrome's PWA installation flow requires a web app origin; a downloaded HTML file is not the same thing as a hosted PWA.

## Files
- `index.html` — Web 1.42 application
- `manifest.webmanifest` — PWA manifest
- `sw.js` — service worker with a versioned 1.42 cache
- `icon-192.png`, `icon-512.png` — install icons

The current Web 1.42 build still loads Swiss Ephemeris browser/WASM from the CDN URLs already present in the application. Therefore this package provides PWA installation and shell caching, but it is **not a fully self-contained offline astronomy bundle**.

## GitHub Pages
1. Create/open a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Enable **Settings → Pages → Deploy from branch → main → / (root)**.
4. Open the HTTPS Pages URL in Chrome on Android.
5. Chrome menu ⋮ → **Install app** (or **Add to Home screen**).
6. Launch KPMuhurat from the Android home screen.

## Local Windows test
Run a local HTTP server from this folder, then open the shown localhost URL in Chrome. Example with Python:

`python -m http.server 8080`

Then open `http://localhost:8080/`.

## Calculation note
This packaging change does not alter the V1.5.11 calculation logic. Web 1.42 remains the current reconstruction build and should continue to be regression-tested against the Windows V1.5.11 results.
