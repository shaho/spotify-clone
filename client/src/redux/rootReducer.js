import { combineReducers } from "redux";

import browseReducer from "./browse/reducer";
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
  search: searchReducer,
});

export default rootReducer;
