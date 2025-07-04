import { Text } from 'react-native'

interface IMainTitle {
  isDark: boolean
  title: string
}

const MainTitle = ({isDark, title}: IMainTitle) => {
  return (
    <Text className={`text-4xl font-bold text-center font-sans-bold ${isDark ? 'text-text-dark' : 'text-text-light'}`}
    >
      {title}
    </Text>
  )
}

export default MainTitle