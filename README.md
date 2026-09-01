# KPMuhurat Web 0.7.3

Browser-hosted reconstruction of the extracted KPMuhurat V1.5.11 resources for GitHub Pages.

## 0.7.3 changes
- Chosen Muhurats now contain **Y rows only**; N rows remain in Analysis.
- Added a functional embedded PlaceSelect city search with automatic coordinate/time-zone fill.
- Improved rule-detail output with significators, required-house hits and prohibited-house hits.
- Fixed the empty positive-hit test in the rule evaluator.
- Preserved the embedded extracted event rules (80 entries).
- Kept Krishnamurti ayanamsa and Placidus house calculation.
- Improved mobile table usability while retaining horizontal scrolling for wide tables.

## Important
The source extraction report identifies the original MSI resources, including the place database and calculation/analysis assemblies. This web package is a reconstruction, not the original source/binary. Exact equivalence with Windows KPMuhurat V1.5.11 still requires regression testing against known Windows results.

## GitHub Pages
Upload the files to the repository root and publish `main` → `/ (root)`. Keep `index.html` at the repository root.
