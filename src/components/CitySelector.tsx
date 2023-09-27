import { ChangeEvent } from "react";
import { CITIES } from "../constans/cities";

export const CitySelector = ({
  handleSelect,
}: {
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}):JSX.Element => {
  return <select onChange={handleSelect}>
        <option value=" ">Selecione una ciudad</option>
        {Object.keys(CITIES).map((city) => (
            <option key={city} value={city}>
                {city}
            </option>
        ))}
    </select>;
};
