import { Clouds, Weather, Wind } from "./weather.type";

export interface ForecastApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export interface Forecast {
  temp: number;
  min: number;
  max: number;
  humidity: number;
  weather:{
    id: number,
    main: string,
    description: string,
    icon: string
    }
  date: { weekDay: string; hour: string; day: number; month: string };
}

