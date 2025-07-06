import useTheme from '@/hooks/useTheme';
import { ReactNode } from 'react';
import { Platform, View } from 'react-native';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({children, className}: CardProps) => {
  const {isDark, colors} = useTheme()
  return (
    <View
      className={`${className} flex items-center justify-center rounded-xl p-4 ${isDark ? 'bg-card-light' : 'bg-cardInput-dark'}`}
      style={{
        ...Platform.select({
          ios: {
            shadowColor: colors.boxShadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          android: {
            elevation: 4,
          },
        }),
      }}
      >
        {children}
    </View>
  )
}

export default Card