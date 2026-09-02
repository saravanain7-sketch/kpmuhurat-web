# KPMuhurat Web 0.9.13

This build continues the 0.9.12 reconstruction and fixes the Placidus cusp-array indexing issue observed in the browser WASM runtime. The chart code detects whether the returned cusp array is 0-based or 1-based by comparing its first entries with the returned Ascendant, then maps houses 1–12 accordingly.

The Pallavaram V1.5.11 stock-market fixture remains verification-only; it does not hardcode the selected Muhurat times.

Test case:
- Date: 08/04/2022
- Time: 09:00–22:00
- Place: Pallavaram, Tamil Nadu, India
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: 05:30 East of UT
- Event: 05. Speculative gain in Stock Market

Important: the build should be considered regression-correct only when the in-app verification panel reports PASS. The transition timing engine is intended to preserve the V1.5.11 boundary times; exact Y/N/event-rule equivalence is still subject to the regression panel.
