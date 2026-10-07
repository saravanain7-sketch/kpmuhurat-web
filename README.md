# KPMuhurat Web 1.55 — KP Muhurat V1.5.11

Mobile/PWA reconstruction of KPMuhurat V1.5.11.

## Build 1.53
- Carries forward the native B/M/significator reconstruction from Web 1.52.
- Adds the latest **07-Oct-2026 Coimbatore Event 05** regression reference.
- Preserves all 02-Oct-2026 Windows Chosen Muhurat transition references, including the 22:07:47 screenshot row:
  09:15:32, 11:02:58, 11:12:14, 11:25:21, 12:19:34, 13:02:53,
  16:21:29, 16:30:10, 18:10:25, 19:34:38, 19:37:04, 20:16:06,
  20:18:39, 20:56:24, 21:48:07.
- Keeps 02-Oct-2026 and earlier Coimbatore regression references.
- Keeps 07-Oct-2026 Analysis evidence separate from live selection.
- Uses the supplied settings: Coimbatore, 11:00:00 N, 76:58:00 E, +05:30 East, Krishnamurti, Placidus, Event 05.

## Important
The supplied Windows rows are regression evidence only. They are not injected into the normal live Chosen Muhurat selector. Exact Windows V1.5.11 equivalence remains a validation target.

## GitHub Pages
Upload the contents of this folder to the repository root. `index.html` is the entry point. Configure GitHub Pages to deploy from `main`/root or use the included GitHub Actions workflow.


## Web 1.54 precision patch
- Refines each KP boundary using fractional-second bisection before displaying the native whole-second transition.
- This addresses the observed one-second-early transitions such as 09:35:11 → 09:35:12 and 11:22:38 → 11:22:39.
- The Windows rows remain verification evidence only; they are not injected into live selection.


## Web 1.55 native-analysis correction
- Keeps the fractional-second boundary refinement from Web 1.54.
- Corrects the Badhaka/Maraka reconstruction so the SBL, its Star Lord and its Sub Lord are evaluated as **separate direct significator groups**, without recursively expanding each chain member through its own Star/Sub Lords.
- Keeps node/conjunction/aspect handling separate from that direct chain evaluation.
- Extends the final transition scan by one short interval so the Windows-style final boundary immediately after the requested end (such as 22:07:47 after a 22:00 input) can be represented.
- No Windows Chosen-Muhurat timestamps are injected into live selection.
