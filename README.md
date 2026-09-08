# KPMuhurat Web 0.9.58

Browser-hosted reconstruction of KPMuhurat V1.5.11 for GitHub Pages.

## 0.9.58 change
The Pallavaram screenshots showed that 0.9.57's final selector was still too strict. It required complete 2/5/6/11 coverage across the DBAS joint period and a ruling-planet match. Those are not supported as universal gates by the supplied V1.5.11 evidence.

0.9.58 keeps the astronomy/transition engine and six-fold significator layer unchanged, but changes the experimental transit-Muhurta selector to:
- Lagna CSL: at least one of 1/5/9/11, no 8/12, and non-movable Lagna.
- 5th/11th CSL: each contributes at least one of 2/5/6/11; complete coverage is not required.
- DBAS: the joint period needs at least one fruitful 2/5/6/11 signification; individual levels need not cover all houses.
- Transition Lagna SbL: must itself activate at least one event house 2/5/6/11.
- Ruling planets are diagnostic only and are not a gate.

The stored V1.5.11 timestamps and YY/YN/NY/NN vectors remain verification-only and are never used to select candidates.

This is not the original Windows source/binary and is not claimed to be byte-for-byte equivalent. Regression testing against the V1.5.11 Pallavaram screenshots remains required.
