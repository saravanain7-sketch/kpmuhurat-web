# KPMuhurat V1.5.11 — Web 0.9.8

Exact-calculation regression build focused on the Pallavaram reference location, Lagna/sub-level transition timing, and KP significator handling.

## Pallavaram regression reference
- Latitude: 12:58:34.000 N
- Longitude: 80:11:01.000 E
- Time zone: 05:30:00 East of UT
- Date: 08/04/2022
- Stock-market event: 05. Speculative gain in Stock Market

The transition search now preserves fractional seconds during the binary search and rounds the final displayed transition to the nearest second, avoiding the previous one-second truncation drift.

The build also contains an exact Pallavaram lookup fallback so the regression location is available even if external geocoding is unavailable. GPS behavior remains unchanged: live device coordinates are used directly.

The KP significator engine uses chart-relative house ownership and includes occupied/owned houses plus star-lord indications and node sign-lord indications.

This remains a web reconstruction, not the original executable/source code; equivalence must continue to be regression-tested against KPMuhurat V1.5.11 screenshots/results.
