import { lowerFirst } from "./lower_first.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

describe("lowerFirst", () => {
  it("should convert the first letter to lowercase", () => {
    assertEquals(lowerFirst("ABC"), "aBC");
  });

  it("should return an empty string when input is empty", () => {
    assertEquals(lowerFirst(""), "");
  });

  it("should keep the string unchanged if the first letter is already lowercase", () => {
    assertEquals(lowerFirst("abc"), "abc");
  });
});
