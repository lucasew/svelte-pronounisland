# Sentinel's Journal

## 2026-01-23 - Added Missing Security Headers

**Vulnerability:** Missing strict security headers (HSTS, Referrer-Policy, Permissions-Policy) leaving users vulnerable to MITM (downgrade attacks) and privacy leaks.
**Learning:** While some headers were present, a comprehensive set is needed for defense-in-depth. HSTS is critical for HTTPS enforcement.
**Prevention:** Use a standard checklist for security headers in all new SvelteKit projects.
