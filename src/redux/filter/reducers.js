import { FILTER_CONTACTS } from "../filter/type";

const initialState = "";
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;
    default:
      return state;
  }
};
