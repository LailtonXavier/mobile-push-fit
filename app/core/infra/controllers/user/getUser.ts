import { UserResponse } from '@/core/domain/types/user-types';
import { api } from '../../services/ApiService';

export async function getUser(): Promise<UserResponse> {
  return await api.get<UserResponse>('/users');
}
