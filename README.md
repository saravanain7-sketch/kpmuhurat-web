# KPMuhurat Web 0.9.17

This build keeps the 0.9.16 KP boundary classification and mobile transition-scan optimization, and updates the significator/event-rule layer based on the V1.5.11 analysis behavior observed in the original software.

## 0.9.17 changes
- Keeps the corrected post-boundary sub-lord classification.
- Keeps the 15-second coarse transition scan with exact binary-search boundary refinement.
- Extends significator calculation through planet, star lord, sub lord and sub-lord star channel.
- Adds cuspal star/sub-lord interlink houses to the significator set.
- Treats the second rule house group as a reported negative connection rather than automatically forcing Y/N to N, matching the original stock-market analysis behavior where `+H 2,5,6,11` and `-H 8,12` can still be `Y`.
- No reference times are injected into the calculation engine.

## Regression test
Use:
- Date: 2022-04-08
- Time: 09:00–22:00
- Place: Pallavaram, Tamil Nadu, India
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: 05:30 East of UT
- Event: 05. Speculative gain in Stock Market

The regression panel compares the engine output with the ten recorded V1.5.11 reference times. PASS is required before claiming byte-for-byte behavioral equivalence for this fixture.
