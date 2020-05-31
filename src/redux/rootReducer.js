import { combineReducers } from "redux";

import contacts from "./contacts/reducers";
import filter from "./filter/reducers";

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
