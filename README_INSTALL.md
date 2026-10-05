# KP Muhurat Web 1.77

Web 1.77 fixes the transition-scan endless-loop condition found in Web 1.76. The recovered V1.5.11 10-ms refinement is retained. After a boundary is refined by FindTimeFromPosition, the scanner resumes from that returned DateTime rather than resetting to the coarse 60-second bracket endpoint. Duplicate floating-point hits are guarded so the mobile scan progresses normally.

No date-specific transition times are injected into live selection.
