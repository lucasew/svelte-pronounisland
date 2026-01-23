function titlecase(str: string) {
	if (str.length == 0) {
		return '';
	}
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default titlecase;
