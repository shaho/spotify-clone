import { combineReducers } from "redux";

import browseReducer from "./browse/reducer";
import searchReducer from "./search/reducer";
import categoriesRedeucer from "./categories/reducer";
import playlistsRedeucer from "./playlists/reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
  search: searchReducer,
  categories: categoriesRedeucer,
  playlists: playlistsRedeucer,
});

export default rootReducer;
