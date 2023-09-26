import { Forecast } from '../types/weather.type';

const WeatherCard = ({ forecast: { temp, min, max } }:{forecast: Forecast}) => {
  return (
    <div id="forecast">
      <h5>Temperatura: {temp}</h5>
      <p>Mínima: {min}</p>
      <p>Máxima: {max}</p>
    </div>
  );
};

export default WeatherCard;
