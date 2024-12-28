import { describe, expect, it, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test title";
const testContent = "Test content";
let testFormData;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  it("should return an object with title and content properties", () => {
    // we use testFormData to simulate the form object
    const postData = extractPostData(testFormData);

    // Assert
    expect(postData).toEqual({ title: testTitle, content: testContent });
  });
});
