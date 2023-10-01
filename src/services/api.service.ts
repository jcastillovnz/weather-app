const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const VITE_OPEN_WEATHER_API = import.meta.env.VITE_OPEN_WEATHER_API;

export const makeRequest = async <T>(endPoint: string): Promise<T> => {
  const response = await fetch(
    `${VITE_OPEN_WEATHER_API}/${endPoint}&appid=${API_KEY}&&units=metric`
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
};
