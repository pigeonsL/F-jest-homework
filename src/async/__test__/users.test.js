import axios from "axios";
import Users from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    const users = [{ name: "Bob" }];
    const response = { data: users };
    axios.get.mockImplementation(() => Promise.resolve(response));
    return Users().then((data) => expect(data).toEqual(users));
    // TODO 13: add async test with manual mock
  });
});
