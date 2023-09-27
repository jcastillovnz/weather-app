import { ChangeEvent, useState } from "react";
import { getWeatherByCoords } from "../../services/api.service";
import { CitySelector, WeatherCard } from "../../components";
import { WeatherForecast } from "../../components/WeatherForecast";
import { CITIES } from "../../constans/cities";
import { CityWeather } from "../../types/weather.type";
import { useGeolocationWeather } from "./useGeolocationWeather";

export function WeatherForeCast() {
  const [cityForecast, setCityForecast] = useState<CityWeather | null>(null);
  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== " ") {
      const city = e.target.value as keyof typeof CITIES;
      const { lat, lon } = CITIES[`${city}`];
      getWeatherByCoords(lat, lon)
        .then((res) => setCityForecast(res))
        .catch((err) => console.log("error: ", err))
    }
  };
  useGeolocationWeather(setCityForecast);
  return (
    <>
      <CitySelector handleSelect={handleSelectCity} />
      <div id="city-container">
        <h1>{cityForecast?.name}</h1>
        {cityForecast && (
          <WeatherCard forecast={cityForecast?.forecast.current} />
        )}
      </div>
      <hr />
      {cityForecast && (
        <WeatherForecast forecasts={cityForecast?.forecast.nextFiveDays} />
      )}
    </>
  );
}
