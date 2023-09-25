const API_KEY =import.meta.env.VITE_OPEN_WEATHER_API_KEY
const VITE_OPEN_WEATHER_API =import.meta.env.VITE_OPEN_WEATHER_API
export const getWeatherByCoords = async (
  lat: number,
  lon:number
): Promise<any> => {
  const response = await fetch(
    `${VITE_OPEN_WEATHER_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return await response.json();
};
