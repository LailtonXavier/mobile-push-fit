import { CreateActivityDto } from '@/core/domain/types/activity-types';
import { getUser } from '@/core/infra/controllers/user/getUser';
import { useActivityStore } from '@/core/infra/store/useActivityStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

export function useCreateActivity() {
  const queryClient = useQueryClient()
  const { createActivity } = useActivityStore();

  return useMutation({
    mutationFn: async (data: CreateActivityDto) => {
      await createActivity(data)
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Atividade registrada com sucesso!!',
      });
      setTimeout(() => {
        router.replace('/(pages)/activity');
      }, 1000);      
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Ouve um erro ao registrar sua atividade, tente novamente em alguns instantes.',
      });
    },
  })
}

