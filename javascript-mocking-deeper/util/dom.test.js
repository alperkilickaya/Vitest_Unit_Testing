/**
 * @vitest-environment happy-dom
 */

import fs from "fs";
import path from "path";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

describe("showError", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocumentContent);
  });

  it("should add an error message to the id='errors' element   ", () => {
    // Arrange
    const message = "An error occurred";

    // Act
    showError(message);

    // Assert
    const errorContainerElement = document.getElementById("errors");
    expect(errorContainerElement.children.length).toBe(1);
    expect(errorContainerElement.children[0].textContent).toBe(message);
  });
  it("should not contain an error paragraph element if the message is empty", () => {
    const errorContainerElement = document.getElementById("errors");
    const errorParagraph = errorContainerElement.firstElementChild;

    expect(errorParagraph).toBeNull();
  });
});
