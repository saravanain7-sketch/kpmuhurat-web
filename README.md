# KP Muhurat — Dashboard Build 2.01

## What changed
- Professional blue dashboard and responsive mobile layout.
- Preserves the live astronomy, transition calculation, native V1.5.11 analysis and live selection logic.
- Keeps the end-date-aware transition wrapper and removes a duplicate wrapper declaration.
- Updates the page title and service-worker registration query to 2.01; the service-worker cache is versioned `kp-muhurat-dashboard-v2-01`.
- Adds a dedicated **10-Oct-2026 Coimbatore exact chosen-Muhurat comparison** based on the Windows V1.5.11 screenshots. It compares the live chosen rows with the reference timestamps and SnL/StL/SbL, and displays signed time differences.
- The 10-Oct reference rows are used only by the diagnostic display. They are not used by astronomy, transition detection, event-rule evaluation, or live selection.

## Regression test settings
- Date: 10-Oct-2026
- Time range: 06:00–22:00
- Place: Coimbatore, Tamil Nadu, India
- Latitude: 11:00:00 N
- Longitude: 76:58:00 E
- Time zone: UTC+05:30
- Event: 05. Speculative gain in Stock Market
- Windows screenshot reference: 18 chosen Muhurats

## Verification status
- All three inline JavaScript blocks pass `node --check`.
- Source inspection confirms the 10-Oct reference fixture is called only by the post-calculation comparison display and does not feed the selector.
- Full browser-based calculation and Windows parity could not be certified in this environment. After deployment, run the exact settings above and inspect the new **Exact Chosen-Muhurat Comparison** panel. It must report `EXACT MATCH` before claiming parity.
- No blanket +1/-1 second adjustment is applied, and reference times are not injected into the live selector.

## Deploy to GitHub Pages
Upload all six files in this folder to the repository root, replacing the existing copies. Keep GitHub Pages set to `main` and `/(root)`. After deployment, reload the site; if an installed PWA shows an older build, close/reopen it or clear the site's stored data.
