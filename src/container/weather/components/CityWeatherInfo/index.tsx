import './style.css'
import { useSelector } from "react-redux";
import { WeatherCard } from "../WeatherCard";
import {
  selectCityName,
  selectCurrentForecast,
} from "../../../../store/features";
import { WeatherForecastDisplay } from "../WeatherForecastDisplay";

export const CityWeatherInfo = () => {
  const cityName = useSelector(selectCityName);
  const forecast = useSelector(selectCurrentForecast);
  return (
    <>
      <div id="city-container">
        <h1>{cityName}</h1>
        {forecast && <WeatherCard forecast={forecast} />}
      </div>
      <hr />
      <WeatherForecastDisplay />
    </>
  );
};
export default CityWeatherInfo;
