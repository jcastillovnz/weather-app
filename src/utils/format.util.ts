import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import es from "dayjs/locale/es";

import {
  ForecastApiResponse,
  List,
  Forecast,
  WeatherApiResponse,
  CityWeather,
  FormatForecastProps,
} from "../types";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(es);

const getFormattedDateTimeInfo = (
  dateString: string,
  timezoneOffset: number
) => {
  const utcDateTime = dayjs(dateString).utc();
  const argentinaDateTime = utcDateTime.utcOffset(timezoneOffset);
  const weekDay = argentinaDateTime.format("dddd");
  const day = argentinaDateTime.date();
  const month = argentinaDateTime.format("MMMM");
  const hour = argentinaDateTime.format("HH:mm");
  return { weekDay, hour, day, month };
};

const formatForecast = (
  { temp, temp_min, temp_max, humidity, weather, dt_txt }: FormatForecastProps,
  timezoneOffset: number
): Forecast => {
  return {
    temp: temp,
    min: temp_min,
    max: temp_max,
    humidity: humidity,
    weather: weather[0],
    date: getFormattedDateTimeInfo(dt_txt, timezoneOffset),
  };
};
const getNextFiveForecast = (forecasts: List[], timezoneOffset: number) => {
  const today = dayjs().utcOffset(timezoneOffset);

  const format = (forecastData: FormatForecastProps) => {
    return formatForecast(forecastData, timezoneOffset);
  };
  const nextFiveDays: Forecast[] = [];
  const startDate = today.add(1, "day").startOf("day");
  const endDate = startDate.add(10, "day").endOf("day");

  const uniqueDates = new Set();
  for (const forecast of forecasts) {
    const forecastDate = dayjs(forecast.dt_txt)
      .utcOffset(timezoneOffset)
      .startOf("day");

    if (forecastDate >= startDate && forecastDate <= endDate) {
      const dateStr = forecastDate.format("YYYY-MM-DD");
      if (!uniqueDates.has(dateStr)) {
        const {
          main: { temp, temp_min, temp_max, humidity },
          weather,
          dt_txt,
        } = forecast;
        const formatedForecast = format({
          temp,
          temp_min,
          temp_max,
          humidity,
          weather,
          dt_txt,
        });
        nextFiveDays.push(formatedForecast);
        uniqueDates.add(dateStr);
      }
    }
  }
  return nextFiveDays;
};

const formatForescastsResponse = (response: ForecastApiResponse) => {
  const timeOffsetInMinuts = response.city.timezone / 60;
  return getNextFiveForecast(response.list, timeOffsetInMinuts);
};
const formatWeatherCityResponse = (
  response: WeatherApiResponse
): CityWeather => {
  const { name, id, main, weather } = response;
  const { temp, temp_min, temp_max, humidity } = main;
  const timeOffsetInMinuts = response.timezone / 60;
  const currentDate = dayjs().utcOffset(timeOffsetInMinuts);
  const weatherCity = formatForecast(
    {
      temp,
      temp_min,
      temp_max,
      humidity,
      dt_txt: currentDate.format("YYYY-MM-DD HH:MM:ss"),
      weather,
    },
    timeOffsetInMinuts
  );
  return { name, id, weather: weatherCity };
};

export const formatUtil = {
  formatForescastsResponse,
  formatWeatherCityResponse,
};
