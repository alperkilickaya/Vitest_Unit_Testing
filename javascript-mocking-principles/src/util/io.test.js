import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

// Mocking fs module so that we can test writeData function without writing to the file system
// Automatically mocks all methods of fs module for this test file
// Automatically hoists the mock to the top of the file
// Automatically checks for __mocks__/fs.js file first and uses it if it exists otherwise creates a mock
vi.mock("fs");

// Mocking path module so that we can test writeData function without writing to the file system
// create a default export object with a join method that returns the last argument
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

/* it("should execute writeFile method", async () => {
  const testData = "test data";
  const filename = "alper.txt";

  await expect(writeData(testData, filename)).resolves.toBeUndefined();
}); */

it("should execute writeFile method", async () => {
  const testData = "test data";
  const filename = "alper.txt";

  // Will execute the writeFile method
  await writeData(testData, filename);

  /* expect(fs.writeFile).toHaveBeenCalledTimes(1);
  expect(fs.writeFile).toHaveBeenCalledWith(
    expect.stringContaining("data"),
    testData
  ); */
  expect(fs.writeFile).toHaveBeenCalledWith(filename, testData);
});

it("should return a promise that resolves to no value if called correctly", async () => {
  const testData = "test data";
  const filename = "alper.txt";

  await expect(writeData(testData, filename)).resolves.toBeUndefined();
});
