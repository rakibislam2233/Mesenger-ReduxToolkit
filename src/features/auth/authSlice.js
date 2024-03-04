import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLooggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLooggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});
export const { userLooggedIn, userLooggedOut } = authSlice.actions;
export default authSlice.reducer;
