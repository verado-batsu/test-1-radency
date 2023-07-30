export function limit(str, limit) {
	return str.length > limit
		? str.substring(0, limit - 3) + '...'
		: str
}