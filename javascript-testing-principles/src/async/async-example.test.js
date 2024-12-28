import { expect, it, describe } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token", () =>
  new Promise((resolve, reject) => {
    // Arrange
    const userEmail = "test@test.com";

    // Act
    generateToken(userEmail, (error, token) => {
      console.log("token", token);
      // Assert
      try {
        expect(typeof token).toBeTypeOf("string");
        expect(token).not.toBe("");
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }));

it("should generate a token using a promise", async () => {
  // Arrange
  const userEmail = "test@test.com";

  await expect(generateTokenPromise(userEmail)).resolves.toBeTypeOf("string");
  await expect(generateTokenPromise(userEmail)).resolves.not.toBe("");
});

it("should generate a token using a promise", async () => {
  // Arrange
  const userEmail = "test@test.com";

  const token = await generateTokenPromise(userEmail);

  expect(token).toBeTypeOf("string");
  expect(token).not.toBe("");
});
