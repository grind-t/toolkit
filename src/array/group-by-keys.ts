type AllKeys<T> = T extends unknown ? keyof T : never;

type GroupByKeys<T> = {
	[K in AllKeys<T>]: Extract<T, Record<K, unknown>>[K][];
} & {};

export function groupByKeys<T extends Record<string, unknown>>(
	array: T[],
): GroupByKeys<T> {
	const result: Record<string, unknown[]> = {};

	for (const obj of array) {
		for (const [k, v] of Object.entries(obj)) {
			(result[k] ??= []).push(v);
		}
	}

	return result as GroupByKeys<T>;
}
