import { User } from '@/core/domain/entities/user';
import { api } from '../../services/ApiService';
import { RegisterUserDto } from '@/core/domain/types/user-types';

export async function registerUser(data: RegisterUserDto): Promise<User> {
  return await api.post<User>('/users', data);
}