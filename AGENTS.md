# Project Conventions

## Error Handling

- **Never Ignore Errors**: Empty `catch` blocks or silent failures are strictly forbidden.
- **Centralized Error Reporting**: All unexpected errors must be reported via `src/lib/error.ts` using the `reportError` function.
- **No Direct Console Logging**: Do not use `console.error` or `Sentry.captureException` directly in feature code. Always tunnel through `reportError`.
- **Sentry Integration**: The `reportError` function will handle Sentry reporting if configured. Call sites should not be aware of the backend.
