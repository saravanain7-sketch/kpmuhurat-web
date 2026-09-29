# KPMuhurat Web 0.9.67

Reconstruction build based on the supplied KP Muhurat V1.5.11 evidence.

## 0.9.67 focus
- Preserves the working Swiss Ephemeris WASM astronomy/transition layer from 0.9.66.
- Keeps the reconstruction transit-only; no natal chart is used.
- Keeps the V1.5.11 source timestamps and Y/N observations verification-only; no hard-coded reference time is injected into candidate selection.
- Adds an Evidence-Calibrated Reason Score diagnostic for the live SnL → StL → SbL chain.
- The diagnostic exposes direct 5th/11th cusp SubL ownership, six-fold fruitful-house coverage, Star-Lord support, Sub-Lord support, ruling-planet overlap and 8/12 exposure.
- Adds regression calibration display for the stored Pallavaram 08-Apr-2022 fixture.
- The stored regression is recognized when the entered end time is either 15:00 (the original screenshot window) or 22:00 (the internal regression horizon).
- Does not claim byte-for-byte equivalence to V1.5.11 or claim that the final Y/N selector has been solved.

## Main regression input
- Date: 08-Apr-2022
- Place: Pallavaram, Tamil Nadu
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: +05:30
- Screenshot window: 09:00–15:00

## Calculation basis
- Krishnamurti ayanamsa
- Placidus houses
- Swiss Ephemeris WASM
- Transit-only reconstruction
