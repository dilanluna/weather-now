import { render } from '@testing-library/react-native';
import WeatherStats from './';

const stats = {
  windSpeed: 10,
  humidity: 20,
  pressure: 30,
};

describe('WeatherStats', () => {
  it('display the weather wind speed, humidity and pressure', () => {
    const { getByText } = render(
      <WeatherStats
        windSpeed={stats.windSpeed}
        humidity={stats.humidity}
        pressure={stats.pressure}
      />,
    );

    expect(getByText(`${stats.windSpeed} m/s`)).toBeTruthy();
    expect(getByText(`${stats.humidity} %`)).toBeTruthy();
    expect(getByText(`${stats.pressure} hPa`)).toBeTruthy();
  });
});
