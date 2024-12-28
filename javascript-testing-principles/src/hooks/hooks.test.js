import { it, expect, afterEach, afterAll, beforeEach, beforeAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

afterEach(() => {
  user = new User(testEmail);
});

beforeAll(() => {
  console.log("beforeAll");
});

afterAll(() => {
  console.log("afterAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  }
);
