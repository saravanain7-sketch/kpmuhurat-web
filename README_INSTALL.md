# KP Muhurat V1.5.11 — Web 1.78

Focused continuation of Web 1.77.

## Web 1.78 fix
- Prevents `NaN` transition seconds from reaching `timeFromSeconds()` through JavaScript `??` semantics.
- Uses finite-value fallback to the displayed transition time when `exactSeconds` is not finite.
- Makes clock parsing strict enough to expose invalid values instead of silently converting them to zero.
- Validates the hour/minute/second passed to the Swiss-Ephemeris Julian-day call.
- Keeps the reconstructed native transition architecture unchanged: 60-second scan and 10-ms (100,000 .NET tick) boundary refinement.
- No UI redesign and no date-specific hardcoding.

## Test fixture
05/10/2026, 09:00–22:00, 11:00:00 N, 76:58:00 E, +05:30, Krishnamurti, Placidus, Event 05.

Then return to the exact 02/10/2026 Windows V1.5.11 parity fixture and compare the 15 selected Muhurats, including 10:33:20 Ma/Me/Me.
