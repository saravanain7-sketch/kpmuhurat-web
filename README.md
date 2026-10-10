# KP Muhurat — Dashboard Build 2.01

## What changed
- Added a professional blue dashboard with summary cards, mirrored input settings, and quick navigation to Data, Results, and Analysis.
- Improved responsive styling for mobile and desktop.
- Kept the live astronomy, transition calculation, native V1.5.11 analysis and selection functions intact.
- Fixed a duplicate `transitionRows()` declaration that shadowed the end-date-aware version. The active wrapper now forwards `endDate`; single-day calculations use the same range path and timestamps.
- Updated the PWA cache version and made page navigations network-first with an offline fallback so published UI updates can be retrieved more reliably.

## Deploy to GitHub Pages
Upload all files in this folder to the repository root, replacing the current copies. Keep GitHub Pages set to `main` and `/(root)`. After deployment, open the site and reload it; if the installed PWA still shows an older build, close/reopen it or clear the site's stored data.

## Verification
- JavaScript syntax is checked with Node.js.
- A source diff confirms edits are limited to dashboard markup/styles, dashboard UI synchronization, the end-date wrapper forwarding fix, and PWA cache behavior.
- This is not a claim of full Windows parity. Run the Coimbatore and Pallavaram V1.5.11 regression fixtures in Advanced Diagnostics and compare the exact transition timestamps and selected rows before operational use.
- Reference timestamps remain validation-only and are not injected into the live selector.
