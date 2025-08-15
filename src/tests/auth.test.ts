import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 13,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });

  test("is minor", () => {
    expect(person.age).toBeLessThanOrEqual(18);
  });
});