import { describe, it, expect, vi } from 'vitest';
import { handle } from './hooks.server';

describe('hooks.server', () => {
	it('should set security headers', async () => {
		const event = {} as any; // Mock event
		const resolve = vi.fn().mockResolvedValue(new Response('ok'));

		const response = await handle({ event, resolve } as any);

		expect(response.headers.get('Permissions-Policy')).toBe(
			'camera=(), microphone=(), geolocation=(), interest-cohort=()'
		);
		expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
		expect(response.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');
	});
});
