import { createSlice } from "@reduxjs/toolkit";

const userState = {
  name: "",
  das: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    storeUserName(state, action) {
      state.name = action.payload;
    },
  },
});
//hello

export const selectUser = (state) => state.user;

export default userSlice.reducer;
