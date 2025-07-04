import { ResponseDelete } from '@/core/domain/types/activity-types';
import { api } from '../../services/ApiService';

export async function deleteActivity(activityID: string): Promise<ResponseDelete> {
  return await api.delete<ResponseDelete>(`/activities/${activityID}`);
}
