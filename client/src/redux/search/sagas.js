import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchAlbumsSuccess, fetchAlbumsFailure } from "./actions";
import SearchActionTypes from "./types";

export function* fetchAlbumsAsync(action) {
  try {
    const response = yield call(service.getSearchByAlbum, action.payload);
    yield put(fetchAlbumsSuccess(response.data.albums.items));
  } catch (error) {
    yield put(fetchAlbumsFailure(error.message));
  }
}

export function* fetchAlbumStart() {
  yield takeLatest(
    SearchActionTypes.FETCH_SEARCH_ALBUMS_START,
    fetchAlbumsAsync,
  );
}

export function* searchSagas() {
  yield all([call(fetchAlbumStart)]);
}
