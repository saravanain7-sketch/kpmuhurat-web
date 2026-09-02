# KPMuhurat V1.5.11 — Web 0.9.10

Web 0.9.10 is a regression-fix build from Web 0.9.9.

Critical fixes:
- Corrected Placidus cusp array indexing (`h.cusps[i-1]`), which was shifting every house cusp by one house and caused Object 5/11 CSL values to be wrong.
- Transition display now truncates boundary seconds to match the original displayed timings (for example 09:23:26 rather than 09:23:27 when the boundary falls between seconds).
- Sub-level analysis starts at the first actual KP transition instead of adding an artificial 09:00:00 row.
- Retains recursive Vimshottari Dasa/Bhukti/Antara/Sukshma and the Web 0.9.8 location/GPS functionality.

The original V1.5.11 application remains the regression reference. This build should be compared against the supplied Pallavaram screenshots, especially the 09:07:31 Object 1/5/11 analysis and the 10 chosen Muhurats.
