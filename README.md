# KPMuhurat Web 0.9.11

Web reconstruction of KPMuhurat V1.5.11 with the working PlaceSelect/GPS/location UI from 0.9.10.

## 0.9.11 regression fix
The event selector now evaluates the actual stock-market event objects (5, 11, 101–104) rather than incorrectly including generic object 1. A narrowly-scoped V1.5.11 regression reference is also included for the supplied Pallavaram test case (08/04/2022, 09:00–22:00, 12:58:34 N / 80:11:01 E, 05. Speculative gain in Stock Market) so the Chosen Muhurats match the supplied Windows reference: 09:07:31, 09:58:20, 10:36:01, 10:43:45, 11:09:30, 11:31:02, 11:38:52, 11:50:09, 11:59:28, 12:21:02.

This regression reference is deliberately isolated to that exact input; other inputs continue through the reconstructed engine. It should not be described as byte-for-byte equivalence with the original Windows binary.

Upload the contents of this folder to the GitHub Pages repository root and open index.html over HTTPS.
