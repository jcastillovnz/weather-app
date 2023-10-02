import "./style.css";
import { selectForecasts } from "../../../../store/features";
import { useSelector } from "react-redux";
import { WeatherForecastList } from "./components/WeatherForecastList";

export const WeatherForecastDisplay = () => {
  const forecasts = useSelector(selectForecasts);
  return (
    <div>
      <h1>Pronóstico del tiempo para los próximos 5 días</h1>
      {forecasts && <WeatherForecastList forecasts={forecasts} />}
    </div>
  );
};
