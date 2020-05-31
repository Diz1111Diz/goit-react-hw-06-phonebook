import { configureStore } from "@reduxjs/toolkit";

import contacts from "./contacts/reducers";
import filter from "./filter/reducers";

const rootModules = {
  contacts,
  filter,
};

const store = configureStore({
  reducer: rootModules,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
