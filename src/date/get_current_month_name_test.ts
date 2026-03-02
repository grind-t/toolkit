import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { stubProperty } from "@std/testing/unstable-stub-property";
import { FakeTime } from "@std/testing/time";
import { getCurrentMonthName } from "./get_current_month_name.ts";

describe("getCurrentMonthName", () => {
  const fixedDate = new Date("2021-01-15");

  it("should return the current month name in default locale", () => {
    using _time = new FakeTime(fixedDate);
    using _lang = stubProperty(navigator, "language", "en-US");
    const monthName = getCurrentMonthName();
    assertEquals(monthName, "january");
  });

  it("should return the correct month name for a given locale", () => {
    using _time = new FakeTime(fixedDate);
    const monthName = getCurrentMonthName("ru-RU");
    assertEquals(monthName, "январь");
  });
});
