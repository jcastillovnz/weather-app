import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherSagasActions, weatherActions } from "../../../store/features";

export function useGeolocationWeather() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getLocation() {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });

        if (permission.state === "granted") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              dispatch({
                type: weatherSagasActions.FETCH_WEATHER,
                payload: { lat, lon },
              });
            },
            () => {
              dispatch({
                type: weatherActions.setError.type,
                payload: "No se pudo obtener la ubicación actual.",
              });
            }
          );
        } else if (permission.state === "prompt") {
          if (window.confirm("¿Permitir acceso a la ubicación?")) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                dispatch({
                  type: weatherSagasActions.FETCH_WEATHER,
                  payload: { lat, lon },
                });
              },
              () => {
                dispatch({
                  type: weatherActions.setError.type,
                  payload: "No se pudo obtener la ubicación actual.",
                });
              }
            );
          } else {
            dispatch({
              type: weatherActions.setError.type,
              payload: "Permiso de geolocalización denegado.",
            });
          }
        } else {
          dispatch({
            type: weatherActions.setError.type,
            payload: "La geolocalización no está disponible en este navegador.",
          });
        }
      } catch (error) {
        console.error("Error al solicitar permiso de geolocalización:", error);
        dispatch({
          type: weatherActions.setError.type,
          payload: "Ocurrió un error al obtener permiso de geolocalización.",
        });
      }
    }

    getLocation();
  }, [dispatch]);
}
