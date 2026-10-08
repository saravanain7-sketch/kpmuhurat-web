# KP Muhurat V1.5.11 — Web 1.95

## Exact Selected-Muhurat Analysis + Chart

Web 1.95 keeps the already-correct Muhurat transition/selection engine unchanged.

When a user selects a Chosen Muhurat, the Results Analysis and Windows-style chart are recalculated from the exact displayed date/time. The internal transition probe chart is no longer reused for the selected event instant.

Architecture:
- Muhurat transition timing remains native-reconstructed and unchanged.
- Selected row date/time is the single source of truth.
- Analysis uses the exact selected timestamp.
- Chart uses the exact selected timestamp.
- Dasa/Bhukti/Antara/Sukshma are calculated at the exact selected timestamp.
- No Windows timestamps are injected into live selection.
