import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchPlaylistSuccess, fetchPlaylistFailure } from "./actions";
import PlaylistActionTypes from "./types";

export function* fetchPlaylistAsync(action) {
  try {
    const response = yield call(service.getPlaylist, action.payload);
    console.log("Playlist: ", response);
    yield put(fetchPlaylistSuccess(response.data));
  } catch (error) {
    yield put(fetchPlaylistFailure(error.message));
  }
}

export function* fetchPlaylistStart() {
  yield takeLatest(
    PlaylistActionTypes.FETCH_PLAYLIST_START,
    fetchPlaylistAsync,
  );
}

export function* playlistSagas() {
  yield all([call(fetchPlaylistStart)]);
}
