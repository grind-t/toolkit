import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { unique } from "./unique.ts";

describe("unique", () => {
  it("should return unique primitive values preserving order", () => {
    const input = [1, 2, 2, 3, 1];
    const result = unique(input);
    assert.deepEqual(result, [1, 2, 3]);
  });

  it("should return empty array for empty input", () => {
    assert.deepEqual(unique([]), []);
  });

  it("should return unique items by keySelector keeping the first occurrence", () => {
    const input = [
      { id: "x", value: 1 },
      { id: "y", value: 2 },
      { id: "x", value: 3 },
    ];
    const result = unique(input, (item) => item.id);
    assert.deepEqual(result, [input[0], input[1]]);
  });

  it("should not mutate the input array", () => {
    const input = [1, 1, 2];
    unique(input);
    assert.deepEqual(input, [1, 1, 2]);
  });
});
