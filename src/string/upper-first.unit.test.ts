import assert from "node:assert";
import { describe, it } from "node:test";
import { upperFirst } from "./upper-first.ts";

describe("upperFirst", () => {
	it("should convert first letter to uppercase for lowercase string", () => {
		assert.equal(upperFirst("abc"), "Abc");
	});

	it("should not change the string if first letter is already uppercase", () => {
		assert.equal(upperFirst("Abc"), "Abc");
	});

	it("should return an empty string if given an empty string", () => {
		assert.equal(upperFirst(""), "");
	});
});
