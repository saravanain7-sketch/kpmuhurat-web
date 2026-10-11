# KP Muhurat — Web 2.03 Mobile Layout Build

## UI changes
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


## Web 2.03 hotfix
Fixed the reported `Calculation error: escHtml is not defined` by exposing the HTML-escaping display helper in the page global scope. This is a rendering fix only. No astronomy, transition timestamps, Muhurat selection rules, or Windows reference timestamps were changed.
