KP Muhurat V1.5.11 — Windows Engine Reference

These are the supplied Windows V1.5.11 binaries/data used as the reverse-engineering reference for mobile parity.

The browser app does NOT execute Windows DLLs directly. Chrome/Android uses the WebAssembly astronomy engine in index.html. The Windows files are retained here so the parity package contains the authoritative calculation reference and event/database inputs in one place.

Key reference components:
- KpMuhuart.exe — original Windows V1.5.11 executable
- vedicbputil.dll — KP/Vedic calculation utility
- ephcalc.dll / ephstrings.dll / astrogui.dll — calculation/UI libraries
- sqlite3.dll — database runtime
- events.txt — original event rules
- AstroOpenSourceAtlas.db — original place database
- Settings.xml — original settings
- MuhuratUserGuide.doc — V1.5.11 behavior/analysis documentation
