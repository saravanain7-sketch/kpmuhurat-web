# KP Muhurat Web 1.82 — Windows Whole-Second Parity

This build continues Web 1.80 without changing the UI workflow or production selection logic.

## Main purpose
Expose the exact fractional transition returned by the reconstructed 10-ms `FindTimeInterval()` path so the remaining 1-second Windows V1.5.11 parity differences can be diagnosed rather than corrected with a blanket time offset.

## Test fixture
- 02/10/2026
- 09:00–22:00
- 11:00:00 N
- 76:58:00 E
- +05:30 East
- Krishnamurti
- Placidus
- Event 05 — Speculative gain in Stock Market

Open **Advanced Diagnostics → Boundary Precision Audit — Web 1.81** after pressing Show.

The audit is diagnostic only. It does not inject reference timestamps or alter candidate selection.


## V1.5.11 whole-second parity fix
The recovered Windows transition path refines a boundary to a 10-ms crossing, then uses the first whole second that has reached that boundary as the transition DateTime. Web 1.81 retained the fractional crossing for the live selector, causing systematic one-second early results such as 09:35:11.210 → 09:35:11 instead of the Windows 09:35:12. Web 1.82 keeps `exactSeconds` for diagnostics and uses `nativeSeconds = ceil(exactSeconds)` (with a tiny floating-point guard) for live transition times and analysis.
