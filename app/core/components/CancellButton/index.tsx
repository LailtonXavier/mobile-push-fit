import { ActivityIndicator, GestureResponderEvent, Pressable } from 'react-native'
import BaseTitle from '../BaseTitle'
import useTheme from '@/hooks/useTheme'

interface CancellButtonProps {
  title: string
  disabled?: boolean
  className?: string
  onPress?: ((event: GestureResponderEvent) => void) | null
}

const CancellButton = ({title, disabled, className, onPress}: CancellButtonProps) => {
  const {isDark} = useTheme()
  
  return (
    <Pressable
      className={`${className} ${isDark ? 'bg-background-light' : 'bg-background-dark' } h-11 rounded-md flex justify-center border border-border-light`}
      onPress={onPress}
      disabled={disabled}
    >
      {disabled ? (
        <ActivityIndicator
          className={`${isDark ? 'bg-background-light' : 'bg-background-dark' }`}
        />
      ) : (
        <BaseTitle isDark={!isDark} title={title} />
      )}
    </Pressable>
  )
}

export default CancellButton