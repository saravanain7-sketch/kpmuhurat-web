KP Muhurat V1.5.11 — Web 1.61

This build preserves the Web 1.58 native-stable transition scanner and changes only the displayed transition-second rule: fractional boundary times are reported using the first whole second at/after the boundary (ceiling), matching the recovered Windows GetLagnaTime/transition behavior.

No date-specific transition or result hard-coding is used.


Web 1.61 timing fix: fractional Lagna transition boundaries are displayed using nearest-whole-second rounding to match the Windows V1.5.11 timestamps. No date-specific transition times are hard-coded into live selection.
