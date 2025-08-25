import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";


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


describe("getAPIKey", () => {
	const header : IncomingHttpHeaders = { authorization: "ApiKey abc123" };
	test("header is defined", () => { 
		expect(header).toBeDefined();
	});

	test("getAPIKey returns token", () => {
		expect(getAPIKey(header)).toBe("abc123");
	});

	test("getAPIKey returns null", () => {
		expect(getAPIKey({})).toBe(null);
	});
  
});
});

