import { WeatherApiResponse, CityForecast } from "../types/weather.type";


const formatResponse = (response: WeatherApiResponse): CityForecast => {
  return {
     id: response.city.id, name: response.city.name ,
    forecast: response.list.map((forecast) => ({
      temp: forecast.visibility,
      min: forecast.main.temp_min,
      max: forecast.main.temp_max,
      date: forecast.dt_txt,
    })),
  };
};

export const formatUtil = { formatResponse };
