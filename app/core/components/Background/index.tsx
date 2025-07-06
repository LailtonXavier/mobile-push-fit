import useTheme from '@/hooks/useTheme';
import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const Background = ({ children, className, style }: BackgroundProps) => {
  const {isDark} = useTheme()

  return (
    <View
      className={`${className} ${isDark ? 'bg-background-light' : 'bg-background-dark'}`}
      style={style}
    >
      {children}
    </View>
  );
};

export default Background;
