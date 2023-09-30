import { all } from "redux-saga/effects";
import { watchGetWeather } from "./features/weather/sagas";
export default function* rootSaga() {
  yield all([watchGetWeather]);
}
