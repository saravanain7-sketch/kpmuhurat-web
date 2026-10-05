# KP Muhurat Web 1.70

Web 1.70 keeps the reconstructed native V1.5.11 10-ms timing engine and hardens Android Chrome/GitHub Pages interaction.

## Important
The page header must show **Web 1.70** after deployment. If it still says Web 1.68, the old deployment/service-worker cache is being served.

## Deployment
Upload the contents of `kp164/` to the GitHub Pages site, replacing the old `index.html`. Keep `data/`, `sw.js`, manifest and other referenced files from the existing site if they are outside this package.

After deployment on Android Chrome:
1. Open the site.
2. Long-press/reload if necessary and choose reload.
3. Confirm the header says **Web 1.70**.
4. Tap **Show**. It can now be tapped even while the Swiss Ephemeris engine is loading; the calculation is queued until the engine is ready.
5. If loading fails, the Status box reports the JavaScript/engine error instead of leaving the controls apparently dead.

The native timing reconstruction remains live and date-independent; no 02-Oct-2026 result is hard-coded.
