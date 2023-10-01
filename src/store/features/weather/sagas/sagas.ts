import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeEvery } from "redux-saga/effects";
import { weatherActions } from "../weatherSlice";
import { appActions } from "../../app";
import { ForecastApiResponse, WeatherApiResponse } from "../../../../types";
import { weatherSagasActions } from "./actions";
import { formatUtil } from "../../../../utils/format.util";
import {
  fetchForecastsByCoords,
  fetchWeatherByCoords,
} from "../../../../services/weather.service";

function* fetchWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>) {
  try {
    yield put(appActions.setIsLoading(true));
    const weatherCityResponse: WeatherApiResponse = yield fetchWeatherByCoords(lat, lon);
    const forecastsResponse: ForecastApiResponse = yield fetchForecastsByCoords(
      lat,
      lon
    );
    const forecastsFormated = formatUtil.formatForescastsResponse(forecastsResponse);
    const weatherCityFormated = formatUtil.formatWeatherCityResponse(weatherCityResponse);
    yield put(weatherActions.setForecasts(forecastsFormated));
    yield put(weatherActions.setWeather(weatherCityFormated));
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
