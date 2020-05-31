import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, updateFormLocalStorage } from "./action";

export default createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [updateFormLocalStorage]: (state, { payload }) => [...state, ...payload],
});
