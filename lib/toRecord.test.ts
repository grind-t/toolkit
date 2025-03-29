import { it, expect } from "vitest";
import { toRecord } from "./toRecord.ts";

it("should convert array of strings to a record mapping each string to index", () => {
  const input = ["a", "b", "c"];
  const result = toRecord(input);
  expect(result).toEqual({ a: 0, b: 1, c: 2 });
});

it("should convert array of objects to a record using custom keySelector", () => {
  const input = [
    { id: "x", value: 10 },
    { id: "y", value: 20 },
  ];
  const result = toRecord(input, (item) => item.id);
  expect(result).toEqual({ x: input[0], y: input[1] });
});

it("should convert array of numbers to a record using custom selectors", () => {
  const input = [1, 2, 3];
  const result = toRecord(
    input,
    (_item, idx) => `key${idx}`,
    (item) => item * 10
  );
  expect(result).toEqual({ key0: 10, key1: 20, key2: 30 });
});
