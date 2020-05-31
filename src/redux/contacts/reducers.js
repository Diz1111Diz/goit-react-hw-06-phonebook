import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./type";

const initialState = [];
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload);
    case UPDATE_CONTACT:
      return [...state, ...payload];
    default:
      return state;
  }
};
