import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { ValidateProfileError } from "../../types/profile";

import { updateProfileData } from "./updateProfileData";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "rostik",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
  id: "1",
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockResolvedValue({ data });

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockRejectedValue({ response: { status: 403 } });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: "" } },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
