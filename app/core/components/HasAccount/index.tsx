import { GestureResponderEvent, Pressable, Text, View } from 'react-native'

interface HasAccountProps {
  isDark: boolean
  firstTitle: string
  secondTitle: string
  onPress?: ((event: GestureResponderEvent) => void) | null
}

const HasAccount = ({isDark, firstTitle, secondTitle, onPress}: HasAccountProps) => {
  return (
    <View
      className="w-full flex flex-row mt-2"
    >
      <Text
        className={`${isDark ? 'text-text-dark' : 'text-text-light'}`}
      >
      {firstTitle}?</Text>
      <Pressable onPress={onPress}>
        <Text className='font-sans text-info-light ml-2'>{secondTitle} →</Text>
      </Pressable>
    </View>
  )
}

export default HasAccount