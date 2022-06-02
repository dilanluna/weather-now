import Home from '@screens/home';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '@constants';
import FontsProvider from '@contexts/fonts-context';
import LocationProvider from '@contexts/location-context';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import WeatherProvider from '@features/weather/weather-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <FontsProvider>
      <LocationProvider>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <WeatherProvider>
              <NavigationContainer
                theme={scheme === 'dark' ? DarkTheme : LightTheme}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </WeatherProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </LocationProvider>
    </FontsProvider>
  );
}
