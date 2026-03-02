import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { iterSegments } from "./iter_segments.ts";

describe("iterSegments", () => {
  it("yields one segment when start and end are found", () => {
    const result = Array.from(
      iterSegments([0, 1, 2, 3, 4], {
        start: ({ value }) => value === 1,
        end: ({ value }) => value === 4,
      }),
    );

    assertEquals(result, [[1, 2, 3]]);
  });

  it("yields multiple segments in one pass", () => {
    const result = Array.from(
      iterSegments([0, 1, 2, 9, 1, 5, 9], {
        start: ({ value }) => value === 1,
        end: ({ value }) => value === 9,
      }),
    );

    assertEquals(result, [[1, 2], [1, 5]]);
  });

  it("returns no segments when start never matches", () => {
    const result = Array.from(
      iterSegments([1, 2, 3], {
        start: () => false,
        end: () => true,
      }),
    );

    assertEquals(result, []);
  });

  it("does not yield trailing open segment if end never matches", () => {
    const result = Array.from(
      iterSegments([0, 1, 2, 3], {
        start: ({ value }) => value === 1,
        end: () => false,
      }),
    );

    assertEquals(result, []);
  });

  it("handles empty iterable and never calls callbacks", () => {
    let startCalls = 0;
    let endCalls = 0;

    const result = Array.from(
      iterSegments<number, number[]>([], {
        start: () => {
          startCalls++;
          return false;
        },
        end: () => {
          endCalls++;
          return false;
        },
      }),
    );

    assertEquals(result, []);
    assertEquals(startCalls, 0);
    assertEquals(endCalls, 0);
  });

  it("does not check end on the same iteration where start matches", () => {
    const result = Array.from(
      iterSegments([5, 6], {
        start: ({ value }) => value === 5,
        end: ({ value }) => value === 5,
      }),
    );

    assertEquals(result, []);
  });
});
