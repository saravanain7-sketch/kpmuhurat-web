# KPMuhurat Web 0.9.16

Mobile-performance update based on Web 0.9.15.

## What changed
- Kept the 0.9.15 KP boundary/sub-lord classification fix.
- Added a lightweight Ascendant-only transition scanner instead of running the full planetary chart every 5 seconds.
- Coarse transition scan changed to 15-second sampling; exact boundaries are still resolved with 45-iteration binary search.
- Full chart calculations are performed only at the detected transition/probe times for analysis.
- Regression verification remains unchanged and is still only a verification check; no reference times are injected into result selection.

## Reference test
Pallavaram, Tamil Nadu — 08/04/2022, 09:00–22:00, event `05. Speculative gain in Stock Market`.

The regression panel must show PASS before claiming exact V1.5.11 reproduction.
