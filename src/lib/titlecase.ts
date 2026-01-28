/**
 * Converts a string to title case.
 *
 * Behavior:
 * - Capitalizes the first character.
 * - Converts the rest of the string to lowercase.
 * - Returns an empty string if the input is empty.
 *
 * @param str - The string to convert.
 * @returns The title-cased string.
 */
function titlecase(str: string) {
	if (str.length == 0) {
		return '';
	}
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default titlecase;
