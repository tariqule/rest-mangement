import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fecvh", async () => {
  const fetch = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((user) => user.data);
  console.log("fetch", fetch);
  return fetch;
});

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
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      console.log("ACTION pending==>", action);
    },
    [fetchUser.fulfilled]: (state, action) => {
      console.log("ACTION fulfilled==>", action);
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("ACTION rejected==>", action);
    },
  },
});
//hello

export const selectUser = (state) => state.user;

export default userSlice.reducer;
