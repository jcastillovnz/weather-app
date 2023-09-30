import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeEvery } from "redux-saga/effects";
import { weatherActions } from "../weatherSlice";
import { appActions } from "../../app";
import { getWeatherByCoords } from "../../../../services/api.service";
import { CityWeather } from "../../../../types/weather.type";
import { weatherSagasActions } from "./actions";

function* fetchWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>) {
  console.log({ lat, lon });
  try {
    const response: CityWeather = yield getWeatherByCoords(lat, lon);
    yield put(appActions.setIsLoading(true));
    console.log({ response });
    yield put(weatherActions.setWeather(response));
  } catch (error) {
    console.log({ error });
    //todo add logica error
    //yield put(getUserErrorAction(error));
  } finally {
    yield put(appActions.setIsLoading(false));
  }
}

function* watchFetchWeather() {
  yield takeEvery(weatherSagasActions.FETCH_WEATHER, fetchWeather);
}

export function* weatherSaga() {
  yield all([watchFetchWeather()]);
}
