# KPMuhurat Web 0.9.61

Browser-hosted reconstruction of KPMuhurat V1.5.11 for GitHub Pages.

## 0.9.61 fix
The **Data → Place → Find** button now uses a direct mobile-safe click handler, exposes a fallback `window.kpFindPlace()` action, and keeps the existing PlaceSelect/Nominatim search path. Pallavaram remains resolved to the exact stored regression coordinates when that place name is entered.

No astronomy, transition, significator, event-rule, or regression-selection logic was changed in this fix.

Upload `index.html` to GitHub Pages. This is a reconstruction, not the original Windows executable/source.
