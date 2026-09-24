import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { mergeBy } from "./merge-by.ts";

describe("mergeBy", () => {
  it("should merge objects with equal key values", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const profiles = [
      { userId: 2, age: 30 },
      { userId: 1, age: 25 },
    ];
    const result = users.flatMap(mergeBy("id", "userId", profiles));
    assert.deepEqual(result, [
      { id: 1, name: "Alice", userId: 1, age: 25 },
      { id: 2, name: "Bob", userId: 2, age: 30 },
    ]);
  });

  it("should return the original object when there is no match", () => {
    const users = [{ id: 1, name: "Alice" }];
    const result = users.flatMap(mergeBy("id", "userId", [{ userId: 2, age: 30 }]));
    assert.equal(result[0], users[0]);
  });

  it("should override fields of the first object with fields of the second", () => {
    const left = [{ id: 1, value: "left" }];
    const right = [{ id: 1, value: "right" }];
    const result = left.flatMap(mergeBy("id", "id", right));
    assert.deepEqual(result, [{ id: 1, value: "right" }]);
  });

  it("should duplicate the object for each match in the second array", () => {
    const left = [{ id: 1 }, { id: 2 }];
    const right = [
      { key: 1, value: "first" },
      { key: 2, value: "other" },
      { key: 1, value: "second" },
    ];
    const result = left.flatMap(mergeBy("id", "key", right));
    assert.deepEqual(result, [
      { id: 1, key: 1, value: "first" },
      { id: 1, key: 1, value: "second" },
      { id: 2, key: 2, value: "other" },
    ]);
  });

  it("should prefix fields of the second object when prefix is given", () => {
    const users = [{ id: 1, name: "Alice" }];
    const profiles = [{ userId: 1, name: "alice99", age: 25 }];
    const result = users.flatMap(mergeBy("id", "userId", profiles, "profile"));
    assert.deepEqual(result, [
      { id: 1, name: "Alice", profileUserId: 1, profileName: "alice99", profileAge: 25 },
    ]);
  });
});
