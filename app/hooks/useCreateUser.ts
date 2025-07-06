import { RegisterUserDto } from '@/core/domain/types/user-types';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

export function useCreateUser() {
  const queryClient = useQueryClient()
  const { register } = useAuthStore();

  return useMutation({
    mutationFn: async (data: RegisterUserDto) => {
      await register(data)
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Conta registrada com sucesso!',
      });
      setTimeout(() => {
        router.replace('/(pages)/login');
      }, 1000);
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar a conta.',
      });
    },
  })
}

