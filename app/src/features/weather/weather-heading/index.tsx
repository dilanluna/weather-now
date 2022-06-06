import Text from '@components/text';
import { StyleSheet, View } from 'react-native';

export default function WeatherHeading({
  city,
  main,
  description,
}: {
  city: string;
  main: string;
  description: string;
}) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        variant="large-title">
        {city}
      </Text>
      <Text
        variant="title-2"
        style={[styles.text, styles.spaceBetween]}>
        {main}
      </Text>
      <Text
        variant="subheadline"
        style={[styles.text, styles.spaceBetween]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  spaceBetween: {
    marginTop: 8,
  },
});
