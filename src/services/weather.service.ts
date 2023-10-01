import { ForecastApiResponse, WeatherApiResponse } from "../types";
import { makeRequest } from "./api.service";

export const fetchForecastsByCoords = async (
  lat: number,
  lon: number
): Promise<ForecastApiResponse> => {
  return makeRequest(`forecast?lat=${lat}&lon=${lon}`);
};

export const fetchWeatherByCoords = async (
  lat: number,
  lon: number
): Promise<WeatherApiResponse> => {
  return makeRequest(`weather?lat=${lat}&lon=${lon}`);
};
