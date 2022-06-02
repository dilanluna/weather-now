import { render } from '@testing-library/react-native';
import WeatherTemperature from './';

const temperature = {
  main: 21,
  min: 47,
  max: 63,
};

describe('WeatherStats', () => {
  it('should display main, mix and max weather temperature', () => {
    const { getByText } = render(
      <WeatherTemperature
        main={temperature.main}
        min={temperature.min}
        max={temperature.max}
      />,
    );

    expect(getByText(`${temperature.main}°`)).toBeTruthy();
    expect(getByText(`${temperature.min}°`)).toBeTruthy();
    expect(getByText(`${temperature.max}°`)).toBeTruthy();
  });
});
