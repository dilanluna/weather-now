import Text from '@components/text';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function WeatherStats({
  windSpeed,
  humidity,
  pressure,
}: {
  windSpeed: number;
  humidity: number;
  pressure: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Feather
          size={28}
          name="wind"
          color="white"
        />
        <Text
          style={styles.text}
          variant="subheadline"
          accessibilityLabel="Wind Speed">
          WIND
        </Text>
        <Text
          style={styles.text}
          variant="subheadline">
          {windSpeed} m/s
        </Text>
      </View>

      <View style={styles.stat}>
        <Feather
          size={28}
          color="white"
          name="droplet"
        />
        <Text
          style={styles.text}
          variant="subheadline"
          accessibilityLabel="Humidity">
          HUM
        </Text>
        <Text
          style={styles.text}
          variant="subheadline">
          {humidity} %
        </Text>
      </View>

      <View style={styles.stat}>
        <Feather
          size={28}
          color="white"
          name="umbrella"
        />
        <Text
          style={styles.text}
          variant="subheadline"
          accessibilityLabel="Atmospheric Pressure">
          PRESS
        </Text>
        <Text
          style={styles.text}
          variant="subheadline">
          {pressure} hPa
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
