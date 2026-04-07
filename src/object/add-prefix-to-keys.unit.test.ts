import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { addPrefixToKeys } from "./add-prefix-to-keys.ts";

describe("addPrefixToKeys", () => {
	it("should add prefix to all keys", () => {
		const result = addPrefixToKeys({ a: 1, b: 2 }, "x_");
		assert.deepEqual(result, { x_a: 1, x_b: 2 });
	});

	it("should return empty object for empty input", () => {
		const result = addPrefixToKeys({}, "x_");
		assert.deepEqual(result, {});
	});

	it("should return object unchanged when prefix is empty string", () => {
		const result = addPrefixToKeys({ a: 1, b: 2 }, "");
		assert.deepEqual(result, { a: 1, b: 2 });
	});
});
