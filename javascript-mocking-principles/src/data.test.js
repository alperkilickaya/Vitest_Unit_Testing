import { describe, expect, it, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData", () => {
  it("should execute logFn if provided", () => {
    // Arrange
    const logFn = vi.fn();

    // Act
    generateReportData(logFn);
    // Assert
    expect(logFn).toHaveBeenCalled();
    expect(logFn).toHaveBeenCalledTimes(1);
    expect(logFn).toHaveBeenCalledWith("Some dummy data for this demo app");
  });
});
