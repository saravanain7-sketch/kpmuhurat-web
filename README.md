# KPMuhurat Web 0.7.2

This version keeps the 80 extracted event rules embedded in `index.html` and replaces the provisional alternating Y/N logic with a browser-side KP calculation pipeline.

## Calculation engine
- Swiss Ephemeris WebAssembly (`swisseph-wasm` v0.1.0) loaded from a pinned jsDelivr URL.
- Krishnamurti ayanamsa.
- Placidus houses.
- KP sign/star/sub-lord calculation.
- Planetary significators and extracted event-rule interpretation.
- Lagna transition detection and event-rule Y/N reasons.

## GitHub Pages
Replace the existing `index.html` with the supplied `index.html`. Keep your existing `manifest.webmanifest`, `.nojekyll`, `404.html`, and other repository files.

The browser downloads the Swiss Ephemeris WASM/data dependency on first load, so the first calculation can take a few seconds.

## Important
This is still a reconstruction, not the original Windows executable/source. The extracted MSI report explicitly says exact equivalence requires regression testing against KPMuhurat V1.5.11.
