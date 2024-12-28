import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

// mocking the sendDataRequest function return value
// also this is a mocked json data that the fetch will return
// this will be same as the response data that the fetch will return in real scenario
const testResponseData = { testKey: "testData" };

// mocking the fetch function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      reject("Not a string");
    }
    // create a test response object which fetch will return
    const testResponse = {
      ok: true,
      //  in sendDataRequest function "await response.json();" line will return this data
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    // resolve the fetch promise with the mock response.
    // This is the mock response that the fetch  will return. so this will be used in sendDataRequest function
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", async () => {
  const testData = { key: "test" };

  /* This test verifies that the sendDataRequest function:
Works with the mocked fetch function,
Processes the mocked fetch response correctly,
Returns the expected testResponseData result. But this testResponseData should be adapted according to the response expected from the API in the real project.
*/

  await expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };

  await sendDataRequest(testData);

  expect(testFetch).toHaveBeenCalledWith("https://dummy-site.dev/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testData),
  });
});

it("should throw HttpError if the response is not ok", async () => {
  const testData = { key: "test" };
  // replace the testResponse object with a new object with ok: false
  const testResponse = {
    ok: false,
    json() {
      return new Promise((resolve, reject) => {
        resolve(testResponseData);
      });
    },
  };

  // replace the testFetch function with a new function that returns the new testResponse object just for this test
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      resolve(testResponse);
    });
  });

  await expect(sendDataRequest(testData)).rejects.toThrowError(HttpError);
});
