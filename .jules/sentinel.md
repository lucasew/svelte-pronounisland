## 2026-01-28 - Add Permissions-Policy Header
**Vulnerability:** Missing `Permissions-Policy` header allows potential access to sensitive browser features (camera, microphone, geolocation) by default or if a vulnerability like XSS is exploited, increasing the attack surface and privacy risks.
**Learning:** The `Permissions-Policy` header allows sites to strictly define which features can be used by the document and its iframes.
**Prevention:** Explicitly disable sensitive features that are not used by the application using the `Permissions-Policy` header.
