import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT");
export const deleteContact = createAction("DELETE_CONTACT");
export const updateFormLocalStorage = createAction("UPDATE_CONTACT");
