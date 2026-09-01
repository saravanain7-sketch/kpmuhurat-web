# KPMuhurat Web 0.8.1 — V1.5.11 Accuracy Regression Edition

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


## 0.8.1 — V1.5.11 screenshot regression stage 2
- House ownership is chart-relative (from cusp sign lords), matching the original UI's notation.
- Lagna/11th-house Y/N uses the complete CSL → Star Lord → Sub Lord chain, including conjunctions and node sign-lord representation.
- Muhurat selection uses the V1.5.11 pattern: Lagna baseline rule plus the event's 11th-house rule; the 5th-house event rule remains available for event analysis but does not gate the primary selector, consistent with the supplied V1.5.11 comparison screenshot.
- The 08-Apr-2022 Tirupati stock-market regression now targets the sub-level boundaries at 09:00, 09:01:22, 09:09:27, 09:16:41, 09:25:20, 09:33:08, 09:36:22, 09:45:39, 09:48:27 and 09:51:43, with 09:45:39 and 09:48:27 expected to qualify under this reconstructed V1.5.11 logic.


### 0.8.1 regression baseline
The supplied screenshots are used as a deterministic regression fixture for:
- Date: 08-Apr-2022
- Place: Tirupati; Andhra Pradesh; India
- Time: 09:00–22:00
- Event: 05. Speculative gain in Stock Market
- Expected Lagna transitions: 18
- Expected sub-level transitions: 127
- Expected chosen muhurats: 23
- First Analysis row: Lagna / Ju / +H 5,9,11 / −H —
- Second Analysis row: 11th House / Me / +H 5,6,11 / −H 8,12

The UI reports PASS only when the calculated transition count and chosen-muhurat sequence match this supplied screenshot baseline. This fixture is for regression validation; it is not a substitute for the original Windows calculation engine.

## 0.8.1 regression stage 3 — mobile screenshot matching
- Mobile header, tab bar, panels, labels, controls, PlaceSelect cards, Notes panel, and table typography are tuned against the newly supplied 10:08 Android screenshots.
- Horizontal table overflow is intentional and preserved to keep the full V1.5.11-style columns available on narrow screens.
- The deterministic Tirupati regression fixture remains unchanged; visual tuning does not alter calculation inputs or the existing 18 / 127 / 23 oracle.
