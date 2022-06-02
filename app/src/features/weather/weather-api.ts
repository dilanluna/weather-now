import { useQuery } from 'react-query';
import { WeatherResponse } from 'openweathermap-api-client';

async function fetchCurrentWeather(
  lat?: number,
  lon?: number,
): Promise<WeatherResponse> {
  if (typeof lat === 'undefined' || typeof lon === 'undefined') {
    throw new Error('Latitude and longitude are required');
  }

  const response = await fetch(
    `https://weather-now-backend-8db5117.herokuapp.com/weather/current?lat=${lat}&lon=${lon}`,
  );
  const data: WeatherResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export const useWeatherQuery = (lat?: number, lon?: number) =>
  useQuery(
    ['weather', 'current', lat, lon],
    () => fetchCurrentWeather(lat, lon),
    { enabled: Boolean(lat && lon) },
  );
