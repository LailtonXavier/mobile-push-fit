import { UpdateUserDto } from '@/core/domain/types/user-types';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export function useUpdateAccount() {
  const { update } = useAuthStore();

  return useMutation({
    mutationFn: async (data: UpdateUserDto) => {
      await update(data);
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Usuario atualizado com sucesso!!',
      });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao atualizar. Tente novamente.',
      });
    },
  })
}

