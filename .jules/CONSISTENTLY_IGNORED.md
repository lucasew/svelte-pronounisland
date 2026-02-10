## IGNORE: Strict Security Headers

**- Pattern:** Adding `Strict-Transport-Security` (HSTS), `Permissions-Policy`, or `Referrer-Policy` headers in server hooks.
**- Justification:** Multiple PRs attempting to add these headers were closed. These headers imply operational commitments (HSTS) or potential breakage (Permissions-Policy) that have been rejected.
**- Files Affected:** `src/hooks.server.ts`

## IGNORE: Bundling Formatting with Configuration

**- Pattern:** Applying project-wide code formatting (Prettier/ESLint fixes) in the same pull request as configuration updates or tool upgrades.
**- Justification:** PRs mixing config changes with massive formatting diffs (e.g., touching static assets or all Svelte files) are rejected in favor of atomic configuration updates.
**- Files Affected:** All source files (`.svelte`, `.css`, `.ts`, `.js`)

## IGNORE: Redundant Tooling

**- Pattern:** Adding new linters or formatters (specifically `dprint`) when an equivalent tool (Prettier) is already established.
**- Justification:** The project has standardized on Prettier. Proposals to add dprint were rejected.
**- Files Affected:** `mise.toml`, `package.json`, `dprint.json`
