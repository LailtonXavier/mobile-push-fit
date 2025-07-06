import useTheme from '@/hooks/useTheme'
import { Text } from 'react-native'

const Divide = () => {
  const { isDark } = useTheme()
  return (
    <Text className={`w-full h-[1] ${isDark ? 'bg-divid-light' : 'bg-divid-dark'}`}></Text>
  )
}

export default Divide