import useTheme from '@/hooks/useTheme';
import React, { ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

interface BackgroundScrollProps {
  children: ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const BackgroundScroll = ({ children, className, style }: BackgroundScrollProps) => {
  const {isDark} = useTheme()

  return (
    <ScrollView
      className={`${className} ${isDark ? 'bg-background-light' : 'bg-background-dark'}`}
      style={style}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default BackgroundScroll;
