# KPMuhurat Web 0.9.56

Browser-hosted reconstruction of KPMuhurat V1.5.11 for GitHub Pages.

## 0.9.56 — Rule Engine Reconstruction
- Preserves the successful Swiss Ephemeris / Krishnamurti / Placidus transition layer.
- Preserves the six-fold KP significator diagnostic.
- Changes the working first Y/N character hypothesis from ALL-positive to ANY-positive coverage, based on the V1.5.11 09:07:31 evidence.
- Keeps ANY, ALL and NO-loss tests visible independently for every rule.
- Treats the second Y/N character as diagnostic only; its original V1.5.11 semantics are not yet claimed.
- Does not inject stored V1.5.11 timestamps into candidate selection.
- Keeps Transit Muhurta separate from natal-chart and GMP/KP Prasanna logic.

## Test
Use the exact Pallavaram regression fixture:
- Date: 08/04/2022
- Time: 09:00–15:00
- Latitude: 12:58:34 N
- Longitude: 80:11:01 E
- Time zone: 05:30:00 East of UT

The Layer 1 transition stream should remain unchanged. The purpose of this build is to expose the rule-engine semantics so the next correction can be evidence-driven rather than hard-coded to reference timestamps.

## GitHub Pages
Upload `index.html` from this folder to the published repository location. After replacing the old 0.9.55 file, hard-refresh Chrome (or clear the site cache) and confirm the green BUILD 0.9.56 banner at the top.

This is a static reconstruction, not the original Windows executable/source code. Exact equivalence requires regression testing against KPMuhurat V1.5.11.
