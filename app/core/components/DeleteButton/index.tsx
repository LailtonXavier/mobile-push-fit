import useTheme from '@/hooks/useTheme'
import { TrashDeleteAccount } from '@assets/icons/TrashDeleteAccount'
import { ActivityIndicator, GestureResponderEvent, Pressable } from 'react-native'
import BaseTitle from '../BaseTitle'

interface DeleteButtonProps {
  title?: string
  disabled?: boolean
  className?: string
  onPress?: ((event: GestureResponderEvent) => void) | null
}

const DeleteButton = ({title, disabled, className, onPress}: DeleteButtonProps) => {
  const {isDark, colors} = useTheme()

  return (
    <Pressable
      className={`${className} ${isDark ? 'bg-delete-light' : 'bg-delete-dark' } h-11 rounded-md flex flex-row justify-center items-center`}
      onPress={onPress}
      disabled={disabled}
    >
      {disabled ? (
        <ActivityIndicator
          className={`${isDark ? 'bg-background-light' : 'bg-background-dark' }`}
        />
      ) : (
        <>
          <BaseTitle isDark={isDark} title={title || 'Excluir atividade'} className='mr-2' />
          <TrashDeleteAccount color={colors.primary} />
        </>
      )}
    </Pressable>
  )
}

export default DeleteButton