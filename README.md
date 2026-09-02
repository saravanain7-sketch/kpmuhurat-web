# KPMuhurat V1.5.11 Web 0.9.6 — Exact Engine Regression Build

This build keeps the Web 0.9.5 layout and live-GPS behavior, and changes the calculation engine only.

## Engine fixes
- Corrected KP chart-relative house ownership. The lord of the Ascendant sign is treated as house 1, then houses advance by sign.
- Corrected the extracted V1.5.11 two-group rule parser. Example stock-market rule `5:4:2:5:6:11:2:8:12` is now interpreted as required houses `5,6,11` and prohibited houses `8,12`, rather than mixing all values into one group.
- Applied the same generic required/prohibited Y/N evaluation used by the validated Python reconstruction.
- Changed Lagna transition scanning from 15-second sampling to 5-second sampling, matching the validated reference engine before binary search.
- Preserved the existing page layout and GPS functionality.

## Important
This is a regression build, not yet a claim of byte-for-byte equivalence with the original Windows executable. The extracted MSI resources confirm the original event rules/settings, but the original source code is unavailable. Final 100% validation must use identical input values in both programs and compare every displayed transition, CSL/significator result, Y/N result, Dasa/Bhukti/Antara/Sukshma value, and chosen Muhurat.
