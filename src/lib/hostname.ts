import {page} from '$app/stores'
import { derived } from 'svelte/store';
const hostname = derived([page], ([page]) => page.url.origin)

export default hostname