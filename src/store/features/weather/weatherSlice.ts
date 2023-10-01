import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityWeather, Forecast } from "../../../types";

const initialState: {
  city: CityWeather | null;
  forecasts: Forecast[] | null;
} = {
  city: null,
  forecasts: null,
};

type SetWeatherAction = PayloadAction<CityWeather>;
type SetForecastsAction = PayloadAction<Forecast[]>;
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: SetWeatherAction) => {
      return { ...state, city: action.payload };
    },
    setForecasts: (state, action: SetForecastsAction) => {
      return { ...state, forecasts: action.payload };
    },
  },
});

const weatherReducer = weatherSlice.reducer;
const weatherActions = weatherSlice.actions;

export { weatherActions, weatherReducer };
