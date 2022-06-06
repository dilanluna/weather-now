import { StatusBar } from 'expo-status-bar';
import WeatherIcon from '@features/weather/weather-icon';
import WeatherStats from '@features/weather/weather-stats';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherHeading from '@features/weather/weather-heading';
import BackgroundGradient from '@components/background-gradient';
import { useCurrentWeather } from '@features/weather/weather-context';
import WeatherTemperature from '@features/weather/weather-temperature';

function mapToCustomIcon(icon) {
  const icons = {
    '01d': { name: 'clearsky', nightly: false },
    '01n': { name: 'clearsky', nightly: true },
    '02d': { name: 'fewclouds', nightly: false },
    '02n': { name: 'fewclouds', nightly: true },
    '03d': { name: 'scatteredclouds', nightly: false },
    '03n': { name: 'scatteredclouds', nightly: true },
    '04d': { name: 'brokenclouds', nightly: false },
    '04n': { name: 'brokenclouds', nightly: true },
    '09d': { name: 'showerrain', nightly: false },
    '09n': { name: 'showerrain', nightly: true },
    '10d': { name: 'rain', nightly: false },
    '10n': { name: 'rain', nightly: true },
    '11d': { name: 'thunderstorm', nightly: false },
    '11n': { name: 'thunderstorm', nightly: true },
    '13d': { name: 'snow', nightly: false },
    '13n': { name: 'snow', nightly: true },
    '50d': { name: 'mist', nightly: false },
    '50n': { name: 'mist', nightly: true },
  };

  return icons[icon];
}

export default function Home() {
  const current = useCurrentWeather();
  const icon = mapToCustomIcon(current?.weather[0].icon);

  return (
    <BackgroundGradient>
      <SafeAreaView>
        {current && (
          <ScrollView contentContainerStyle={styles.container}>
            <WeatherHeading
              city={current.name}
              main={current.weather[0].main}
              description={current.weather[0].description}
            />

            <View style={styles.weatherIconContainer}>
              <WeatherIcon
                size={250}
                name={icon.name}
                nightly={icon.nightly}
              />
            </View>

            <View style={styles.weatherInfoContainer}>
              <WeatherTemperature
                main={current.main.temp}
                min={current.main.temp_min}
                max={current.main.temp_max}
                style={{ marginBottom: 18 }}
              />

              <WeatherStats
                windSpeed={current.wind.speed}
                humidity={current.main.humidity}
                pressure={current.main.pressure}
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  heading: {
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'tomato',
  },
  weatherIconContainer: {
    alignItems: 'center',
  },
  weatherInfoContainer: {
    paddingHorizontal: 16,
    marginBottom: 22,
  },
});
