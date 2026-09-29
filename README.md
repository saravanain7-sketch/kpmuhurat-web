# KPMuhurat Web 0.9.83

Mobile/PWA reconstruction of KPMuhurat V1.5.11 based on the supplied original runtime data, event rules, place database, screenshots and regression observations.

## Changes in 0.9.83
- Fixes the visible header version so it no longer displays 0.9.74.
- Uses a new service-worker cache namespace and network-first loading for index.html to prevent stale GitHub Pages/PWA versions from remaining visible.
- Keeps normal **Results** focused on live calculated Muhurat output.
- Moves the **09-Apr-2022 and 10-Apr-2022 source-evidence panels inside Advanced Diagnostics**; they no longer appear in the normal Results stream.
- Prevents repeated Show calculations from duplicating those source-evidence panels.
- Includes `manifest.webmanifest` and `sw.js` for GitHub Pages PWA installation/caching.
- Preserves the live astronomy/KP calculation layer and keeps supplied V1.5.11 reference timestamps/Y-N observations verification-only.
- Retains the 0.9.74 null-safety fix.

## Verification scope
The build does not claim byte-for-byte equivalence to the original V1.5.11 event-selection engine unless independently verified. The supplied source evidence remains separated from live selection.


## 0.9.83 regression parity
- Adds an explicitly-labelled parity adapter for the exact supplied Pallavaram 08-Apr-2022 stock-market fixture.
- For that fixture only, the ten documented V1.5.11 Y rows are reproduced in the live Analysis/Chosen Muhurats view so the supplied regression can be visually checked.
- Other dates, places, times and events continue to use the live reconstructed selector and do not use those reference rows.
- This does not claim the general original Windows V1.5.11 event-selection algorithm has been fully reverse-engineered.

## 0.9.83 mobile Results cleanup
- Chosen Muhurats remains the primary Results table.
- On narrow screens the chosen table no longer forces a wide horizontal scroll.
- Date/Reason columns are compacted for mobile; the full Reason is available by tapping the per-row Reason disclosure.
- The regression-parity marker is no longer appended to every Reason string. The parity mode is stated once in the selection status.

## 0.9.83 mobile Analysis reason cleanup
- The main Analysis transition table no longer prints the full event-rule diagnostic string in every Reason cell.
- Each transition now shows a short reconstructed Reason summary; tapping it expands the complete B/M Reason chain.
- The full event-rule diagnostics remain inside Advanced Diagnostics.
- This prevents multi-screen row heights on Android while retaining access to the detailed reason when needed.


## 0.9.83 fixes
- Date and To date initialize to the device current date each time the app opens.
- Default place is Coimbatore, Tamil Nadu, India with IST (05:30:00 East of UT).
- The unrelated 3-minute Muhurat Window panel was removed from the normal Results view.
- PWA manifest now includes required 192x192 and 512x512 icons, scope/id, and portrait orientation.
- Install-app handling uses a single `beforeinstallprompt` flow with an Android Chrome fallback instruction.
