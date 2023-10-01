import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeEvery } from "redux-saga/effects";
import { weatherActions } from "../weatherSlice";
import { appActions } from "../../app";
import { getWeatherByCoords } from "../../../../services/api.service";
import { WeatherApiResponse } from "../../../../types/weather.type";
import { weatherSagasActions } from "./actions";
import { formatUtil } from "../../../../utils/format.util";

function* fetchWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>) {
  try {
    yield put(appActions.setIsLoading(true));
    const response: WeatherApiResponse = yield getWeatherByCoords(lat, lon);
    const responseFormatedd = formatUtil.formatResponse(response);
    yield put(weatherActions.setWeather(responseFormatedd));
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
