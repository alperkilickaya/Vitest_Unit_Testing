import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber", () => {
  it("should return a number when given a number as a string", () => {
    // Arrange
    const value = "123";

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBe(123);
  });

  it("should return a number type", () => {
    // Arrange
    const value = "123";

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBeTypeOf("number");
  });

  it("should return NaN when given a non-numeric string", () => {
    // Arrange
    const value1 = "abc";
    const value2 = {};

    // Act
    const result1 = transformToNumber(value1);
    const result2 = transformToNumber(value2);

    // Assert
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
  });

  it("should return a number when given a number as a string with leading and trailing whitespace", () => {
    // Arrange
    const value = " 123 ";

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBe(123);
  });
});

describe("cleanNumbers", () => {
  it("sould return an array of number values if an array of string number values is provided", () => {
    // Arrange
    const numberValues = ["1", "4"];

    // Act
    const result = cleanNumbers(numberValues);

    // Assert
    expect(result[0]).toBeTypeOf("number");
    expect(result).toStrictEqual([1, 4]);
  });
  it("should return an array of numbers when given an array of number strings", () => {
    // Arrange
    const numberValues = ["123", "456"];

    // Act
    const result = cleanNumbers(numberValues);

    // Assert
    expect(result).toEqual([123, 456]);
  });

  it("should throw an error when given an empty string", () => {
    // Arrange
    const numberValues = [""];

    // Act
    const result = () => cleanNumbers(numberValues);

    // Assert
    expect(result).toThrow();
  });

  it("should throw an error when given a non-numeric string", () => {
    // Arrange
    const numberValues = ["abc"];

    // Act
    const result = () => cleanNumbers(numberValues);

    // Assert
    expect(result).toThrow();
  });

  it("should throw an error when given an object", () => {
    // Arrange
    const numberValues = [{}];

    // Act
    const result = () => cleanNumbers(numberValues);

    // Assert
    expect(result).toThrow();
  });
});
