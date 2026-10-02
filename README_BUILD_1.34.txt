KP Muhurat V1.5.11 — Web 1.34
Live Event-Rule Engine Reconstruction

BASE: Web 1.33 Original Engine Port

Changes in Web 1.34:
1. Production Y/N selection no longer uses only the reconstructed B/M boolean.
2. Each calculated transition is evaluated against the decoded event-rule stream from the supplied V1.5.11 events.txt.
3. For Event 05 (Speculative gain in Stock Market), houses 5 and 11 are evaluated as the primary CSL rules; positive-house coverage and prohibited-house no-loss are both required, together with the reconstructed V1.5.11 B/M check.
4. Stored Windows timings remain validation-only and are never injected into production selection.
5. Service-worker cache name is bumped to 1.34 and navigation remains network-first to prevent stale Web builds.
6. UI remains based on Web 1.33.

Important:
This is a live reconstruction, not a claim that the private/original source code has been recovered. The supplied Windows V1.5.11 executable, DLLs, events.txt and documentation remain the authoritative parity reference.
