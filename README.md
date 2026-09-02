# KPMuhurat V1.5.11 Web Reconstruction — calculation build

This build keeps the V1.5.11-style interface and the extracted 80 event rules, and replaces the provisional alternating Y/N browser calculation with a KP calculation pipeline using Krishnamurti sidereal calculations, Placidus cusps, KP Sign/Star/Sub division, significators, and the extracted event-rule conditions.

## GitHub Pages
Upload `index.html` and `404.html` to the repository root. The page loads the browser Swiss Ephemeris runtime from UNPKG and its standard ephemeris files from jsDelivr when available; if those files cannot be downloaded it falls back to the built-in Moshier ephemeris.

## Important
This is a reconstruction, not the original KPMuhurat source/binary. The MSI extraction report identifies the original calculation and analysis assemblies and the extracted rule/settings resources, but the original managed calculation source was not provided. Therefore this build should be regression-tested against the Windows V1.5.11 program before claiming byte-for-byte or 100% identical results.
