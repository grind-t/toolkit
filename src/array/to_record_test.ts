import { describe, it } from "@std/testing/bdd";
import { toRecord } from "./to_record.ts";
import { assertEquals } from "@std/assert";

describe("toRecord", () => {
  it("should convert array of strings to a record mapping each string to index", () => {
    const input = ["a", "b", "c"];
    const result = toRecord(input);
    assertEquals(result, { a: 0, b: 1, c: 2 });
  });

  it("should convert array of objects to a record using custom keySelector", () => {
    const input = [
      { id: "x", value: 10 },
      { id: "y", value: 20 },
    ];
    const result = toRecord(input, (item) => item.id);
    assertEquals(result, { x: input[0], y: input[1] });
  });

  it("should convert array of numbers to a record using custom selectors", () => {
    const input = [1, 2, 3];
    const result = toRecord(
      input,
      (_item, idx) => `key${idx}`,
      (item) => item * 10,
    );
    assertEquals(result, { key0: 10, key1: 20, key2: 30 });
  });
});
