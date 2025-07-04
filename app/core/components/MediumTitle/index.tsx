import useTheme from '@/hooks/useTheme'
import { Text } from 'react-native'

interface MediumTitleProps {
  title: string
  className?: string
}

const MediumTitle = ({title, className}: MediumTitleProps) => {
  const {isDark} = useTheme()
  return (
    <Text className={`${className} w-full text-xl font-sans-medium ${!isDark ? 'text-text-dark' : 'text-text-light'}`}
    >
      {title}
    </Text>
  )
}

export default MediumTitle