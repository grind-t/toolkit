import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { addSuffixToKeys } from "./add-suffix-to-keys.ts";

describe("addSuffixToKeys", () => {
	it("should add suffix to all keys", () => {
		const result = addSuffixToKeys({ a: 1, b: 2 }, "_x");
		assert.deepEqual(result, { a_x: 1, b_x: 2 });
	});

	it("should return empty object for empty input", () => {
		const result = addSuffixToKeys({}, "_x");
		assert.deepEqual(result, {});
	});

	it("should return object unchanged when suffix is empty string", () => {
		const result = addSuffixToKeys({ a: 1, b: 2 }, "");
		assert.deepEqual(result, { a: 1, b: 2 });
	});
});
