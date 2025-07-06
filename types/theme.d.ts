// types/theme.d.ts
import { ThemeColors } from '@/providers/ThemeProvider';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: ThemeColors;
  };
  export function useTheme(): ExtendedTheme;
}