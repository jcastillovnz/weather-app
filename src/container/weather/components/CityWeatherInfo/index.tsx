import './style.css'
import { useSelector } from "react-redux";
import { WeatherCard } from "../WeatherCard";
import {
  selectCityWeather,
  selectForecasts,
} from "../../../../store/features";
import { WeatherForecastDisplay } from "../WeatherForecastDisplay";

export const CityWeatherInfo = () => {
  const cityWeather = useSelector(selectCityWeather);
  return (
    <>
{/*       <div id="city-container">
        <h1>{cityWeather?.name}</h1>
        {forecast && <WeatherCard forecast={forecast} />}
      </div> */}
      <hr />
      <WeatherForecastDisplay />
    </>
  );
};
export default CityWeatherInfo;
