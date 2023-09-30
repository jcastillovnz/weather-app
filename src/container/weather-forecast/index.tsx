import { useSelector } from "react-redux";
import { CitySelector, WeatherCard } from "../../components";
import { WeatherForecast } from "../../components/WeatherForecast";
import { useGeolocationWeather } from "./hooks";
import {
  selectCityName,
  selectCurrentForecast,
  selectNextFiveDaysForecast,
} from "../../store/features/weather/selector";
import { useCitySelection } from "./hooks/useCitySelection";

export function WeatherForeCast() {
  const cityName = useSelector(selectCityName);
  const currentForecast = useSelector(selectCurrentForecast);
  const forecasts = useSelector(selectNextFiveDaysForecast);
  const { handleSelect } = useCitySelection();
  useGeolocationWeather();
  return (
    <>
      <CitySelector handleSelect={handleSelect} />
      <div id="city-container">
        <h1>{cityName}</h1>
        {currentForecast && <WeatherCard forecast={currentForecast} />}
      </div>
      <hr />
      {forecasts && <WeatherForecast forecasts={forecasts} />}
    </>
  );
}
