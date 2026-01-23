import { describe, it, expect, vi } from 'vitest';
import { handle } from './hooks.server';

describe('Security Headers', () => {
	it('should set security headers', async () => {
		const event = {} as any; // Mock event
		const resolve = vi.fn().mockResolvedValue(new Response('ok'));

		const response = await handle({ event, resolve });

		expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
		expect(response.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');

		// These are the ones we are ADDING
		expect(response.headers.get('Strict-Transport-Security')).toBe(
			'max-age=31536000; includeSubDomains'
		);
		expect(response.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
		expect(response.headers.get('Permissions-Policy')).toBe(
			'camera=(), microphone=(), geolocation=()'
		);
	});
});
