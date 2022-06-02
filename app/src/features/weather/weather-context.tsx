import { View } from 'react-native';
import { WeatherResponse } from 'openweathermap-api-client';
import { useCurrentLocation } from '@contexts/location-context';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useWeatherQuery } from './weather-api';

type WeatherContextType = { current?: WeatherResponse } | undefined;

const WeatherContext = createContext<WeatherContextType>(undefined);

export default function WeatherProvider({ children }: { children: ReactNode }) {
  const location = useCurrentLocation();
  const {
    isIdle,
    isLoading,
    data: weather,
  } = useWeatherQuery(location?.coords.latitude, location?.coords.longitude);

  useEffect(() => {
    async function fetch() {
      try {
        await preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    if (isIdle || isLoading) {
      fetch();
    }
  }, [isIdle, isLoading]);

  const onLayoutWeatherView = useCallback(async () => {
    if (!isIdle && !isLoading) {
      await hideAsync();
    }
  }, [isIdle, isLoading]);

  if (isIdle || isLoading) {
    return null;
  }

  return (
    <WeatherContext.Provider value={{ current: weather }}>
      <View
        style={{ flex: 1 }}
        onLayout={onLayoutWeatherView}>
        {children}
      </View>
    </WeatherContext.Provider>
  );
}

function useWeatherContext() {
  const weather = useContext(WeatherContext);

  if (!weather) {
    throw new Error('Cannot use weather outside of WeatherProvider');
  }

  return weather;
}

export function useCurrentWeather() {
  const { current } = useWeatherContext();

  return current;
}
