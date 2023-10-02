import "./style.css";
import { Forecast } from "../../../../types";
import { CurrentTemperature , WeatherDetails } from "./components";

export const WeatherCard = ({ forecast }: { forecast: Forecast }) => {
  return (
    <div id="forecast">
      <CurrentTemperature temp={forecast.temp} weather={forecast.weather} />
      <WeatherDetails
        min={forecast.min}
        max={forecast.max}
        humidity={forecast.humidity}
        date={forecast.date}
      />
    </div>
  );
};
