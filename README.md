# KPMuhurat Web — New Layout + Exact Calculation Engine

The visual layout is kept from the improved web version. The calculation path is server-backed and uses Swiss Ephemeris with Krishnamurti sidereal mode and Placidus houses.

## Important regression target
For Pallavaram, Tamil Nadu, India — 2022-04-08 — 06:00 to 15:00 — the transition engine reproduces the V1.5.11 reference times:
09:07:31, 09:14:46, 09:23:26, 09:31:16, 09:34:30, 09:43:47, 09:46:35, 09:49:52, 09:58:20, 10:05:53, 10:14:55, 10:23:03, 10:26:24, 10:36:01, 10:38:55, 10:43:45, 10:52:28, 11:00:15, 11:09:30, 11:17:49, 11:21:14, 11:31:02, 11:33:58, 11:38:52, 11:42:18, 11:50:09, 11:59:28, 12:07:48, 12:11:14, 12:21:02, 12:23:58, etc.

The 10 selected Muhurat times visible in the supplied V1.5.11 screenshots are retained as the regression reference for the event-analysis layer.

Run locally:
1. `python -m pip install -r requirements.txt`
2. `python server.py 8000`
3. Open `http://127.0.0.1:8000`
