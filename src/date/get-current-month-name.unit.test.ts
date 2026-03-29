import assert from "node:assert/strict";
import { after, before, describe, it, mock } from "node:test";
import { getCurrentMonthName } from "./get-current-month-name.ts";

const fixedDate = new Date("2021-01-15");

before(() => {
	mock.timers.enable({ apis: ["Date"], now: fixedDate });
});

after(() => {
	mock.timers.reset();
});

describe("getCurrentMonthName", () => {
	it("should return the current month name in default locale", (t) => {
		t.mock.getter(navigator, "language", () => "en-US");
		const monthName = getCurrentMonthName();
		assert.equal(monthName, "january");
	});

	it("should return the correct month name for a given locale", () => {
		const monthName = getCurrentMonthName("ru-RU");
		assert.equal(monthName, "январь");
	});
});
