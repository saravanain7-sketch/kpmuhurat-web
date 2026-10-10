# KP Muhurat Web 1.64 — Analysis-isolated build

## Change in 1.64
- Explicitly separates the native-style Lagna Sub-Lord Badhaka/Maraka selection gate from the expanded 12-house Analysis display.
- Object 1–12 and Dasa/Bhukti/Antara/Sukshma Analysis rows are diagnostics/display only; they are not passed into the selector.
- Preserves the Web 1.63 fractional transition boundary state handling and display truncation. No global +1-second adjustment.
- No Windows timestamps are injected into live selection.

## Validation status
- JavaScript syntax is checked for the generated build.
- Exact Windows parity for the 10-Oct-2026 selected list still requires running this build against the Windows V1.5.11 reference. The code change isolates selection from expanded Analysis but does not claim the extra-row discrepancy is fully resolved without that regression run.

## GitHub Pages
Use `index.html` to open `KPMuhurat_V1.5.11_Web_1.64_AnalysisIsolated.html`.
