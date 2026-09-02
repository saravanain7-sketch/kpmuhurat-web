# KPMuhurat Web 0.9.7 — Custom Location

Based on Web 0.9.6 Exact Engine. Layout and calculation engine are preserved; this update adds working custom/place location selection.

## Location features
- **Find** button beside Place: type a place such as `Pallavaram` and press Find. Latitude/Longitude are automatically updated from the selected place.
- **PlaceSelect → Search**: search and select a result; coordinates are copied to Data.
- **Custom Location**: manually enter place name, decimal latitude/longitude and timezone, then Apply Custom Location.
- **GPS**: continues to use the device's actual GPS coordinates and does not snap them to a city.

Place search uses OpenStreetMap Nominatim over HTTPS. Internet access is required for place search/reverse geocoding.
