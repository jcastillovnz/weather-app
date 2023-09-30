import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { weatherActions } from "./weatherSlice";
import { appActions } from "../app";
import { getWeatherByCoords } from "../../../services/api.service";
import { CityWeather } from "../../../types/weather.type";

function* getWeather({
  payload: { lat, lon },
}: PayloadAction<{ lat: number; lon: number }>) {
  try {
    const response: CityWeather = yield getWeatherByCoords(lat, lon);
    yield put(appActions.setIsLoading(true));
    yield put(weatherActions.setWeather(response));
  } catch (error) {
    console.log({error})
    //todo add logica error
    //yield put(getUserErrorAction(error));
  } finally {
    yield put(appActions.setIsLoading(false));
  }
}

export function* watchGetWeather() {
  yield takeLatest('WEATHER/GET_WEATHER', getWeather);
}
