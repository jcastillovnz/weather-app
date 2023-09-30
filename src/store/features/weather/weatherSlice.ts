import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityWeather } from "../../../types";

const initialState: CityWeather = {
  id: 0,
  name: "",
  forecast: null,
};

type SetWeatherAction = PayloadAction<CityWeather>;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: SetWeatherAction) => {
      return { ...state, ...action.payload };
    },
  },
});

const weatherReducer = weatherSlice.reducer;
const weatherActions = weatherSlice.actions;

export { weatherActions, weatherReducer };
