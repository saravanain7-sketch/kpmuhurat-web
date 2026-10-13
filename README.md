# KP Muhurat — Web 2.12 — Compact Time / South Indian Chart

## UI changes
- Removed Chart Style controls from both Results and Chart sections.
- The chart is fixed to South Indian style.
- Results time control uses 24-hour `HH:MM:SS` railway format.
- Reduced the time control to a compact inline field beside its label.
- Kept the selected-time chart refresh listener and did not intentionally change astronomy or selection logic.
- Updated service-worker cache to `kp-muhurat-dashboard-v2-12`.

## Validation
- Inline JavaScript syntax and ZIP integrity checks performed.
- Browser-based regression execution has not been performed here; compare the live Muhurat list against Windows V1.5.11 after deployment.

## Deploy
Upload all six files to the GitHub Pages repository root, replacing the current versions, then commit to `main`. Refresh the site or restart the installed app to pick up the new service worker.

---

# KP Muhurat — Web 2.11 — Results Controls Placement

## UI changes
- Moved the Time control and Chart Style selector directly below the Chosen Muhurats heading, above the results table.
- Removed the helper sentence “Choose a time to refresh the chart at that exact time.”
- Kept the existing time refresh and synchronized North/South chart-style behavior.
- Updated the service-worker cache version to v2-11.

# KP Muhurat — Web 2.09 — Results Branding Cleanup

## UI changes
- Removed the “♃ KP Muhurat by Kanak Bosmia” branding from the app header; the header now reads “KP Muhurat”.
- Kept the Results time control and North/South chart-style selector intact.
- Bumped the service-worker cache to v2-09 so installed/mobile browsers can fetch the updated shell.

## Earlier UI changes
- Main mobile tabs now follow the requested order: **Data → Results → Muhurtham → Chart → Analysis**.
- The Data screen remains the event-input form.
- Results shows the chosen Muhurat list.
- Muhurtham shows a responsive interval schedule with Combination, Start Time, Stop Time and Total Minutes. The combination is derived live from each calculated transition's SnL / StL / SbL values.
- Chart shows the selected Muhurat's South-Indian chart, with the first chosen Muhurat used when no row has been selected yet.
- Notes, PlaceSelect and Help remain available as additional tabs after Analysis.
- Blue styling and mobile table overflow are aligned with the supplied screenshots.

## Calculation safety
- The astronomical calculation, transition generation, native V1.5.11 selection logic, analysis, and reference-only diagnostics are not intentionally changed by this UI update.
- Schedule intervals are rendered from the live `analyses` transition list. The schedule does not feed data back into selection.
- The Windows reference timestamps remain diagnostic-only; no blanket plus/minus one-second adjustment is added.
- Service-worker cache version updated to `kp-muhurat-dashboard-v2-02` so the new layout can replace the prior cached shell.

## Validation
- All inline JavaScript blocks pass `node --check`.
- ZIP archive integrity verified after packaging.
- A browser-based calculation run has not been performed in this environment. After deployment, use the exact Windows regression settings and inspect the comparison panel before claiming exact timing parity.

## Deploy
Upload all six files to the GitHub Pages repository root, replacing the current versions, and commit to `main`. Then reload the website. If an installed PWA still shows the old layout, close/reopen it or clear the site's stored data so the service worker updates.


## Web 2.06 hotfix
Fixed the reported `Calculation error: escHtml is not defined` by exposing the HTML-escaping display helper in the page global scope. This is a rendering fix only. No astronomy, transition timestamps, Muhurat selection rules, or Windows reference timestamps were changed.


## Web 2.06 UI changes
- Results opens automatically after tapping Show.
- Selected Muhurat chart is displayed in the dedicated Chart tab, not embedded in Results.
- Muhurtham schedule columns are compact and responsive on mobile.
- Data From/To time controls include seconds (HH:MM:SS); seconds are passed through the existing calculation path.
- No Windows reference timestamps are used to select live Muhurats.
- The astronomical calculation and selection-rule functions were not intentionally changed.


## Web 2.06 chart and selection fixes
- Reapplies Windows-style chart grid styling inside the dedicated Chart tab after moving the chart markup.
- Tapping a row in Muhurtham Schedule highlights that combination in blue.
- Keeps chart content in the Chart tab and avoids showing the old embedded chart panel in Results.
- Responsive styling remains presentation-only; no reference timestamps are hardcoded into live selection.


## Web 2.06 UI updates
- Added a Windows-style **Time** control below Chosen Muhurats. Changing it recalculates the selected-time chart and selected-time analysis at the exact entered HH:MM:SS value.
- Added a **Chart Style** selector in the Chart tab with South Indian and North Indian layouts.
- North Indian mode changes house placement to house-based positions and adds diagonal chart lines; South Indian mode retains the fixed-sign layout.
- Updated service-worker cache to v2-06.
- These are display/selected-instant controls; they do not insert reference timestamps into live Muhurat selection or change transition-selection rules.


## Web 2.07 — Windows-style Results controls
- Added a Chart Style selector (North / South) directly below the selected-time control under Chosen Muhurats, matching the Windows V1.5.11 workflow.
- Kept the Chart tab selector; both selectors stay synchronized, so the style can be changed from either place.
- Updated the service-worker cache version to v2-07.
- These are UI-only changes; no astronomical calculations, transition timestamps, live selection rules, or reference fixtures were changed.


## Web 2.08 — Event-05 selection parity correction
- Updated the live Event-05 selector path (including the final Chosen Muhurats filter) to require positive-house support for each of the seven native event rows (Objects 1, 5, 11, Dasa, Bhukti, Antara and Sukshma) **and** a clear native Badhaka/Maraka gate.
- A negative-house hit remains visible in the Y/P/N analysis; it is not independently used as a rejection condition, consistent with supplied Windows rows that are accepted while showing labels such as PY.
- Rejection reasons now identify whether the native B/M gate or a required positive-rule row failed.
- Other event types retain the existing Badhaka/Maraka selector.
- No stored Windows timestamps are inserted into the live candidate stream. No global +/-1-second adjustment was added.

## Web 2.08 validation status
- Inline JavaScript syntax and ZIP integrity should be checked before deployment.
- This is a source-level selector correction based on the supplied Windows Analysis layout; exact parity still requires running the same date/time/place/event fixture in Windows and Web and comparing every selected time and SnL/StL/SbL. A browser calculation run was not available in this build environment.


## Web 2.10 — Results view cleanup
- Hides the “Results view” explanatory sentence.
- Hides the “Advanced Diagnostics — V1.5.11 Reconstruction” block from the Results tab.
- Hides the Dasa/Bhukti/Antara/Sukshma panel and its Ayanamsa/house-system/engine note from the Results tab.
- The diagnostic markup remains in the source but is not displayed in Results, preserving existing JavaScript references and calculations.
- Live Muhurat selection and astronomical calculation code were not changed.


## Web 2.13 — Chosen time and Analysis refresh
- Moved the compact 24-hour Time control to the right side of the Chosen Muhurats heading.
- The time field accepts complete `HH:MM:SS` railway time only and validates hours/minutes/seconds.
- Changing the time, pressing Enter, or leaving the field refreshes the Results Analysis table and South Indian chart for that exact entered time.
- Analysis is explicitly revealed after a valid time update.
- No astronomy or live Muhurat-selection logic was intentionally changed.


## Web 2.14 — Chosen Time validation fix
- Fixed the time-validation regular expression so valid 24-hour `HH:MM:SS` values such as `12:40:41` are accepted.
- Changing the Chosen Muhurats time refreshes the Analysis panel and chart at that exact entered time.
- No Muhurat-selection or astronomical calculation logic intentionally changed.


## Web 2.15 — Explicit Show workflow and Analysis refresh
- Editing Date, To date, From time, To time, place, coordinates, timezone or event now invalidates stale output but does not auto-run or navigate to Results.
- Press Show to calculate and display Results for the chosen date/date range and time range.
- Changing the chosen HH:MM:SS time recalculates Analysis and the chart at that exact time.
- No Muhurat selection or astronomical calculation logic intentionally changed.


## Web 2.16 — Stock Market selection gate
- Tightened the live Stock Market selector: existing positive-rule checks and the Badhaka/Maraka gate remain, and Object 5 / Object 11 reject candidates whose live negative-house significators hit house 8 or 12, matching the Event rule remarks.
- No date/time allowlist or Windows reference timestamps are used to select Muhurats.
- Rule-level correction; exact Windows parity still requires comparing the live output against the Windows fixture on the same date and settings.


## Web 2.17 — Revert unverified Stock Market exclusion
- Removed the additional CSL 5/11 negative-house 8/12 rejection introduced in Web 2.16, because it incorrectly reduced the shown results to one Muhurat in the supplied 13-Oct-2026 screenshot.
- Restored the prior Event-05 positive-rule gate plus the Badhaka/Maraka gate; no reference timestamps or hardcoded allowlists are used.
- This is a rollback of the unverified extra filter, not a claim of exact Windows parity. Compare Web and Windows results for the same date and settings to identify any remaining extra timestamps.


## Web 2.18 — Native CharaRasi transition filter
- Restored the Windows V1.5.11 default `CharaRasi=false` transition behavior: movable-sign Lagna transitions (Aries, Cancer, Libra and Capricorn) are excluded from Results unless that option is enabled.
- Web 2.17 had calculated all transition rows without applying this default setting, which could introduce extra candidates.
- The filter is applied to live transition sign data, not hardcoded timestamps or a date-specific allowlist.
- This is a source-based parity correction; compare the same date, location, timezone and event against Windows before treating exact list parity as verified.


## Web 2.19 — targeted Event 05 selection parity correction
- Preserves the existing layout, tabs, chart, Analysis, and input format.
- Removes the unsupported Event 05 all-positive selection gate. Windows V1.5.11 can select a Muhurat while its displayed Event 05 rows contain N/NN/PY/YP labels; those labels are analysis evidence, not a second automatic selection gate.
- The live selection decision uses the native Badhaka/Maraka gate. No date-specific timestamps or result lists are hardcoded.
- Service-worker cache namespace bumped to prevent the previous app shell being reused.
- Validation: JavaScript syntax and ZIP integrity checked. Exact runtime parity still requires running this build and comparing the resulting list with Windows V1.5.11.
