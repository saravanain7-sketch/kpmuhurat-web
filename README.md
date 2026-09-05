# KPMuhurat Web 0.9.55

Static GitHub Pages reconstruction of KP Muhurat V1.5.11.

## 0.9.55 changes
- Preserves the working Swiss Ephemeris WASM / Krishnamurti ayanamsa / Placidus transition layer.
- Preserves independent V1.5.11 Pallavaram regression diagnostics; stored timestamps remain verification-only.
- Corrects the six-fold significator implementation so A–F are evaluated for the requested planet independently, instead of using an over-broad inversion.
- Separates rule evaluation into ANY-positive, ALL-positive, and NO-loss tests.
- Displays the underlying positive/negative hits in the rule reason text for easier comparison with V1.5.11 screenshots.
- Does not inject the ten reference timestamps into candidate selection.
- Keeps the final Muhurat selector experimental; the main purpose of this build is to identify the V1.5.11 rule-vector semantics before another selector change.

## Regression fixture
Pallavaram, 08/04/2022, 09:00–15:00, event `05. Speculative gain in Stock Market`, location 12:58:34 N / 80:11:01 E / +05:30.

The 10 V1.5.11 timestamps are displayed only for independent verification.
