import { it, expect } from "vitest";
import { getYearsLabel } from "./getYearsLabel";

it('returns "years" for 0 (en)', () => {
  expect(getYearsLabel(0, "en-US")).toBe("years");
});

it('returns "year" for 1 (en)', () => {
  expect(getYearsLabel(1, "en-US")).toBe("year");
});

it('returns "years" for 2 (en)', () => {
  expect(getYearsLabel(2, "en-US")).toBe("years");
});

it('returns "лет" for 0 (ru)', () => {
  expect(getYearsLabel(0, "en-US")).toBe("years");
});

it('returns "год" for 1 (ru)', () => {
  expect(getYearsLabel(1, "ru-RU")).toBe("год");
});

it('returns "года" for 2 (ru)', () => {
  expect(getYearsLabel(2, "ru-RU")).toBe("года");
});

it('returns "лет" for 5 (ru)', () => {
  expect(getYearsLabel(5, "ru-RU")).toBe("лет");
});
