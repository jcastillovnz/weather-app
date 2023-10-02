import { createSelector } from "@reduxjs/toolkit";
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
export const selectIsLoading = createSelector(
  [selectWeatherState],
  (weatherState) => weatherState.isLoading
);

export const selectError = createSelector(
  [selectWeatherState],
  (weatherState) => weatherState.error
);
