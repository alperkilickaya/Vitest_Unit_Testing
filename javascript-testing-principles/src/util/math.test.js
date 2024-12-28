import { describe, it, expect } from "vitest";
import { add } from "../math";

describe("add", () => {
  it("should return the sum of an array of numbers", () => {
    // Arrange
    const numbers = [1, 2, 3, 4];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((acc, num) => acc + num, 0);
    expect(result).toBe(expectedResult);
  });

  it("should return 0 for an empty array", () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
  });

  it("should handle negative numbers", () => {
    // Arrange
    const numbers = [-1, -2, -3, -4];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((acc, num) => acc + num, 0);
    expect(result).toBe(expectedResult);
  });

  it("should handle a mix of positive and negative numbers", () => {
    // Arrange
    const numbers = [1, -2, 3, -4];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((acc, num) => acc + num, 0);
    expect(result).toBe(expectedResult);
  });

  it("should yield Nan for non-numeric values", () => {
    // Arrange
    const numbers = [1, "a", 3, 4];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
  });

  it("should yield a correct sum when all of inputs are non-numeric values", () => {
    // Arrange
    const numbers = ["1", "2", "3", "4"];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((acc, num) => +acc + +num, 0);
    expect(result).toBe(expectedResult);
  });

  it("should throw an error if no value is passed into function", () => {
    // Act
    const resultFN = () => {
      add();
    };

    // Assert
    expect(resultFN).toThrow();
  });

  it("should throw an error if a non-array value is passed into function", () => {
    // Arrange
    const num1 = 1;
    const num2 = 2;

    // Act
    const resultFN = () => {
      add(num1, num2);
    };

    // Assert
    expect(resultFN).toThrow(/is not iterable/);
  });
});
