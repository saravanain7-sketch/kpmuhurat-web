# KPMuhurat V1.5.11 — Web 0.9.12

Calculation-engine upgrade and regression-verification build.

## Changes from Web 0.9.11
- Corrected Swiss Ephemeris browser house-cusp indexing to use the documented 1–12 cusp slots.
- Corrected the extracted V1.5.11 rule interpretation so the first value after the rule type is treated as a house, not discarded as a marker.
- Added type-aware handling for single-group and two-group extracted rule forms.
- Removed the 0.9.11 Stock Market chosen-time override from the calculation path.
- Muhurat Y/N is now produced by the selected event's extracted rule objects.
- Added an explicit Pallavaram regression-verification panel. The reference times are used for verification only, never to override calculated results.
- Kept the existing UI, GPS, PlaceSelect, Notes and mobile layout unchanged.

## Regression fixture
- Date: 2022-04-08
- Place: Pallavaram, Tamil Nadu
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: 05:30:00 East of UT
- Event: 05. Speculative gain in Stock Market
- Reference Muhurats: 09:07:31, 09:58:20, 10:36:01, 10:43:45, 11:09:30, 11:31:02, 11:38:52, 11:50:09, 11:59:28, 12:21:02

## Important
This remains a browser reconstruction, not the original executable/source code. A PASS means the web engine reproduces the stored regression fixture for this test case; it does not establish byte-for-byte equivalence with the original Windows binary.
