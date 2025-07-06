import { UpdateActivityDto } from '@/core/domain/types/activity-types';
import { useActivityStore } from '@/core/infra/store/useActivityStore';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

interface UpdateActivityProps {
  activityId: string;
  data: UpdateActivityDto;
}

export function useUpdateActivity() {
  const { updateActivity } = useActivityStore();

  return useMutation({
    mutationFn: async ({ activityId, data }: UpdateActivityProps) => {
      await updateActivity(data, activityId);
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Atividade atualizada com sucesso!!',
      });
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao atualizar a atividade. Tente novamente.',
      });
    },
  })
}

