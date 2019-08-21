import { takeLatest, call, put, all } from "redux-saga/effects";

import * as service from "../../utils/services";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./actions";
import CategoriesActionTypes from "./types";

export function* fetchCategoriesAsync() {
  try {
    const response = yield call(service.getCategories);
    yield put(fetchCategoriesSuccess(response.data.categories.items));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export function* fetchCategoriesStart() {
  yield takeLatest(
    CategoriesActionTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSagas() {
  yield all([call(fetchCategoriesStart)]);
}
