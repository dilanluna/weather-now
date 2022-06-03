import { render } from '@testing-library/react-native';
import WeatherTemperature from './';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
}

const main = getRandomInt(0, 100);
const min = getRandomInt(0, main);
const max = getRandomInt(main, 100);

describe('WeatherTemperature', () => {
  it('should display main, mix and max weather temperature rounded to the nearest integer', () => {
    const { getByText } = render(
      <WeatherTemperature
        main={main}
        min={min}
        max={max}
      />,
    );

    expect(getByText(`${Math.round(main)}°`)).toBeTruthy();
    expect(getByText(`${Math.round(min)}°`)).toBeTruthy();
    expect(getByText(`${Math.round(max)}°`)).toBeTruthy();
  });
});
