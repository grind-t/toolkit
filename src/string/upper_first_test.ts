import { it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { upperFirst } from "./upper_first.ts";

it("should convert first letter to uppercase for lowercase string", () => {
  assertEquals(upperFirst("abc"), "Abc");
});

it("should not change the string if first letter is already uppercase", () => {
  assertEquals(upperFirst("Abc"), "Abc");
});

it("should return an empty string if given an empty string", () => {
  assertEquals(upperFirst(""), "");
});
