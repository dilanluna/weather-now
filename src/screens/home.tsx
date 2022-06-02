import { StatusBar } from 'expo-status-bar';
import WeatherIcon from '@features/weather/weather-icon';
import WeatherStats from '@features/weather/weather-stats';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherHeading from '@features/weather/weather-heading';
import BackgroundGradient from '@components/background-gradient';
import WeatherTemperature from '@features/weather/weather-temperature';

export default function Home() {
  return (
    <BackgroundGradient>
      <StatusBar style="inverted" />

      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <WeatherHeading
            city="New York"
            main="Clear"
            description="clear sky"
          />

          <View style={styles.weatherIconContainer}>
            <WeatherIcon
              size={250}
              name="clearsky"
            />
          </View>

          <View style={styles.weatherInfoContainer}>
            <WeatherTemperature
              main={21}
              min={47}
              max={63}
              style={{ marginBottom: 18 }}
            />

            <WeatherStats
              windSpeed={1.5}
              humidity={5}
              pressure={1023}
            />
          </View>

          <View></View>
        </ScrollView>
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
