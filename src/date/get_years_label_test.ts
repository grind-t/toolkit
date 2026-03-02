import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { getYearsLabel } from "./get_years_label.ts";

describe("getYearsLabel", () => {
  it('returns "years" for 0 (en)', () => {
    assertEquals(getYearsLabel(0, "en-US"), "years");
  });

  it('returns "year" for 1 (en)', () => {
    assertEquals(getYearsLabel(1, "en-US"), "year");
  });

  it('returns "years" for 2 (en)', () => {
    assertEquals(getYearsLabel(2, "en-US"), "years");
  });

  it('returns "лет" for 0 (ru)', () => {
    assertEquals(getYearsLabel(0, "en-US"), "years");
  });

  it('returns "год" for 1 (ru)', () => {
    assertEquals(getYearsLabel(1, "ru-RU"), "год");
  });

  it('returns "года" for 2 (ru)', () => {
    assertEquals(getYearsLabel(2, "ru-RU"), "года");
  });

  it('returns "лет" for 5 (ru)', () => {
    assertEquals(getYearsLabel(5, "ru-RU"), "лет");
  });
});
