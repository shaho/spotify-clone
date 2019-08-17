import { combineReducers } from "redux";

import browseReducer from "./browse/reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
});

export default rootReducer;
