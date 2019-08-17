import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchNewReleasesSuccess, fetchNewReleasesFailure } from "./actions";
import BrowseActionTypes from "./types";

export function* fetchNewReleasesAsync() {
  try {
    const response = yield call(service.getNewReleases);
    yield put(fetchNewReleasesSuccess(response.data.albums.items));
  } catch (error) {
    yield put(fetchNewReleasesFailure(error.message));
  }
}

export function* fetchNewReleasesStart() {
  yield takeLatest(
    BrowseActionTypes.FETCH_NEW_RELEASES_START,
    fetchNewReleasesAsync,
  );
}

export function* browseSagas() {
  yield all([call(fetchNewReleasesStart)]);
}
