import { createSelector } from "reselect";
import { RootState } from "../../store";
import { CityWeather } from "../../../types";

const selectWeatherState = (state: RootState) => state.weather;

export const selectCityName = createSelector(
  [selectWeatherState],
  (weatherState: CityWeather) => weatherState.name
);

export const selectCurrentForecast = createSelector(
  [selectWeatherState],
  (weatherState: CityWeather) => weatherState.forecast?.current
);

export const selectNextFiveDaysForecast = createSelector(
  [selectWeatherState],
  (weatherState: CityWeather) => weatherState.forecast?.nextFiveDays
);