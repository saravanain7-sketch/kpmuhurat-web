# KPMuhurat — New Layout + GPS

This package has `index.html` at the repository root so GitHub Pages loads the new layout instead of an older root page.

The new interface contains no Tamil Muhurat Conditions panel or Tamil-language result table. It retains the new layout and includes GPS Location.

Important: the calculation backend in `server.py` requires the extracted KPMuhurat place database and Swiss Ephemeris environment. GitHub Pages itself cannot run Python; use a Python-capable HTTPS host for the calculation API, or continue using the existing backend endpoint.
