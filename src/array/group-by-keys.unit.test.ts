import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { groupByKeys } from "./group-by-keys.ts";

describe("groupByKeys", () => {
	it("should group values from an array of objects by their keys", () => {
		const input = [
			{ a: 1, b: "x" },
			{ a: 2, b: "y" },
		];
		const result = groupByKeys(input);
		assert.deepEqual(result, { a: [1, 2], b: ["x", "y"] });
	});

	it("should return an empty object for an empty input array", () => {
		const result = groupByKeys([]);
		assert.deepEqual(result, {});
	});

	it("should only collect values for keys present in each object", () => {
		const input = [{ a: 1, b: "x" }, { a: 2 }, { b: "z" }];
		const result = groupByKeys(input);
		assert.deepEqual(result, { a: [1, 2], b: ["x", "z"] });
	});
});
