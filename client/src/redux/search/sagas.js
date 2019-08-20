import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchSearchSuccess, fetchSearchFailure } from "./actions";
import SearchActionTypes from "./types";

export function* fetchSearchAsync(action) {
  try {
    const response = yield call(service.getSearch, action.payload);
    yield console.log(response.data);
    yield put(fetchSearchSuccess(response.data));
  } catch (error) {
    yield put(fetchSearchFailure(error.message));
  }
}

export function* fetchSearchStart() {
  yield takeLatest(SearchActionTypes.FETCH_SEARCH_START, fetchSearchAsync);
}

export function* searchSagas() {
  yield all([call(fetchSearchStart)]);
}
