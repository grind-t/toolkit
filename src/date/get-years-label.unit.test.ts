import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getYearsLabel } from "./get-years-label.ts";

describe("getYearsLabel", () => {
	it('returns "years" for 0 (en)', () => {
		assert.equal(getYearsLabel(0, "en-US"), "years");
	});

	it('returns "year" for 1 (en)', () => {
		assert.equal(getYearsLabel(1, "en-US"), "year");
	});

	it('returns "years" for 2 (en)', () => {
		assert.equal(getYearsLabel(2, "en-US"), "years");
	});

	it('returns "лет" for 0 (ru)', () => {
		assert.equal(getYearsLabel(0, "en-US"), "years");
	});

	it('returns "год" for 1 (ru)', () => {
		assert.equal(getYearsLabel(1, "ru-RU"), "год");
	});

	it('returns "года" for 2 (ru)', () => {
		assert.equal(getYearsLabel(2, "ru-RU"), "года");
	});

	it('returns "лет" for 5 (ru)', () => {
		assert.equal(getYearsLabel(5, "ru-RU"), "лет");
	});
});
