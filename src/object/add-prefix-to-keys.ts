export type AddPrefixToKeys<T, P extends string> = {
	[K in keyof T as `${P}${string & K}`]: T[K];
} & {};

export function addPrefixToKeys<T extends object, P extends string>(
	obj: T,
	prefix: P,
): AddPrefixToKeys<T, P> {
	return Object.fromEntries(
		Object.entries(obj).map(([k, v]) => [prefix + k, v]),
	) as AddPrefixToKeys<T, P>;
}
