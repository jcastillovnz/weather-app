import { useEffect } from "react";
import { getWeatherByCoords } from "../../services/api.service";
import { CityWeather } from "../../types/weather.type";

export function useGeolocationWeather(
  setCityForecast: React.Dispatch<React.SetStateAction<CityWeather | null>>
) {
  function success(position: {
    coords: { latitude: number; longitude: number };
  }) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherByCoords(lat, lon)
      .then((res) => setCityForecast(res))
      .catch((err) => console.log("error: ", err));
  }

  function error() {
    console.log("La geolocalización no está disponible en este navegador.");
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      error();
    }
  }, [setCityForecast]);
}
