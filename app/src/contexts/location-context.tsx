import {
  getCurrentPositionAsync,
  LocationObject,
  useForegroundPermissions,
} from 'expo-location';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type LocationContextType = { current?: LocationObject } | undefined;

const LocationContext = createContext<LocationContextType>(undefined);

export default function LocationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [location, setLocation] = useState<LocationObject>();
  const [status, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    async function request() {
      await requestPermission();
    }

    request();
  }, []);

  useEffect(() => {
    async function getPosition() {
      let location = await getCurrentPositionAsync();
      setLocation(location);
    }

    if (status?.granted) {
      getPosition();
    }
  }, [status]);

  return (
    <LocationContext.Provider value={{ current: location }}>
      {children}
    </LocationContext.Provider>
  );
}

function useLocationContext() {
  const location = useContext(LocationContext);

  if (!location) {
    throw new Error('Cannot use location outside of LocationProvider');
  }

  return location;
}

export function useCurrentLocation() {
  const { current } = useLocationContext();

  return current;
}
