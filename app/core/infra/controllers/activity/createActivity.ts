import { Activity } from '@/core/domain/entities/activity';
import { CreateActivityDto } from '@/core/domain/types/activity-types';
import { api } from '../../services/ApiService';

export async function createActivity(data: CreateActivityDto): Promise<Activity> {
  return await api.post<Activity>('/activities', data);
}
