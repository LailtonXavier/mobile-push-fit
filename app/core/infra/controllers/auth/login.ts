import { api } from '../../services/ApiService';
import { LoginDto } from '@/core/domain/types/user-types';
import { TokenTypes } from '@/core/domain/types/token-types';
import { tokenStore } from '../../store/tokenStore';

export async function login(data: LoginDto): Promise<TokenTypes> {
  const res = await api.post<TokenTypes>('/auth/login', data);
  await tokenStore.saveTokens(res)
  return res
}
