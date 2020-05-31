import { FILTER_CONTACTS } from "../filter/type";

export const filterContact = (e) => ({
  type: FILTER_CONTACTS,
  payload: e.target.value,
});
