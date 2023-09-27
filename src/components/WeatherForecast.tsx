import { WeatherCard } from "./WeatherCard";
import { Forecast } from "../types/weather.type";

export const WeatherForecast = ({ forecasts }: { forecasts: Forecast[] }) => {
  return (
    <div>
      <h1>
        Pronóstico del tiempo para los próximos 5 días
      </h1>
      <div id="forecast-container">
        {forecasts.map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};
