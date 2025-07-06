import useTheme from '@/hooks/useTheme';
import { StatusBar } from 'react-native';

export function StatusBarWrapper() {
  const { isDark } = useTheme();
  return (
    <StatusBar
      barStyle={isDark ? 'dark-content' : 'light-content'}
      backgroundColor="transparent"
      translucent
    />
  );
}