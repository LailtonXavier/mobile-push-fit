import { ResponseDelete } from '@/core/domain/types/activity-types';
import { DeleteAccountDto } from '@/core/domain/types/user-types';
import { api } from '../../services/ApiService';

export async function deleteAccount(userID: string, data: DeleteAccountDto): Promise<ResponseDelete> {
  return await api.post<ResponseDelete>(`/users/${userID}/delete`, data);
}
