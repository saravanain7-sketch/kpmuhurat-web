# KP Muhurat V1.5.11 — Web 1.99

## Windows-style detailed chart enhancement

This build extends Web 1.98's exact-time South Indian chart without hardcoding Windows timestamps.

### Added
- Exact planetary degree within the sign in `DD:MM:SS` format.
- KP Star Lord, Sub Lord and Sub-Sub Lord for each displayed planet.
- Retrograde marker `R` for retrograde planets, calculated from the exact chart timestamp.
- Uranus (`Ur`) and Neptune (`Ne`) in the chart, matching the Windows V1.5.11 reference style.
- Rahu/Ketu retained from the native node calculation.
- Existing South Indian sign-fixed / house-rotating layout preserved.
- Existing exact selected-Muhurat timestamp remains authoritative.

### Regression fixture
- Coimbatore, Tamil Nadu
- 11:00:00 N, 76:58:00 E
- TZ 05:30:00 East of UT
- Krishnamurti ayanamsa
- Placidus
- Event 05 — Speculative gain in Stock Market
- 02-Oct-2026, 09:00–22:00

### Important
The detailed chart values are calculated live from the selected timestamp. Windows screenshots are validation evidence only; no Windows chart values are hardcoded into the calculation path.
