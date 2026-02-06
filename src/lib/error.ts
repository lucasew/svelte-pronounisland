/**
 * Centralized error reporting function.
 * All unexpected errors should be reported through this function.
 */
export function reportError(error: unknown, meta?: Record<string, unknown>): void {
	// In the future, Sentry logic goes here.
	// For now, we log to console in a structured way to ensure we capture context.
	// We use console.error so it shows up as an error in logs.
	const errorObject = {
		message: error instanceof Error ? error.message : String(error),
		stack: error instanceof Error ? error.stack : undefined,
		...meta
	};

	console.error('[Error Report]', JSON.stringify(errorObject, null, 2));
}
