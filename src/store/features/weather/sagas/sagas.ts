import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeEvery } from "redux-saga/effects";
import { weatherActions } from "../weatherSlice";
import { ForecastApiResponse, WeatherApiResponse } from "../../../../types";
import { weatherSagasActions } from "./actions";
import { formatUtil } from "../../../../utils/format.util";
import {
  fetchForecastsByCoords,
  fetchWeatherByCoords,
  MyCustomError,
} from "../../../../services";

function* fetchWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>) {
  try {
    yield put(weatherActions.setIsLoading(true));
    const weatherCityResponse: WeatherApiResponse = yield fetchWeatherByCoords(
      lat,
      lon
    );
    const forecastsResponse: ForecastApiResponse = yield fetchForecastsByCoords(
      lat,
      lon
    );
    const forecastsFormated =
      formatUtil.formatForecastsResponse(forecastsResponse);
    const weatherCityFormated =
      formatUtil.formatWeatherCityResponse(weatherCityResponse);
    yield put(weatherActions.setForecasts(forecastsFormated));
    yield put(weatherActions.setWeather(weatherCityFormated));
  } catch (error) {
    const customError = error as MyCustomError;
    yield put(
      weatherActions.setError(customError?.message || "Error desconocido")
    );
  } finally {
    yield put(weatherActions.setIsLoading(false));
  }
}

function* watchFetchWeather() {
  yield takeEvery(weatherSagasActions.FETCH_WEATHER, fetchWeather);
}

export function* weatherSaga() {
  yield all([watchFetchWeather()]);
}
