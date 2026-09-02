# KPMuhurat V1.5.11 — Web 0.9.12

## Calculation-engine upgrade + regression verification

Runtime fix: restored the numeric `near()` helper used by the Pallavaram regression-input matcher. This fixes `Calculation error: near is not defined` when Show is clicked.

The regression reference times remain comparison data only; they are not injected into chosen-result calculation. Corrected rule parsing, chart-relative house ownership, Swiss Ephemeris WASM, Krishnamurti ayanamsa, Placidus houses, fractional transition search, and recursive Vimshottari hierarchy are retained. Regression PASS is reported only when engine-generated chosen times exactly match all 10 stored reference times.

Validation: JavaScript syntax check performed with Node.js. Browser runtime against external Swiss Ephemeris WASM must be checked on GitHub Pages.
