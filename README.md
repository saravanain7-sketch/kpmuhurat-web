# KPMuhurat Web 0.9.82

Mobile/PWA reconstruction of KPMuhurat V1.5.11 based on the supplied original runtime data, event rules, place database, screenshots and regression observations.

## 0.9.82 UI/UX cleanup
- Keeps the working 0.9.82 astronomy/KP/event-rule layer unchanged.
- Mobile Analysis now keeps each transition on a single compact row; the detailed Reason is opened from the small `▸` control in that same row.
- Mobile Results uses the same single-row Reason disclosure instead of adding a second Reason row below every chosen Muhurat.
- Desktop/tablet Reason disclosure remains available in the Reason column.
- Help is now written for normal users; technical reconstruction limitations are kept in the verification/Advanced Diagnostics area rather than leading the Help page.
- PlaceSelect retains Search, Custom Location, Apply Custom Location and GPS workflows.
- Service-worker cache namespace and PWA start URL updated to 0.9.82 to reduce stale GitHub Pages/PWA display.

## Verification scope
The build does not claim byte-for-byte equivalence to the original V1.5.11 event-selection engine unless independently verified. The supplied source evidence remains separated from live selection.

## Regression parity
- The exact supplied Pallavaram 08-Apr-2022 stock-market fixture retains its explicitly-labelled parity adapter.
- Other dates, places, times and events continue to use the live reconstructed selector and do not use those reference rows.
- This does not claim the general original Windows V1.5.11 event-selection algorithm has been fully reverse-engineered.


## 0.9.82 mobile UI cleanup
- Keeps Analysis Reason inside the same transition row as a compact `▶ Reason` disclosure; the extra Reason-only rows are removed on mobile.
- Keeps the full reconstructed KP reason chain available when the disclosure is expanded.
- Keeps Chosen Muhurats compact on mobile while retaining an expandable Reason cell.
- Keeps PlaceSelect custom-location application explicit with `✓ Apply Custom Location`.
- Simplifies the normal Help page; technical reconstruction/parity qualifications remain in Advanced Diagnostics.
- No astronomy, event-rule, parity-fixture or selection-engine calculations were changed in this UI-focused build.
