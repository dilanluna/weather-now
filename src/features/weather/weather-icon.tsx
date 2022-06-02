import Mist from '@assets/mist.svg';
import Rain from '@assets/rain.svg';
import Snow from '@assets/snow.svg';
import ClearSky from '@assets/clear-sky.svg';
import FewClouds from '@assets/few-clouds.svg';
import MistNight from '@assets/mist-night.svg';
import RainNight from '@assets/rain-night.svg';
import SnowNight from '@assets/snow-night.svg';
import ShowerRain from '@assets/shower-rain.svg';
import Thunderstorm from '@assets/thunderstorm.svg';
import BrokenClouds from '@assets/broken-clouds.svg';
import ClearSkyNight from '@assets/clear-sky-night.svg';
import FewCloudsNight from '@assets/few-clouds-night.svg';
import ScatteredClouds from '@assets/scattered-clouds.svg';
import ShowerRainNight from '@assets/shower-rain-night.svg';
import ThunderstormNight from '@assets/thunderstorm-night.svg';
import BrokenCloudsNight from '@assets/broken-clouds-night.svg';
import ScatteredCloudsNight from '@assets/scattered-clouds-night.svg';

const icons = {
  mist: Mist,
  rain: Rain,
  snow: Snow,
  clearsky: ClearSky,
  fewclouds: FewClouds,
  showerrain: ShowerRain,
  thunderstorm: Thunderstorm,
  brokenclouds: BrokenClouds,
  scatteredclouds: ScatteredClouds,
};

const nightlyIcons = {
  mist: MistNight,
  rain: RainNight,
  snow: SnowNight,
  clearsky: ClearSkyNight,
  fewclouds: FewCloudsNight,
  showerrain: ShowerRainNight,
  thunderstorm: ThunderstormNight,
  brokenclouds: BrokenCloudsNight,
  scatteredclouds: ScatteredCloudsNight,
};

type IconName = keyof typeof icons & keyof typeof nightlyIcons;

const getIcon = (name: IconName, nightly: boolean) =>
  nightly ? nightlyIcons[name] : icons[name];

type WeatherIconProps = {
  size: number;
  name: IconName;
  nightly?: boolean;
};

export default function WeatherIcon({
  size,
  name,
  nightly = false,
}: WeatherIconProps) {
  const Icon = getIcon(name, nightly);

  return (
    <Icon
      width={size}
      height={size}
    />
  );
}
