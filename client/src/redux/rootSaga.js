import { all, call } from "redux-saga/effects";

import { browseSagas } from "./browse/sagas";

export default function* rootSaga() {
  yield all([call(browseSagas)]);
}
