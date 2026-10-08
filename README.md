# KP Muhurat V1.5.11 — Web 2.00

## Expanded 12-House Analysis (display-only)

This build keeps the existing V1.5.11 Muhurat selection engine unchanged and expands the Results Analysis table to show CSL analysis for Objects 1 through 12, followed by Dasa, Bhukti, Antara and Sukshma.

### Critical parity rule
- **Muhurat timing/selection is unchanged.**
- Objects 2, 3, 4, 6, 7, 8, 9, 10 and 12 are diagnostic-only rows.
- They are never fed back into transition discovery, eligibility, Badhaka/Maraka filtering, or selected timestamps.
- Event 05's original selection rules remain authoritative: Objects 1, 5, 11 + Dasa/Bhukti/Antara/Sukshma.
- Selected Chart and Analysis continue to recalculate from the exact displayed Muhurat timestamp.

### Regression fixture
- Coimbatore, Tamil Nadu
- Latitude 11:00:00 N
- Longitude 76:58:00 E
- TZ 05:30:00 East of UT
- Krishnamurti ayanamsa
- Placidus
- Event 05 — Speculative gain in Stock Market
- 02-Oct-2026, 09:00–22:00

Windows timestamps remain validation evidence only; no Windows timestamps are injected into the live selector.
