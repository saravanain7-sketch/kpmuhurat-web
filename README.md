# KPMuhurat Web 1.62 — KP Muhurat V1.5.11

Native Node Analysis parity plus date-dependent transition timing precision.

## Native Node Analysis
- `nodeRuleFilterFlag = true` from the native static constructor.
- Native Rahu/Ketu node branch.
- Native same-Rasi conjunction with strict shortest-angle `< 30°`.
- Native special-aspect table and reverse target-Rasi matching.
- Native stop-after-conjunction / stop-after-special-aspect behavior.
- Native `GetOccRasiLord()` returning `vPlanetInfo[planetId].rasiLordId`.
- Native direct `GetPlanetSgnf()` semantics and existing native B/M path retained.

## Timing precision
- Restores the date-dependent nutation-in-longitude correction recovered in Web 1.58 for the Lagna transition solver.
- No Windows timestamps are injected into live selection.

Build: Web 1.62


Web 1.62 timing correction: native-style transition display now truncates the fractional boundary second (floor) instead of ceiling it. This targets the observed +1 second rows while preserving the fractional boundary solver, native node analysis, B/M logic, and non-hardcoded live selection.
