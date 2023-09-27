import { ChangeEvent, useState } from "react";
import "./App.css";
import { getWeatherByCoords } from "./services/api.service";
import { CITIES } from "./constans/cities";
import { City, CityWeather } from "./types/weather.type";
import WeatherCard from "./components/WeatherCard";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityForecast, setCityForecast] = useState<CityWeather | null>(null);
  const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== " ") {
      const city = e.target.value as keyof typeof CITIES;
      const { lat, lon } = CITIES[`${city}`];
      setIsLoading(true);
      getWeatherByCoords(lat, lon)
        .then((res) => setCityForecast(res))
        .catch((err) => console.log("error: ", err))
        .finally(() => setIsLoading(false));
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <select onChange={handleSelectCity}>
        <option value=" ">Selecione una ciudad</option>
        {Object.keys(CITIES).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div>
        <h1>{cityForecast?.name}</h1>
        {cityForecast && (
          <WeatherCard forecast={cityForecast?.forecast.current} />
        )}
      </div>
      <div id="forecast-container">
        {cityForecast?.forecast.nextFiveDays.map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} />
        ))}
      </div>
    </>
  );
}

export default App;
