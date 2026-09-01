# KPMuhurat Web 0.7.3 — GPS & Accuracy Edition

Browser reconstruction of **KP Muhurat V1.5.11** for GitHub Pages.

## What is improved in this build

- **High-accuracy GPS** button using the browser Geolocation API.
- GPS latitude/longitude are used directly by the Swiss Ephemeris chart calculation.
- GPS accuracy (metres) is displayed so the user can decide whether to recapture.
- Best-effort coordinate-based timezone lookup, with device-timezone fallback.
- Reverse geocoding to label the current place.
- **Worldwide PlaceSelect search** in addition to the embedded core city list.
- Mobile tables remain horizontally scrollable instead of cutting off the Reason/Analysis columns.
- Date → To date is now processed across multiple days; first/last-day time limits are respected.
- Existing **Krishnamurti ayanamsa + Placidus houses + Swiss Ephemeris** calculation path is retained.
- The extracted 80 event entries remain embedded in `index.html`.

## GitHub Pages

Upload the **contents** of this folder to the repository root and enable:

GitHub → Settings → Pages → Deploy from branch → `main` → `/ (root)`.

The site must be HTTPS for browser geolocation to work normally.

## GPS use

Tap **Use My GPS Location** and allow Chrome's location permission. The app does **not** request location automatically. The coordinates are inserted into the Latitude/Longitude fields and then used in the calculation.

When online, the build also uses:

- OpenStreetMap Nominatim for reverse/place search.
- TimeAPI.io for coordinate timezone lookup, with a device timezone fallback.

If you do not want those online lookups, you can still enter coordinates and timezone manually.

## Original place database status

The extraction report for the original MSI records **97,875 place rows**, but the current reconstruction package does not contain the original extracted SQLite place database file. Therefore this build does **not** claim byte-for-byte place-database parity. Instead, it retains the embedded city list and adds worldwide online place search plus GPS coordinates.

## Calculation accuracy status

The browser engine uses Swiss Ephemeris with Krishnamurti ayanamsa and Placidus houses. The current 2026-09-01 Coimbatore transition timings have been regression-checked against the supplied V1.5.11-style screenshots.

The event-rule data are extracted from the original MSI, but the original Windows source code is not included. Exact parity of every significator/CSL/Y-N edge case still requires regression testing against the Windows application.
