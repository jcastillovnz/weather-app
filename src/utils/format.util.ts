import { WeatherApiResponse, City, List } from "../types/weather.type";

const kelvinToCelsius = (tempKelvin: number) => {
  const temperaturaCelsius = tempKelvin - 273.15;
  return Number(temperaturaCelsius.toFixed(2));
};
const getNextFiveDaysForecasts = (forecasts: List[]) => {
  const pronosticoProximosDias = [];
  for (let i = 1; i <= 5; i++) {
    pronosticoProximosDias.push({
      temp: kelvinToCelsius(forecasts[i].main.temp),
      min: kelvinToCelsius(forecasts[i].main.temp_min),
      max: kelvinToCelsius(forecasts[i].main.temp_max),
      date: forecasts[i].dt_txt,
    });
  }
  return pronosticoProximosDias;
};

const getForescast = (forecasts: List[]) => {
  const currentForescast = {
    temp:  kelvinToCelsius(forecasts[0].main.temp),
    min: kelvinToCelsius(forecasts[0].main.temp_min),
    max: kelvinToCelsius(forecasts[0].main.temp_max),
    date: forecasts[0].dt_txt,
  };

  return {
    currentForescast,
    nextFiveDaysForecasts: getNextFiveDaysForecasts(forecasts),
  };
};

const formatResponse = (response: WeatherApiResponse): City => {
  return {
    id: response.city.id,
    name: response.city.name,
    forecast: getForescast(response.list),
  };
};

export const formatUtil = { formatResponse };
