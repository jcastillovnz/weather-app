import { createSelector } from '@reduxjs/toolkit'
import { RootState } from "../../store";

const selectWeatherState = (state: RootState) => state.weather;

export const selectCityWeather = createSelector(
  [selectWeatherState],
  (weatherState) => weatherState.city
);

export const selectForecasts = createSelector(
  [selectWeatherState],
  (weatherState) => weatherState.forecasts
);