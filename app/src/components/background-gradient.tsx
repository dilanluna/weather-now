import { ReactNode } from 'react';
import { AppTheme } from '@constants';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BackgroundGradient({
  children,
}: {
  children: ReactNode;
}) {
  const { colors } = useTheme() as AppTheme;

  return (
    <LinearGradient
      style={styles.background}
      colors={[colors.secondary, colors.primary]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
