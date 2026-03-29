import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { lowerFirst } from "./lower-first.ts";

describe("lowerFirst", () => {
	it("should convert the first letter to lowercase", () => {
		assert.equal(lowerFirst("ABC"), "aBC");
	});

	it("should return an empty string when input is empty", () => {
		assert.equal(lowerFirst(""), "");
	});

	it("should keep the string unchanged if the first letter is already lowercase", () => {
		assert.equal(lowerFirst("abc"), "abc");
	});
});
