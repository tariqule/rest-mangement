// store.ts

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import userReducer from "./slices/user";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  user: userReducer,
});

const makeStore = (props) => {
  if (props.isServer) {
    return configureStore({
      reducer: combinedReducer,
      // middleware: applyMiddleware([thunkMiddleware]),
      devTools: process.env.NODE_ENV !== "production",
    });
  } else {
    const store = configureStore({
      reducer: combinedReducer,
      // middleware: applyMiddleware([thunkMiddleware]),
      devTools: process.env.ENV !== "production",
    });
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
