import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherSagasActions } from "../../../store/features";

export function useGeolocationWeather() {
  const dispatch = useDispatch();
  function success(position: {
    coords: { latitude: number; longitude: number };
  }) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    dispatch({
      type: weatherSagasActions.FETCH_WEATHER,
      payload: { lat, lon },
    });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
