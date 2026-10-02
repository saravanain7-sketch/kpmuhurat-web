KP Muhurat V1.5.11 Web 1.33.1 — runtime hotfix

Fix:
- Removed a stale reference to the undefined JavaScript variable `coimbatoreParityActive`.
- This runtime exception was stopping the Show calculation before results were rendered.
- Service-worker registration remains versioned as 1.33.

No calculation rules were intentionally changed by this hotfix.

Test input from the reported screenshot:
- Date: 02-Oct-2026
- From: 09:00
- To: 22:00
- Coimbatore: 11:00:00 N, 76:58:00 E
- Time zone: 05:30:00 East
- Event: 05. Speculative gain in Stock Market
