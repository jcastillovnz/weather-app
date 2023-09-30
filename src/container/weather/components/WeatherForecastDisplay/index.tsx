import './style.css'
import { WeatherCard } from "../WeatherCard";
import { selectNextFiveDaysForecast } from "../../../../store/features";
import { useSelector } from "react-redux";

export const WeatherForecastDisplay = () => {
  const forecasts = useSelector(selectNextFiveDaysForecast);
  return (
    <div>
      <h1>Pronóstico del tiempo para los próximos 5 días</h1>
      <div id="forecast-container">
        {forecasts?.map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};
