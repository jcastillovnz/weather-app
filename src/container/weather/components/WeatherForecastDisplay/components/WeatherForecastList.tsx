import { WeatherCard } from "../..";
import { Forecast } from "../../../../../types";

export const WeatherForecastList = ({
  forecasts,
}: {
  forecasts: Forecast[];
}) => (
  <div id="forecast-container">
    {forecasts.map((forecast, index) => (
      <WeatherCard key={index} forecast={forecast} />
    ))}
  </div>
);
