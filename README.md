# KP Muhurat V1.5.11 — Web 1.96

## Exact selected-Muhurat Analysis + Chart synchronization

Web 1.96 keeps the already-fixed Muhurat timing engine unchanged.

When a Chosen Muhurat row is selected, the selected row's **date + time** is now the authoritative calculation timestamp for both Analysis and Chart. The transition-probe chart stored on the selection row is never reused for the selected-row chart.

### Regression fixture
- Date: 02-10-2026
- From: 09:00
- To: 22:00
- Place: Coimbatore, Tamil Nadu
- Latitude: 11:00:00 N
- Longitude: 76:58:00 E
- Time zone: 05:30:00 East
- Ayanamsa: Krishnamurti
- House system: Placidus
- Event: 05. Speculative gain in Stock Market

### Web 1.96 changes
- Selected Muhurat lookup uses date + time, not time alone.
- Exact selected timestamp is recalculated for Analysis.
- Exact selected timestamp is recalculated for Chart.
- Chart renderer receives the exact recalculated chart instead of reusing `row.chart` from the transition probe.
- Analysis and Chart therefore share one exact selected timestamp.
- No Windows timestamps are hardcoded into the live selected-time calculation.
