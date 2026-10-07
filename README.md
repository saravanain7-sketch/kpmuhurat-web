# KPMuhurat Web 1.60 — KP Muhurat V1.5.11

Native Node Analysis parity update based on recovered V1.5.11 IL.

## Native Node Analysis implemented
- `CEphAnalysis.nodeRuleFilterFlag` is statically initialized to `true`.
- `GetNodeAnalysisString()` marks the node first and processes Rahu/Ketu only for the node-specific branch.
- `GetVidecConj()` uses same-Rasi filtering and strict shortest angular separation `< 30°`.
- With `nodeRuleFilterFlag=true`, a qualifying conjunction stops the node branch before special aspects.
- `GetVidecAspectsSpecial()` uses the recovered Mars/Jupiter/Saturn special-aspect table and reverse target-Rasi matching.
- A qualifying special aspect stops the node branch before Rasi Lord.
- `GetOccRasiLord()` returns exactly `vPlanetInfo[planetId].rasiLordId`.
- Conjunction, special-aspect, and Rasi-Lord related planets are passed through native direct `GetPlanetSgnf()` semantics.

## Native B/M path retained
The existing Web 1.59 native B/M reconstruction is preserved, including direct significator handling and native `GetBmmString()` behavior.

## Verification
Windows timestamps remain verification-only regression fixtures and are not hardcoded into live candidate selection.

Build: Web 1.60
