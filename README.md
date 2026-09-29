# KPMuhurat Web 0.9.69 — V1.5.11 Reconstruction

Mobile/PWA build based on the supplied KPMuhurat V1.5.11 runtime package and regression evidence.

## Included
- Browser KP astronomy/transition layer from the previous verified build.
- Supplied `events.txt` preserved in `data/events.txt`.
- Supplied `AstroOpenSourceAtlas.db` preserved unchanged in `data/`.
- Static `places.json` generated directly from the supplied database for fast GitHub Pages search (97,875 places, 387 timezones).
- Supplied `Settings.xml`, license and SHA256 checksums.
- PWA manifest and service worker for Android/desktop installation.
- GPS and custom coordinates.
- V1.5.11 regression/Reason-chain diagnostics remain visible.

## Important
This is a reconstruction, not the original Windows executable or original source code. The astronomy/transition layer has been regression-tested against the supplied V1.5.11 evidence, but the final event-selection Y/N algorithm has not been claimed as byte-for-byte equivalent. The app therefore keeps the selection diagnostics separate from the verified astronomy layer.

## GitHub Pages
Upload the contents of this folder to a repository and enable GitHub Pages. Open the HTTPS Pages URL in Chrome/Edge/Safari. The service worker and GPS require HTTPS (localhost is also permitted by browsers).

## Attribution / license
See `LICENSE.rtf`. The supplied license states that the program is for learning/practice of KP Muhurat and permits personal use/distribution/modification subject to its stated conditions. Modified versions should be clearly marked as modified.
