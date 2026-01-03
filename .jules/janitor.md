## 2024-08-16 - Separate Configuration from Formatting

**Issue:** A pull request to fix a deprecated Prettier configuration was rejected.

**Root Cause:** The initial fix correctly updated the configuration files but also included a project-wide reformatting of the code. This violated the "Janitor" principle of making small, focused changes and created a large, noisy diff that obscured the core improvement.

**Solution:** The change was split into two distinct concerns. The final, accepted pull request contained *only* the configuration changes to `.prettierrc` and `package.json`, without any of the stylistic reformatting.

**Pattern:** When fixing a configuration issue (e.g., in linters, formatters, build tools), do not bundle the fix with the *effects* of running that tool. A configuration change should be a small, verifiable, and isolated commit. Applying the formatting changes should be a separate, deliberate action, and only when it aligns with the project's current goals and doesn't violate the "keep changes small" principle.
