import useTheme from '@/hooks/useTheme'
import { Text } from 'react-native'

interface SemiTitleProps {
  title: string
  className?: string
}

const SemiTitle = ({title, className}: SemiTitleProps) => {
  const {isDark} = useTheme()
  return (
    <Text className={`${className} font-sans-semibold ${!isDark ? 'text-text-dark' : 'text-text-light'}`}
    >
      {title}
    </Text>
  )
}

export default SemiTitle