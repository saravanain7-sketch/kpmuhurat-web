# KP Muhurat Web 1.73

This build keeps the reconstructed V1.5.11 calculation engine, including the native 10-ms boundary refinement, and fixes the Android form lock-up.

## What changed
- Native Date / To date / From time / To time controls are no longer intercepted by global `touchend` handlers.
- Text inputs and selects receive normal Android touch, focus and keyboard events.
- Show / Find / GPS / PlaceSelect buttons remain normal buttons.
- Legacy service-worker registration from older Web 1.49/1.69/1.72 builds is removed.
- The page unregisters an old service worker if one is still installed.
- Header and title are **Web 1.73**.

## GitHub Pages deployment
1. Replace the existing `index.html` with this `index.html`.
2. Do not keep the old `sw.js` registration/code from previous builds.
3. Commit and wait for GitHub Pages to publish.
4. On Android Chrome, if the old page still appears, open Chrome Settings → Site settings → All sites → your GitHub Pages domain → Clear & reset, then reopen the site.
5. Confirm the header says **V 1.5.11 — Web 1.73**.

## Local Android test
Open the new `index.html` directly. Do not use an old tab. The Date, To date, time, text, select and Event controls should all remain native controls.

## Important
Do not change the calculation engine while testing the form. First confirm that all controls respond. Then test the 02/10/2026 Coimbatore regression and compare the 15 Windows Muhurat rows.
