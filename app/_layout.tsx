import { Exo_400Regular, Exo_500Medium, Exo_600SemiBold, Exo_700Bold, useFonts } from '@expo-google-fonts/exo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import "../global.css";
import { ThemeProvider } from './shared/providers/ThemeProvider';

import Toast from 'react-native-toast-message';
import { StatusBarWrapper } from './core/components/StatusBarWrapper';
import { toastConfig } from './core/components/toastConfig';
import { useAuthStore } from './core/infra/store/useAuthStore';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const loadUserFromToken = useAuthStore((state) => state.loadUserFromToken);
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Exo_400Regular,
    Exo_500Medium,
    Exo_700Bold,
    Exo_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await loadUserFromToken();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StatusBarWrapper />
        <Slot />
        <Toast config={toastConfig} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
