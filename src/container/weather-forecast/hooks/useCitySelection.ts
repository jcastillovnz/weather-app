import { useDispatch } from "react-redux";
import { CITIES } from "../../../constans/cities";
import { weatherSagasActions } from "../../../store/features";
import { ChangeEvent } from "react";

export function useCitySelection() {
  const dispatch = useDispatch();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== " ") {
      const city = value as keyof typeof CITIES;
      const { lat, lon } = CITIES[city];
      dispatch({
        type: weatherSagasActions.FETCH_WEATHER,
        payload: { lat, lon },
      });
    }
  };


  return { handleSelect };
}
