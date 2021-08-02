import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fecvh", async () => {
  const fetch = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((user) => user.data);
  console.log("fetch", fetch);
  return fetch;
});

export const fetchNew = createAsyncThunk("user/NewKey", async () => {
  const fetch = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((user) => user.data);
  console.log("fetch", fetch);
  return fetch;
});

const userState = {
  name: "",
  userData: [],
  newData: [],
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
      state.userData = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("ACTION rejected==>", action);
    },

    [fetchNew.pending]: (state, action) => {
      console.log("New Action Pending ==>", action);
    },
    [fetchNew.fulfilled]: (state, action) => {
      //   console.log("New Action fulfilled==>", action.payload);

      state.newData = action.payload;
    },
    [fetchNew.rejected]: (state, action) => {
      console.log("New Action rejected==>", action);
    },
  },
});
//hello

export const selectUser = (state) => state.user;

export default userSlice.reducer;
