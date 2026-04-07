export type AddSuffixToKeys<T, S extends string> = {
	[K in keyof T as `${string & K}${S}`]: T[K];
} & {};

export function addSuffixToKeys<T extends object, S extends string>(
	obj: T,
	suffix: S,
): AddSuffixToKeys<T, S> {
	return Object.fromEntries(
		Object.entries(obj).map(([k, v]) => [k + suffix, v]),
	) as AddSuffixToKeys<T, S>;
}
