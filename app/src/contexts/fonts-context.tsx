import { View } from 'react-native';
import { loadAsync } from 'expo-font';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import {
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export default function FontsProvider({ children }: { children: ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await preventAutoHideAsync();
        await loadAsync({
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
