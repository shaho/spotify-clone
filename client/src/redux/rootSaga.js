import { all, call } from "redux-saga/effects";

import { browseSagas } from "./browse/sagas";
import { searchSagas } from "./search/sagas";

export default function* rootSaga() {
  yield all([call(browseSagas), call(searchSagas)]);
}
