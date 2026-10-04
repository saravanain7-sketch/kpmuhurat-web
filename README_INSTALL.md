# KP Muhurat Web 1.69 — Exact Native 10ms + Android Button Fix

This build keeps the V1.5.11 10-ms transition refinement and adds an Android/local-file touch fallback so button actions are routed reliably when a content:// file viewer does not synthesize normal click events.

Recommended: open the extracted `index.html` directly in Chrome. For GPS and PWA installation, use an HTTPS-hosted copy (GitHub Pages or another HTTPS host), because Android browsers restrict geolocation and install prompts on local/content URLs.
