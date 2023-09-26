import { WeatherApiResponse, CityForecast } from "../types/weather.type";
import { formatUtil } from "../utils/format.util";
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const VITE_OPEN_WEATHER_API = import.meta.env.VITE_OPEN_WEATHER_API;
export const getWeatherByCoords = async (
  lat: number,
  lon: number
): Promise<CityForecast> => {
  const response = await fetch(
    `${VITE_OPEN_WEATHER_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error fetching weather data");
  }
  const res = (await response.json()) as unknown as WeatherApiResponse;
  return formatUtil.formatResponse(res)
};
