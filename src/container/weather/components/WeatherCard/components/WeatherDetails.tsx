interface WeatherDetailsProps {
  min: number;
  max: number;
  humidity: number;
  date: {
    weekDay: string;
    hour: string;
    day: number;
    month: string;
  };
}
export const WeatherDetails = ({
  min,
  max,
  humidity,
  date,
}: WeatherDetailsProps) => (
  <div id="weather-details">
    <p>Mínima: {min} °C</p>
    <p>Máxima: {max} °C</p>
    <p>Humedad: {humidity} %</p>
    <p>
      {date.weekDay} {date.day}/{date.month} {date.hour}
    </p>
  </div>
);
