import { lowerFirst } from "./lowerFirst";
import { it, expect } from "vitest";

it("should convert the first letter to lowercase", () => {
  expect(lowerFirst("ABC")).toBe("aBC");
});

it("should return an empty string when input is empty", () => {
  expect(lowerFirst("")).toBe("");
});

it("should keep the string unchanged if the first letter is already lowercase", () => {
  expect(lowerFirst("abc")).toBe("abc");
});
