import { all } from "redux-saga/effects";
import { weatherSaga } from "./features/weather/sagas";
export default function* rootSaga() {
  yield all([weatherSaga()]);
}
