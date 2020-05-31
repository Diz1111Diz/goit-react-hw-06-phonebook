import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./action";

export default createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});
