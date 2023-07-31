export function findDateInText(text) {
	const regexp = /\d{1,2}\/\d{1,2}\/\d{4}/g;

	const result = text.match(regexp)?.join(', ');
	return result || '';
}