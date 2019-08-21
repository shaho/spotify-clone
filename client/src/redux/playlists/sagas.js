import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchPlaylistsSuccess, fetchPlaylistsFailure } from "./actions";
import PlaylistsActionTypes from "./types";

export function* fetchPlaylistsAsync(action) {
  try {
    const response = yield call(service.getGenres, action.payload);
    console.log("Genres: ", response);
    yield put(fetchPlaylistsSuccess(response.data.playlists));
  } catch (error) {
    yield put(fetchPlaylistsFailure(error.message));
  }
}

export function* fetchPlaylistsStart() {
  yield takeLatest(
    PlaylistsActionTypes.FETCH_PLAYLISTS_START,
    fetchPlaylistsAsync,
  );
}

export function* playlistsSagas() {
  yield all([call(fetchPlaylistsStart)]);
}
