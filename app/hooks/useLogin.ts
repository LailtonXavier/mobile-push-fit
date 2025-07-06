import { LoginDto } from '@/core/domain/types/user-types';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

export function useLogin() {
  const queryClient = useQueryClient()
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: async (data: LoginDto) => {
      await login(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/users'] })
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao logar.',
      });
    },
  })
}

