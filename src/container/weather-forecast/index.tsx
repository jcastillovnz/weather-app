import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CitySelector, WeatherCard } from "../../components";
import { WeatherForecast } from "../../components/WeatherForecast";
import { CITIES } from "../../constans/cities";
import { useGeolocationWeather } from "./hooks";
import {
  selectCityName,
  selectCurrentForecast,
  selectNextFiveDaysForecast,
} from "../../store/features/weather/selector";
import { weatherSagasActions } from "../../store/features";

export function WeatherForeCast() {
  const dispatch = useDispatch();
  const cityName = useSelector(selectCityName);
  const currentForecast = useSelector(selectCurrentForecast);
  const forecast = useSelector(selectNextFiveDaysForecast);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== " ") {
      const city = e.target.value as keyof typeof CITIES;
      const { lat, lon } = CITIES[`${city}`];
      dispatch({
        type: weatherSagasActions.FETCH_WEATHER,
        payload: { lat, lon },
      });
    }
  };
  useGeolocationWeather();
  return (
    <>
      <CitySelector handleSelect={handleSelect} />
      <div id="city-container">
        <h1>{cityName}</h1>
        {currentForecast && <WeatherCard forecast={currentForecast} />}
      </div>
      <hr />
      {forecast && <WeatherForecast forecasts={forecast} />}
    </>
  );
}
