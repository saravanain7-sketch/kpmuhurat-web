# KPMuhurat Web 0.9.8 — Exact Original Calculation Matching

Browser reconstruction of KPMuhurat V1.5.11 by Kanak Bosmia.

## Web 0.9.8 focus
- Exact Pallavaram regression coordinates used by the original V1.5.11 reference: **12:58:34 N, 80:11:01 E, UTC+05:30**.
- PlaceSelect/Search and the Data-tab **Find** button recognize Pallavaram and apply those exact coordinates before external geocoding.
- KP Lagna/Sub-level transition engine remains based on Krishnamurti ayanamsa + Placidus houses + Swiss Ephemeris WASM.
- KP significator calculation uses chart-relative house ownership, planet occupation, star-lord indications, and node sign-lord indications.
- A **KP Significator Verification** panel is included in Results for regression checking of Objects 1, 5 and 11.
- GPS behavior is unchanged: live device coordinates are kept exactly and are not snapped to a city.

## Pallavaram regression
For 08/04/2022, 09:00 onward, the exact reference coordinates reproduce the original Lagna/Sub-level transition sequence, including:
- 09:07:31 Ta / Ve / Mo / Ju
- 09:14:46 Ta / Ve / Mo / Sa
- 09:23:26 Ta / Ve / Mo / Me
- 09:31:16 Ta / Ve / Mo / Ke
- 09:34:30 Ta / Ve / Mo / Ve
- 09:43:47 Ta / Ve / Mo / Su
- 09:46:35 Ta / Ve / Ma / Ma
- 09:58:20 Ta / Ve / Ma / Ju
- 10:14:55 Ge / Me / Ma / Me
- 10:43:45 Ge / Me / Ra / Ra
- 11:09:30 Ge / Me / Ra / Me
- 11:42:18 Ge / Me / Ju / Ju
- 11:50:09 Ge / Me / Ju / Sa
- 11:59:28 Ge / Me / Ju / Me
- 12:21:02 Ge / Me / Ju / Su
- 14:35:40 Le / Su / Ke / Ke

These are regression targets, not a claim that every remaining V1.5.11 rule/pipeline is already byte-for-byte identical.
