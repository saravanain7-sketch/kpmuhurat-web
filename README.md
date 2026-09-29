# KPMuhurat Web 0.9.68

Reconstruction of Windows KPMuhurat V1.5.11 as a static GitHub Pages web app.

## 0.9.68 focus
- Preserves the Swiss Ephemeris / Lagna-transition layer from 0.9.67.
- Preserves the 08-Apr-2022 Pallavaram regression fixture and all verification-only reference timestamps.
- Does not inject reference timestamps or Y/N values into candidate selection.
- Refines the live Reason-chain diagnostic to follow the original-style SnL -> StL -> SbL chain more closely.
- Corrects the `Asp=>` diagnostic: it now reports planets in the opposite house and that planet's six-fold significations, rather than returning only an opposite house number.
- Corrects the “X is sub lord of …” diagnostic to refer to the third-level SbL planet, separately from the current transit SBL's cusp ownership.
- Keeps the experimental structural score diagnostic-only; it is not claimed to be the original selector.

## Important
The exact V1.5.11 two-character Y/N selection algorithm is still not claimed as solved. This build is intended to narrow the reconstruction using the supplied screenshots and live structural relationships without hard-coded selections.
