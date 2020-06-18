import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "mocked username";
    const mockpassword = "mocked password";

    await expect(register(mockUsername, mockpassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const mockPassword = "mocked password";
    const mockUsername = "mocked username";

    await expect(register(mockUsername, mockPassword)).rejects.toThrowError(
        Error("wrong username or password")
    );
  });
});
