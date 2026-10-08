KP Muhurat V1.5.11 — Web 1.90

Web 1.90 fixes the native CEphAnalysis cusp-list scope used by the Analysis Y/P/N rows.

Key fix:
- Reconstructs GetSubLordAnalysis cuspList for the selected Sub Lord, including Sub Lord, Star Lord, Sub Lord-of-Sub chain, native Rahu/Ketu node branch, and final “No planets in the star / is sub lord of” cusp expansion.
- Uses that native cuspList for Object 1, Object 5, Object 11 and Dasa/Bhukti/Antara/Sukshma Analysis classification.
- This corrects the 02-10-2026 09:35:11 case where Web 1.89 showed Sukshma Ve as N- while the Windows V1.5.11 reference is P-.
- The same native scope also addresses the remaining Obj 5 / Obj 11 PN versus Windows PY parity issue where applicable.
- +H and -H remain the event rule requirements; hit evaluation is calculated dynamically.
- No Windows timestamps are hardcoded into candidate selection.

Regression fixture: Coimbatore, Tamil Nadu; 11:00:00 N, 76:58:00 E, TZ 05:30:00 East; Krishnamurti ayanamsa; Placidus; Event 05 Speculative gain in Stock Market.
