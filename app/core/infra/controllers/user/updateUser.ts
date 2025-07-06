import { UpdateUserDto, UserResponse } from '@/core/domain/types/user-types';
import { api } from '../../services/ApiService';

export async function updateUser(userID: string, data: UpdateUserDto): Promise<UserResponse> {
  return await api.put<UserResponse>(`/users/${userID}`, data);
}
