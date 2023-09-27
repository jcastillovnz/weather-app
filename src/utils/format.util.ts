import {
  WeatherApiResponse,
  CityWeather,
  List,
} from "../types/weather.type";
import { convertDate } from "./date.util";

const getForecast = (forecasts: List) => {
  return {
    temp: forecasts.main.temp,
    min: forecasts.main.temp_min,
    max: forecasts.main.temp_max,
    date: convertDate(forecasts.dt_txt),
  };
};
const getWeatherForecasts = (forecasts: List[]) => {
  const current = getForecast(forecasts[0]);
  const { 8: first, 16: second, 24: third, 32: fourth, 39: five } = forecasts;
  return {
    current,
    nextFiveDays: [first, second, third, fourth, five].map((item) => getForecast(item)),
  };
};

const formatResponse = (response: WeatherApiResponse): CityWeather => {

  return {
    id: response.city.id,
    name: response.city.name,
    forecast: getWeatherForecasts(
      response.list
    ),
  };
};

export const formatUtil = { formatResponse };
