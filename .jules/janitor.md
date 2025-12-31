# Janitor's Journal

This journal is for tracking CRITICAL refactoring learnings in this codebase.

## 2024-07-29 - ESLint Flat Config Migration and Svelte Parser Fixes
**Issue:** The linter was failing due to an outdated ESLint configuration (`.eslintrc.cjs`) that was incompatible with ESLint v9. Additionally, Svelte file parsing was failing, and the codebase had widespread formatting inconsistencies.
**Root Cause:** The project's developer tooling had not been updated to align with the modern ESLint flat config system. A Svelte component was also using an incorrect, non-standard attribute (`<script type="ts">`) for its script tag, which the parser rejected.
**Solution:** I migrated the configuration to a modern `eslint.config.cjs` file, correctly setting up the parsers and plugins for JavaScript, TypeScript, and Svelte. I also corrected the invalid Svelte script tag to the standard `<script lang="ts">`. Finally, I ran the formatter across the entire codebase to ensure consistency.
**Pattern:** When ESLint fails with configuration errors, verify compatibility with the installed version (e.g., ESLint v9+ requires flat config). For Svelte projects, ensure the `svelte-eslint-parser` is correctly configured and that components use the standard `lang="ts"` attribute for TypeScript script blocks.
