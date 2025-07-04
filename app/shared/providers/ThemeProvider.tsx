import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, useColorScheme, View } from 'react-native';
import { themeColors, ThemeColorsType } from '../constants/Colors';

type ThemeContextType = {
  isDark: boolean;
  colors: ThemeColorsType;
  toggleTheme: () => Promise<void>;
  setTheme: (dark: boolean) => Promise<void>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const colors: ThemeColorsType = isDark ? themeColors.dark : themeColors.light;

  const applyTheme = (dark: boolean) => {
    setIsDark(dark);
  };

  const loadTheme = useCallback(async () => {
    try {
      const saved = await AsyncStorage.getItem('@userTheme');
      const dark = saved ? saved === 'dark' : systemColorScheme === 'dark';
      applyTheme(dark);
    } catch (e) {
      console.error('Erro carregando tema', e);
    } finally {
      setLoaded(true);
    }
  }, [systemColorScheme]);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  const toggleTheme = async () => {
    const newDark = !isDark;
    applyTheme(newDark);
    await AsyncStorage.setItem('@userTheme', newDark ? 'dark' : 'light');
  };

  const setTheme = async (dark: boolean) => {
    applyTheme(dark);
    await AsyncStorage.setItem('@userTheme', dark ? 'dark' : 'light');
  };

  if (!loaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};