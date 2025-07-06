import { Text, View } from 'react-native'
import MediumTitle from '../MediumTitle'
import useTheme from '@/hooks/useTheme'

interface PageTitleChatProps {
  title: string
  className?: string
}

const PageTitleChat = ({title, className}: PageTitleChatProps) => {
  const {isDark} = useTheme()
  return (
    <View className={`${className} flex flex-row items-center`}>
      <Text 
        className={`text-2xl font-sans-medium ${!isDark ? 'text-text-dark' : 'text-text-light'}`}
      >
        {title}
      </Text>
    </View>
  )
}

export default PageTitleChat