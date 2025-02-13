import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'light' ? Colors.light : Colors.dark;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (

      <Stack screenOptions={{headerStyle:{backgroundColor:theme.headerBacground}}}>
        <Stack.Screen name="index" options={{ title: 'Home' }}/>
        <Stack.Screen name="menu" options={{ title: 'Coffee Shop Menu' }}/>
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
  
  );
}
