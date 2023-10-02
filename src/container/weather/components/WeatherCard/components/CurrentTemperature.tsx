interface CurrentTemperatureProps {
  temp: number;
  weather: { icon: string };
}
export const CurrentTemperature = ({
  temp,
  weather,
}: CurrentTemperatureProps) => (
  <div id="temp-container">
    <img
      src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      width={40}
      height={40}
      alt="Weather Icon"
    />
    <h3 id="current-temp">{temp} °C</h3>
  </div>
);
