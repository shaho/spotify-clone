import { all, call } from "redux-saga/effects";

import { browseSagas } from "./browse/sagas";
import { searchSagas } from "./search/sagas";
import { categoriesSagas } from "./categories/sagas";
import { playlistSagas } from "./playlist/sagas";
import { playlistsSagas } from "./playlists/sagas";

export default function* rootSaga() {
  yield all([
    call(browseSagas),
    call(searchSagas),
    call(categoriesSagas),
    call(playlistsSagas),
    call(playlistSagas),
  ]);
}
