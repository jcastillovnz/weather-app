import "./style.css";
import { Forecast } from "../../../../types";

export const WeatherCard = ({
  forecast: { temp, min, max, date, humidity, weather },
}: {
  forecast: Forecast;
}) => {
  return (
    <div id="forecast">
      <div id="temp-container">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          width={40}
          height={40}
        />{" "}
        <h3 id="current-temp"> {temp} °C</h3>{" "}
      </div>

      <p>Mínima: {min} °C</p>
      <p>Máxima: {max} °C</p>
      <p>Humedad: {humidity} %</p>
      <p> {date.weekDay}</p>
      <p>
        {" "}
        {date.day}/{date.month} {date.hour}
      </p>
    </div>
  );
};
