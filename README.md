# KPMuhurat Web 0.9.71

Mobile/PWA presentation refinement of the supplied KPMuhurat V1.5.11 reconstruction.

## What changed from 0.9.70
- Results page is now mobile-first: live result area stays at the top.
- V1.5.11 verification/reconstruction diagnostics are grouped inside one collapsed section.
- Diagnostic tables retain horizontal scrolling inside their own containers instead of widening the page.
- Reduced blank/overflow-looking diagnostic blocks on narrow Android screens.
- Preserved the live astronomy/transition layer and supplied original event/place/settings data.
- No stored V1.5.11 timestamps are injected into live selection.

## Important status
The final V1.5.11 event-selection equivalence is not claimed as solved. The original event-selection/B-M/Y-N implementation remains the next reconstruction target.

## Deployment
Upload the contents of `KPMuhurat_Web_0.9.71/` to GitHub Pages. The package is static and includes the PWA manifest and service worker.
