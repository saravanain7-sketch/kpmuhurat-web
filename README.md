# KPMuhurat Web 0.9.15

This build fixes the KP sub-lord boundary classification used by the transition table.

The transition scan identifies the instant at which the Lagna sub-lord changes. At that exact instant, the displayed sub-lord must be the **new** sub-lord, matching the original V1.5.11 output. The previous build used a positive epsilon in the Vimshottari sub-lord boundary comparison, which caused each transition row to display the previous lord (for example 09:07:31 showed Ra instead of Ju, 09:14:46 showed Ju instead of Sa, etc.).

The regression fixture remains verification-only; it does not hard-code the expected times into the selector.

Test case:
- Pallavaram, Tamil Nadu, India
- 08/04/2022
- 09:00–22:00
- 12:58:34 N, 80:11:01 E
- TZ 05:30 East
- Event: 05. Speculative gain in Stock Market

Expected V1.5.11 selected Muhurats:
09:07:31, 09:58:20, 10:36:01, 10:43:45, 11:09:30, 11:31:02, 11:38:52, 11:50:09, 11:59:28, 12:21:02
