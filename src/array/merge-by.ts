import { upperFirst } from "../string/upper-first.ts";

type Prefixed<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${P extends "" ? K : Capitalize<K>}` : K]: T[K];
};

export function mergeBy<T extends object, U extends object, P extends string = "">(
  leftKey: keyof T,
  rightKey: keyof U,
  right: U[],
  prefix?: P,
): (item: T) => (T & Partial<Prefixed<U, P>>)[] {
  const index = new Map<unknown, Prefixed<U, P>[]>();

  for (const obj of right) {
    const key = obj[rightKey];
    const value = prefix
      ? Object.fromEntries(Object.entries(obj).map(([k, v]) => [prefix + upperFirst(k), v]))
      : obj;
    let matches = index.get(key);
    if (!matches) index.set(key, (matches = []));
    matches.push(value as Prefixed<U, P>);
  }

  return (item) => {
    const matches = index.get(item[leftKey]);
    return matches ? matches.map((match) => ({ ...item, ...match })) : [item];
  };
}
