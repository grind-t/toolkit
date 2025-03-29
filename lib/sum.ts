import { firstArgument } from "./selectors";

export function sum<T extends number>(array: number[]): number;
export function sum<T>(array: T[], selector: (item: T) => number): number;

export function sum<T>(array: T[], selector?: (item: T) => number): number {
  selector ??= firstArgument as (item: T) => number;
  return array.reduce((acc, v) => acc + selector(v), 0);
}
