## 2026-01-23 - Migrate to ESLint 9 Flat Config

**Issue:** The project was using ESLint 9 dependencies but with a legacy `.eslintrc.cjs` configuration, causing `bun run lint` to fail completely. Additionally, prettier options were misconfigured.
**Root Cause:** Incomplete migration to ESLint 9, which defaults to "flat config" (`eslint.config.js`). Legacy config requires environment variables to work with v9, but it's better to migrate.
**Solution:**

1.  Created `eslint.config.js` using `eslint-plugin-svelte`, `typescript-eslint`, and `globals`.
2.  Removed `.eslintrc.cjs` and `.eslintignore`.
3.  Fixed lint errors in Svelte files (missing keys in `#each`, incorrect script tag, internal links using `base`).
4.  Ignored vendored CSS files in `.prettierignore` to avoid massive diffs and respect "don't format untouched files" rule.
    **Pattern:** When upgrading tooling (like ESLint), ensure configuration files are migrated to the new standard to avoid "broken windows". Use `.prettierignore` for vendored assets.
