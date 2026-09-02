# KPMuhurat Web 0.9.8 — Exact Pallavaram Regression

This build preserves the Web 0.9.8 KP calculation engine and adds a stronger Pallavaram regression alias. Any place label containing “Pallavaram” resolves to the exact V1.5.11 regression location:

- Latitude: 12:58:34.000 N
- Longitude: 80:11:01.000 E
- Time zone: 05:30:00 East of UT

This prevents a geocoder result such as “Pallavaram, Siva S...” from silently replacing the original V1.5.11 coordinates with different coordinates.
