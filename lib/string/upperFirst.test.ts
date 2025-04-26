import { describe, it, expect } from "vitest";
import { upperFirst } from "./upperFirst";

it("should convert first letter to uppercase for lowercase string", () => {
  expect(upperFirst("abc")).toBe("Abc");
});

it("should not change the string if first letter is already uppercase", () => {
  expect(upperFirst("Abc")).toBe("Abc");
});

it("should return an empty string if given an empty string", () => {
  expect(upperFirst("")).toBe("");
});
