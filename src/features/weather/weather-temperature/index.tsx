import Text from '@components/text';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export default function WeatherTemperature({
  main,
  min,
  max,
  style,
}: {
  main: number;
  min: number;
  max: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[style, styles.container]}>
      <Text
        variant="large-title"
        style={[styles.text, styles.mainTemperature]}>
        {Math.round(main)}°
      </Text>
      <View style={styles.rightAlignedContainer}>
        <View style={styles.minMaxTemperatureContainer}>
          <Text
            style={styles.text}
            variant="title-3">
            {Math.round(min)}°
          </Text>
          <Text
            style={styles.text}
            variant="caption-1"
            accessibilityLabel="Minimum Temperature">
            MIN
          </Text>
        </View>

        <View style={[styles.minMaxTemperatureContainer, { marginLeft: 10 }]}>
          <Text
            style={styles.text}
            variant="title-3">
            {Math.round(max)}°
          </Text>
          <Text
            style={styles.text}
            variant="caption-1"
            accessibilityLabel="Maximum Temperature">
            MAX
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
  mainTemperature: {
    fontSize: 48,
    lineHeight: 57,
  },
  rightAlignedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  minMaxTemperatureContainer: {
    alignItems: 'center',
  },
});
