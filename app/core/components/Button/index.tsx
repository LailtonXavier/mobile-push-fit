import { ActivityIndicator, GestureResponderEvent, Pressable } from 'react-native'
import BaseTitle from '../BaseTitle'
import useTheme from '@/hooks/useTheme'

interface ButtonProps {
  title: string
  disabled?: boolean
  className?: string
  onPress?: ((event: GestureResponderEvent) => void) | null
}

const Button = ({title, disabled, className, onPress}: ButtonProps) => {
  const {isDark} = useTheme()
  
  return (
    <Pressable
      className={`${className} ${!isDark ? 'bg-background-light' : 'bg-background-dark' } h-11 rounded-md flex justify-center w-full`}
      onPress={onPress}
      disabled={disabled}
    >
      {disabled ? (
        <ActivityIndicator
          className={`${!isDark ? 'bg-background-light' : 'bg-background-dark' }`}
        />
      ) : (
        <BaseTitle isDark={isDark} title={title} />
      )}
    </Pressable>
  )
}

export default Button