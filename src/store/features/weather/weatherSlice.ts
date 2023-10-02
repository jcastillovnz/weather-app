import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityWeather, Forecast } from "../../../types";

const initialState: {
  city: CityWeather | null;
  forecasts: Forecast[] | null;

  error: string | null;
  isLoading: boolean;
} = {
  city: null,
  forecasts: null,
  isLoading: true,
  error: null,
};
type SetIsLoadingAction = PayloadAction<boolean>;
type SetWeatherAction = PayloadAction<CityWeather>;
type SetForecastsAction = PayloadAction<Forecast[]>;
type SetErrorAction = PayloadAction<string>;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setIsLoading: (state, action: SetIsLoadingAction) => {
      state.isLoading = action.payload;
    },
    setWeather: (state, action: SetWeatherAction) => {
      return { ...state, city: action.payload };
    },
    setForecasts: (state, action: SetForecastsAction) => {
      return { ...state, forecasts: action.payload };
    },
    setError: (state, action: SetErrorAction) => {
      return { ...state, error: action.payload };
    },
  },
});

const weatherReducer = weatherSlice.reducer;
const weatherActions = weatherSlice.actions;

export { weatherActions, weatherReducer };
