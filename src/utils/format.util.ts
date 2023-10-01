import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import es from "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import {
  ForecastApiResponse,
  CityWeather,
  List,
  Forecast,
} from "../types/weather.type";
dayjs.extend(isBetween);
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

const formatForecast = (forecast: List, timezoneOffset: number): Forecast => {
  return {
    temp: forecast.main.temp,
    min: forecast.main.temp_min,
    max: forecast.main.temp_max,
    humidity: forecast.main.humidity,
    weather: forecast.weather[0],
    date: getFormattedDateTimeInfo(forecast.dt_txt, timezoneOffset),
  };
};
const getNextFiveForecast = (forecasts: List[], timezoneOffset: number) => {
  const today = dayjs().utcOffset(timezoneOffset);
  const format = (forecast: List) => formatForecast(forecast, timezoneOffset);
  const nextFiveDays: Forecast[] = [];
  const startDate = today
    .add(1, "day")
    .startOf("day");
  const endDate = startDate.add(10, "day").endOf("day");

  const uniqueDates = new Set();
  for (const forecast of forecasts) {
    const forecastDate = dayjs(forecast.dt_txt)
      .utcOffset(timezoneOffset)
      .startOf("day");

    if (forecastDate >= startDate && forecastDate <= endDate) {
      const dateStr = forecastDate.format("YYYY-MM-DD");
      if (!uniqueDates.has(dateStr)) {
        const formatedForecast = format(forecast);
        nextFiveDays.push(formatedForecast);
        uniqueDates.add(dateStr);
      }
    }
  }
  return nextFiveDays
};

const formatForescastsResponse = (response: ForecastApiResponse) => {
  const timeOffsetInMinuts = response.city.timezone / 60;
  return getNextFiveForecast(response.list, timeOffsetInMinuts)
};

export const formatUtil = { formatForescastsResponse };
