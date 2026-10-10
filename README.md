# KP Muhurat — Notes timing reference update (mobile UI)

This package styles the existing KP Muhurat web app to match the supplied mobile screenshots: navy-blue title header, horizontal tabs, rounded white panels, pale-blue title bars, and clean full-width timing-reference cards in the Muhurtam/Notes section.

- Seven user-supplied timing table images for 09 October 2026 are preserved unchanged and shown one per card.
- Timing values are not retyped, rounded, or altered.
- The reference timings remain separate from live calculation and Muhurat selection.
- The existing tab order is Data → Results → Muhurtam → Chart → Analysis; the calculation engine and selection logic are not intentionally changed.
- Service-worker cache name is bumped so the new styling can refresh.

## Deploy
Upload all files in this folder to the GitHub Pages repository root, replacing `index.html`, `sw.js`, and existing app assets, and adding the seven `reference-timings-2026-10-09-*.jpg` files. Commit/push to the branch configured for Pages. Then refresh the site; if an old page remains cached, close the installed PWA/browser tab and reopen it.

This package has not been pushed to GitHub by this build process.
