import { render } from '@testing-library/react-native';
import WeatherHeading from './';

const weather = {
  city: 'New York',
  main: 'Clear',
  description: 'clear sky',
};

describe('WeatherHeading', () => {
  it('display a city, main weather and weather description', () => {
    const { getByText } = render(
      <WeatherHeading
        city={weather.city}
        main={weather.main}
        description={weather.description}
      />,
    );

    expect(getByText(weather.city)).toBeTruthy();
    expect(getByText(weather.main)).toBeTruthy();
    expect(getByText(weather.description)).toBeTruthy();
  });
});
