import { Activity } from '@/core/domain/entities/activity';
import { UpdateActivityDto } from '@/core/domain/types/activity-types';
import { api } from '../../services/ApiService';

export async function updateActivity(data: UpdateActivityDto, activityID: string): Promise<Activity> {
  return await api.put<Activity>(`/activities/${activityID}`, data);
}
