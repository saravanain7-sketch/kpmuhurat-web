# KPMuhurat V1.5.11 — Web 0.9.12

## Calculation-engine upgrade + regression verification

### Fix in this build
- Fixed the live **Show** calculation failure caused by the missing `near()` helper.
- Added runtime-safe Placidus cusp-array detection. The browser Swiss Ephemeris build can expose cusp arrays with a different index convention; Web 0.9.12 now detects the layout by matching cusp 1 with the returned Ascendant before converting to Krishnamurti sidereal longitude.
- This corrects the Lagna/cusp sub-lord calculation path without hard-coding the 10 regression result times.

### Engine
- Swiss Ephemeris WASM + Krishnamurti ayanamsa + Placidus houses.
- Fractional-second transition search with displayed whole-second times.
- Chart-relative house ownership.
- Reconstructed KP significator/CSL evaluation from the extracted V1.5.11 rule data.
- Recursive Vimshottari Dasa/Bhukti/Antara/Sukshma at event time.
- Pallavaram stock-market reference times are comparison data only; they are not injected into the calculation output.

### Regression fixture
The stored V1.5.11 Pallavaram stock-market reference is:
`09:07:31, 09:58:20, 10:36:01, 10:43:45, 11:09:30, 11:31:02, 11:38:52, 11:50:09, 11:59:28, 12:21:02`.

Regression PASS is shown only when the calculation-generated chosen list exactly matches those 10 times.

### Validation
- JavaScript syntax check: PASS.
- Live GitHub Pages WASM execution was not available in the build environment; use the Pallavaram test in Chrome to verify the runtime result.
