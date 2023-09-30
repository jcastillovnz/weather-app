import { CityDropdownSelector, CityWeatherInfo } from "./components";
import { Loader } from "../../components/Loader";
import { useGeolocationWeather } from "./hooks";
import { useCitySelection } from "./hooks/useCitySelection";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/features";
export function Weather() {
  const { handleSelect } = useCitySelection();
  const isLoading = useSelector(selectIsLoading);
  useGeolocationWeather();
  return (
    <>
      <CityDropdownSelector onChange={handleSelect} />

      {isLoading ? <Loader /> : <CityWeatherInfo />}
    </>
  );
}
