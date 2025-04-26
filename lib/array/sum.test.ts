import { it, expect } from "vitest";
import { sum } from "./sum.ts";

it("should return sum of numbers when identity selector is used", () => {
  const result = sum([1, 2, 3, 4]);
  expect(result).toEqual(10);
});

it("should return 0 for an empty array", () => {
  const result = sum([]);
  expect(result).toEqual(0);
});

it("should work with objects using a numeric property", () => {
  const items = [{ value: 5 }, { value: 10 }, { value: 15 }];
  const result = sum(items, (item) => item.value);
  expect(result).toEqual(30);
});
