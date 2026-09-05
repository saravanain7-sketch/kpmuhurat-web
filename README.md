# KPMuhurat Web 0.9.54

Static GitHub Pages reconstruction of KP Muhurat V1.5.11.

## 0.9.54 changes
- Preserves the working Swiss Ephemeris WASM / Krishnamurti ayanamsa / Placidus transition layer.
- Preserves the independent V1.5.11 Pallavaram regression diagnostics; stored timestamps remain verification-only.
- Replaces the previous planet + star-lord shortcut with Kanak Bosmia's documented six-fold KP significator construction (sub-of-occupant, star-of-occupant, occupant, sub-of-owner, star-of-owner, owner).
- Uses six-fold significators for cusp and DBAS timing checks.
- Keeps the extracted 8/12 restriction on the 5th/11th CSL rules and does not invent an 8/12 DBAS gate.
- Adds primary ruling-planet calculation as a secondary timing quality check; it does not require the current Lagna SBL to be a ruling planet.
- No reference timestamp is injected into production candidate selection.

## Regression fixture
Pallavaram, 08/04/2022, 09:00–15:00, event `05. Speculative gain in Stock Market`, location 12:58:34 N / 80:11:01 E / +05:30.

The 10 V1.5.11 timestamps are displayed only for independent verification.
