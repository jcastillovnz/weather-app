import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { getWeatherByCoords } from "./services/api.service";
import { CITIES } from "./constans/cities";
import { City } from "./types/weather.type";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityForecast, setCityForecast] = useState<City | null>(null);
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
        <h5>
          Temperatura actual: {cityForecast?.forecast.currentForescast.temp}
        </h5>
        <p>Mínima: {cityForecast?.forecast.currentForescast.min}</p>
        <p>Máxima: {cityForecast?.forecast.currentForescast.max}</p>
      </div>
    </>
  );
}

export default App;
