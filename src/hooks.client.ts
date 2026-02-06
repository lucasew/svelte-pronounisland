import { reportError } from '$lib/error';
import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error, event }) => {
	reportError(error, {
		url: event.url.toString(),
		route: event.route.id
	});

	return {
		message: 'Internal Client Error'
	};
};
