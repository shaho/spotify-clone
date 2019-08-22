import { combineReducers } from "redux";

import browseReducer from "./browse/reducer";
import searchReducer from "./search/reducer";
import categoriesRedeucer from "./categories/reducer";
import playlistsRedeucer from "./playlists/reducer";
import playlistRedeucer from "./playlist/reducer";
import playerRedeucer from "./player/reducer";

const rootReducer = combineReducers({
  browse: browseReducer,
  search: searchReducer,
  categories: categoriesRedeucer,
  playlists: playlistsRedeucer,
  playlist: playlistRedeucer,
  player: playerRedeucer,
});

export default rootReducer;
