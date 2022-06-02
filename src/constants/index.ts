import { DefaultTheme, Theme } from '@react-navigation/native';

const Colors = {
  light: {
    primary: '#3A92E2',
    secondary: '#3ED6E0',
    white: '#FFFFFF',
  },
  dark: {
    primary: '#394652',
    secondary: '#508B8E',
    white: '#FFFFFF',
  },
};

export type AppTheme = {
  colors: {
    primary: string;
    secondary: string;
  };
} & Theme;

export const LightTheme: AppTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.primary,
    secondary: Colors.light.secondary,
    background: Colors.light.white,
  },
};

export const DarkTheme: AppTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.dark.primary,
    secondary: Colors.dark.secondary,
    background: Colors.dark.primary,
  },
};
