import { describe, it, expect, beforeEach } from "vitest";
import { validateNotEmpty } from "./validation";
import { ValidationError } from "./errors";

let input;
let errorMessage;
let validationFn;

describe("validateNotEmpty", () => {
  beforeEach(() => {
    validationFn = () => validateNotEmpty(input, errorMessage);
  });

  it("should throw a ValidationError if the input is an empty string", () => {
    input = "";
    errorMessage = "Input cannot be empty";

    expect(validationFn).toThrowError(ValidationError);
    expect(validationFn).toThrowError();
  });

  it("should throw a ValidationError if the input is a string with only spaces", () => {
    input = "   ";
    errorMessage = "Input cannot be empty";

    expect(validationFn).toThrowError(ValidationError);
    expect(validationFn).toThrowError();
  });

  it("should not throw an error if the input is a non-empty string", () => {
    input = "Valid input";
    errorMessage = "Input cannot be empty";

    expect(validationFn).not.toThrowError();
  });

  it("should not throw an error if the input is a string with leading and trailing spaces", () => {
    input = "  Valid input  ";
    errorMessage = "Input cannot be empty";

    expect(validationFn).not.toThrowError();
  });
  it("should throw an error with the provided error message", () => {
    input = "";
    errorMessage = "Custom error message";

    expect(validationFn).toThrowError(errorMessage);
  });
});
