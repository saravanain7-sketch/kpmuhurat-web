# KPMuhurat Web 0.9.8 — Exact Original Calculation Matching

This revision keeps the Web 0.9.7 layout, PlaceSelect, custom location and GPS features, and fixes the V1.5.11 event-rule interpretation used by the stock-market analysis.

## Pallavaram regression reference
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: 05:30:00 East of UT
- Date: 08/04/2022
- Stock-market event: 05. Speculative gain in Stock Market

## Important calculation fix
The extracted V1.5.11 stock-market rules are interpreted as:
- Object 5: +H 2,5,6,11; -H 8,12
- Object 11: +H 2,5,6,11; -H 8,12

The verification panel now inspects the first time where Objects 1 and 11 are both Y, rather than the initial 09:00 row. This allows the Pallavaram reference at about 09:07 to be compared directly with the original KPMuhurat analysis.

The Lagna/Sub-level engine remains Swiss Ephemeris based with Krishnamurti ayanamsa and Placidus houses.

This is a regression build; complete byte-for-byte equivalence with the original Windows executable is not claimed until all original reference screenshots/runs are matched.
