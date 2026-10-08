Web 1.63 — Native V1.5.11 transition-state fix.

Fixes the Web 1.62 regression where truncating a fractional boundary before scanner state advancement caused duplicate transitions. The scanner now retains the exact fractional crossing internally and only truncates for display. No Windows timestamps are hardcoded into live selection.
