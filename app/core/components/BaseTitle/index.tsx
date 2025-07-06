import { Text } from 'react-native'

interface BaseTitleProps {
  isDark: boolean
  title: string | number
  className?: string
}

const BaseTitle = ({isDark, title, className}: BaseTitleProps) => {
  return (
    <Text className={`text-base font-sans text-center ${isDark ? 'text-text-dark' : 'text-text-light'} ${className} `}
    >
      {title}
    </Text>
  )
}

export default BaseTitle