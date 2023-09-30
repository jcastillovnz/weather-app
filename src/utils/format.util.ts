import {
  WeatherApiResponse,
  CityWeather,
  List,
  Forecast,
} from "../types/weather.type";
import { convertDate } from "./date.util";

const formatForecast = (forecast: List):Forecast => {
  return {
    temp: forecast.main.temp,
    min: forecast.main.temp_min,
    max: forecast.main.temp_max,
    humidity:forecast.main.humidity,
    weather:forecast.weather[0],
    date: convertDate(forecast.dt_txt),
  };
};
const getWeatherForecasts = (forecasts: List[]) => {
  const current = formatForecast(forecasts[0]);
  const { 8: first, 16: second, 24: third, 32: fourth, 39: five } = forecasts;
  return {
    current,
    nextFiveDays: [first, second, third, fourth, five].map((item) => formatForecast(item)),
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
