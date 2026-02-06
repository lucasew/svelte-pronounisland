import { reportError } from '$lib/error';
import type { Handle, HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = ({ error, event }) => {
	reportError(error, {
		url: event.url.toString(),
		route: event.route.id
	});

	return {
		message: 'Internal Server Error'
	};
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	return response;
};
