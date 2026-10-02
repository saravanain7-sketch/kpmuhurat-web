KP Muhurat V1.5.11 — Web 1.35

Purpose: independent, date-by-date reconstruction of the Windows V1.5.11 Muhurat analysis pipeline.

Changes from 1.34.1:
- Every transition found in the selected date/time range is analyzed independently.
- Removed the incorrect filter that discarded movable-sign Lagna transitions.
- Removed Coimbatore parity-status dependency from production calculation.
- General Muhurat Y/N selection follows the documented Badhaka/Maraka gate; event-specific CSL rules are retained for detailed event analysis.
- No stored Windows timing fixture is injected into production selection.
- Cache/service-worker version bumped to 1.35.

Reference: original Windows V1.5.11 executable/DLLs, events.txt, Settings.xml and MuhuratUserGuide.doc included under reference/windows-engine/.
