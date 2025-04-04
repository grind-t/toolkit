export type Nullish = null | undefined;

export function isNullish<T>(value: T | Nullish): value is Nullish {
  return value === undefined || value === null;
}
