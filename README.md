# KPMuhurat Web 0.9.76

Mobile/PWA reconstruction of KPMuhurat V1.5.11 based on the supplied original runtime data, event rules, place database, screenshots and regression observations.

## Changes in 0.9.76
- Fixes the visible header version so it no longer displays 0.9.74.
- Uses a new service-worker cache namespace and network-first loading for index.html to prevent stale GitHub Pages/PWA versions from remaining visible.
- Keeps normal **Results** focused on live calculated Muhurat output.
- Moves the **09-Apr-2022 and 10-Apr-2022 source-evidence panels inside Advanced Diagnostics**; they no longer appear in the normal Results stream.
- Prevents repeated Show calculations from duplicating those source-evidence panels.
- Includes `manifest.webmanifest` and `sw.js` for GitHub Pages PWA installation/caching.
- Preserves the live astronomy/KP calculation layer and keeps supplied V1.5.11 reference timestamps/Y-N observations verification-only.
- Retains the 0.9.74 null-safety fix.

## Verification scope
The build does not claim byte-for-byte equivalence to the original V1.5.11 event-selection engine unless independently verified. The supplied source evidence remains separated from live selection.
