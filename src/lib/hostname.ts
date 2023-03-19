import { browser } from '$app/environment'; 
const hostname = !browser ? "default" : window.location.origin

export default hostname