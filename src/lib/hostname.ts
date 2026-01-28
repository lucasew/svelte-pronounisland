import { page } from '$app/stores';
import { derived } from 'svelte/store';

/**
 * Derived store that returns the origin (protocol + host) of the current page.
 * Useful for constructing absolute URLs for sharing or SEO.
 */
const hostname = derived([page], ([page]) => page.url.origin);

export default hostname;
