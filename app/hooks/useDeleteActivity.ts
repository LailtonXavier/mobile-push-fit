import { useActivityStore } from '@/core/infra/store/useActivityStore';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export function useDeleteActivity() {
  const { deleteActivity } = useActivityStore();

  return useMutation({
    mutationFn: async (activityID: string) => {
      await deleteActivity(activityID)
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Atividade deletada com sucesso!!',
      });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Ouve um erro ao deletar sua atividade, tente novamente em alguns instantes.',
      });
    },
  })
}

