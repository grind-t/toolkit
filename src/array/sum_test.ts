import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { sum } from "./sum.ts";

describe("sum", () => {
  it("should return sum of numbers when identity selector is used", () => {
    const result = sum([1, 2, 3, 4]);
    assertEquals(result, 10);
  });

  it("should return 0 for an empty array", () => {
    const result = sum([]);
    assertEquals(result, 0);
  });

  it("should work with objects using a numeric property", () => {
    const items = [{ value: 5 }, { value: 10 }, { value: 15 }];
    const result = sum(items, (item) => item.value);
    assertEquals(result, 30);
  });
});
