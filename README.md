# KPMuhurat Web 1.85 — Analysis scope refinement

- Preserves the Web 1.62 astronomy, transition and native V1.5.11 reconstruction paths.
- Removes the generic 12-object fallback from Event 05 Analysis.
- Event 05 Analysis now displays the native event-rule objects 1, 5, 11 plus Dasa/Bhukti/Antara/Sukshma, matching the Windows Analysis layout.
- No global +1-second timestamp adjustment.
- No Windows timestamps are injected into live Muhurat selection.
- Timing precision remains governed by the existing native-style boundary solver.

This build is an Analysis-scope correction; exact native Y/N state semantics remain tied to the source-derived event rule implementation.
