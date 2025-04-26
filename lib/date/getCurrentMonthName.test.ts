import { it, expect, vi, beforeAll, afterAll } from "vitest";
import { getCurrentMonthName } from "./getCurrentMonthName";

const fixedDate = new Date("2021-01-15");

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(fixedDate);
});

afterAll(() => {
  vi.useRealTimers();
});

it("should return the current month name in default locale", () => {
  const spy = vi.spyOn(navigator, "language", "get").mockReturnValue("en-US");
  const monthName = getCurrentMonthName();
  expect(monthName).toBe("january");
  spy.mockRestore();
});

it("should return the correct month name for a given locale", () => {
  const monthName = getCurrentMonthName("ru-RU");
  expect(monthName).toBe("январь");
});
