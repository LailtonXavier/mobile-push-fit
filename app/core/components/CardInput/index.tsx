import useTheme from '@/hooks/useTheme';
import { ReactNode } from 'react';
import { Platform, View } from 'react-native';

interface CardInputProps {
  children: ReactNode;
  className?: string;
}

const CardInput = ({children, className}: CardInputProps) => {
  const {isDark, colors} = useTheme()
  return (
    <View
      className={`${className} ${isDark ? 'bg-cardInput-light' : 'bg-cardInput-dark'} flex flex-row rounded-2xl justify-between items-end`}
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

export default CardInput