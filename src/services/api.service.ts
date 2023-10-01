import { WeatherApiResponse } from "../types/weather.type";
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const VITE_OPEN_WEATHER_API = import.meta.env.VITE_OPEN_WEATHER_API;
export const getWeatherByCoords = async (
  lat: number,
  lon: number
): Promise<WeatherApiResponse> => {
  const response = await fetch(
    `${VITE_OPEN_WEATHER_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`
  );
  if (!response.ok) {
    throw new Error("Error fetching weather data");
  }
  return (await response.json()) as unknown as WeatherApiResponse;
};
