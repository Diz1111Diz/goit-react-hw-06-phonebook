import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./type";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const updateFormLocalStorage = (data) => ({
  type: UPDATE_CONTACT,
  payload: data,
});
