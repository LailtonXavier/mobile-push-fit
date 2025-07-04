import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import Toast from 'react-native-toast-message';
import { DeleteAccountDto } from '@/core/domain/types/user-types';
import { router } from 'expo-router';

export function useDeleteAccount() {
  const { delete: deleteUser } = useAuthStore();

  return useMutation({
    mutationFn: async (data: DeleteAccountDto) => {
      await deleteUser(data)
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Conta deletada com sucesso!!',
      });
      setTimeout(() => {
        router.replace('/(pages)/login');  
      }, 1500);
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Ouve um erro ao deletar sua conta, tente novamente em alguns instantes.',
      });
    },
  })
}

