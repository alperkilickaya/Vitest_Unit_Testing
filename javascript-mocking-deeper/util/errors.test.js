import { describe, it, expect } from "vitest";
import { HttpError } from "./errors";

describe("class HttpError", () => {
  it("should create an instance of HttpError with the correct properties", () => {
    // Arrange
    const statusCode = 404;
    const message = "Not found";
    const data = { id: 1 };

    // Act
    const testError = new HttpError(statusCode, message, data);

    // Assert
    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBe(data);
  });
});

describe("class ValidationError", () => {
  it("should create an instance of ValidationError with the correct properties", () => {
    // Arrange
    const message = "Invalid input";

    // Act
    const testError = new ValidationError(message);

    // Assert
    expect(testError.message).toBe(message);
  });
});
