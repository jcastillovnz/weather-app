import { Forecast } from '../types/weather.type';

export const WeatherCard = ({ forecast: { temp, min, max, date } }:{forecast: Forecast}) => {
  return (
    <div id="forecast">
      <h3 id="current-temp">Temperatura: {temp} °C</h3>
      <p>Mínima: {min} °C</p>
      <p>Máxima: {max} °C</p>
      <p> {date.weekDay}</p>
      <p> {date.day}/{date.month} {date.hour}</p>
    </div>
  );
};


