import { it, expect } from "vitest";
import { splitSettled } from "./splitSettled.ts";

it("returns all fulfilled values if no promise rejects", async (t) => {
  const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  const [fulfilled, rejected] = await splitSettled(promises);
  expect(fulfilled).toEqual([1, 2, 3]);
  expect(rejected).toEqual([]);
});

it("separates fulfilled and rejected promises", async (t) => {
  const err = new Error("failure");
  const promises = [Promise.resolve("success"), Promise.reject(err)];
  const [fulfilled, rejected] = await splitSettled(promises);
  expect(fulfilled).toEqual(["success"]);
  expect(rejected).toEqual([err]);
});

it("returns empty arrays when given no promises", async (t) => {
  const [fulfilled, rejected] = await splitSettled([]);
  expect(fulfilled).toEqual([]);
  expect(rejected).toEqual([]);
});
