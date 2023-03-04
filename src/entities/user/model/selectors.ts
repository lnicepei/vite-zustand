import { UserSlice } from "./store";

export const getUserName = (state: UserSlice) => state.name;
export const getUserToken = (state: UserSlice) => state.token;