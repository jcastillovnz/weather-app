import { CityDropdownSelector, CityWeatherInfo } from "./components";
import { Loader } from "../../components/Loader";
import { useGeolocationWeather } from "./hooks";
import { useCitySelection } from "./hooks/useCitySelection";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../store/features";
import { ErrorCard } from "../../components";
export function Weather() {
  const { handleSelect } = useCitySelection();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useGeolocationWeather();
  if (error) return <ErrorCard message={error} />;

  return (
    <>
      <CityDropdownSelector onChange={handleSelect} />

      {isLoading ? <Loader /> : <CityWeatherInfo />}
    </>
  );
}
