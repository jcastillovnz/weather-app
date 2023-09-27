import { Forecast } from '../types/weather.type';

const WeatherCard = ({ forecast: { temp, min, max, date } }:{forecast: Forecast}) => {
  return (
    <div id="forecast">
      <h5>Temperatura: {temp}</h5>
      <p>Mínima: {min}</p>
      <p>Máxima: {max}</p>
      <p> {date.weekDay}</p>
      <p> {date.day}/{date.month} {date.hour}</p>
    </div>
  );
};

export default WeatherCard;
