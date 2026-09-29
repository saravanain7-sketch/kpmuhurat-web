# KPMuhurat Web 0.9.74

Mobile/PWA reconstruction of KPMuhurat V1.5.11.

## 0.9.74 fix

- Fixed the runtime `Cannot read properties of null (reading 'csl')` error shown after pressing **Show**.
- The current 0.9.73 selection layer intentionally leaves the experimental fifth/eleventh-period structures disabled (`null`); the diagnostic renderer now handles those fields safely instead of dereferencing `.csl`.
- Swiss Ephemeris / KP transition calculations and the current Baadhaka/Maaraka selection layer are otherwise unchanged.
- Stored V1.5.11 reference timestamps remain verification-only and are not injected into live selection.

## Important

This remains a reconstruction, not the original executable/source. Exact V1.5.11 event-selection equivalence is still being reconstructed from the supplied runtime, event rules, user guide, and regression screenshots.
