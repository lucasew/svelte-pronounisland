## IGNORE: Strict Security Headers

**- Pattern:** Adding `Strict-Transport-Security` (HSTS), `Permissions-Policy`, or `Referrer-Policy` headers in server hooks.
**- Justification:** Multiple PRs attempting to add these headers were closed. These headers imply operational commitments (HSTS) or potential breakage (Permissions-Policy) that have been rejected.
**- Files Affected:** `src/hooks.server.ts`

## IGNORE: Bundling Formatting with Other Changes

**- Pattern:** Applying stylistic formatting (Prettier/ESLint fixes, quotes, semicolons) in the same pull request as logic changes, documentation updates, configuration tweaks, or tool upgrades.
**- Justification:** PRs mixing functional changes (docs, logic, config) with formatting diffs obscure the actual changes and complicate review. Formatting should be a separate, atomic commit/PR.
**- Files Affected:** All source files (`.svelte`, `.css`, `.ts`, `.js`)

## IGNORE: Complex CI/CD Logic

**- Pattern:** Adding `.github/workflows/autorelease.yml` with complex steps like self-mutation (committing changes from CI) or automated PR creation.
**- Justification:** Attempts to introduce complex CI/CD workflows involving codegen-and-commit loops or automated release management have been consistently rejected.
**- Files Affected:** `.github/workflows/autorelease.yml`

## IGNORE: Redundant Tooling

**- Pattern:** Adding new linters or formatters (specifically `dprint`) when an equivalent tool (Prettier) is already established.
**- Justification:** The project has standardized on Prettier. Proposals to add dprint were rejected.
**- Files Affected:** `mise.toml`, `package.json`, `dprint.json`
