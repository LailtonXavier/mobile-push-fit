import { create } from 'zustand';
import {  User } from '../../domain/entities/user';
import { registerUser } from '../controllers/auth/registerUser';
import { tokenStore } from './tokenStore';
import { getUser } from '../controllers/user/getUser';
import { DeleteAccountDto, LoginDto, RegisterUserDto, UpdateUserDto } from '@/core/domain/types/user-types';
import { login } from '../controllers/auth/login';
import { deleteAccount } from '../controllers/user/deleteAccount';
import { updateUser } from '../controllers/user/updateUser';

interface AuthState {
  user: User | null;
  register: (data: RegisterUserDto) => Promise<void>;
  update: (data: UpdateUserDto) => Promise<void>;
  delete: (data: DeleteAccountDto) => Promise<void>;
  login: (data: LoginDto) => Promise<void>;
  logout: () => Promise<void>;
  loadUserFromToken: () => Promise<void>;
  isLoading: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  login: async (data) => {
    const token = await login(data);
    if (token) {
      const user = await getUser();
      set({ user });
    }
  },

  register: async (data) => {
    const user = await registerUser(data);
    set({ user });
  },

  update: async (data) => {
    const { user } = useAuthStore.getState();
    if (!user) return;
    
    await updateUser(user.id, data);
    const res = await getUser();
    set({ user: res });
  },
  
  
  delete: async (password) => {
    const { user } = useAuthStore.getState();
    if (!user) return;

    await deleteAccount(user.id, password);
    await tokenStore.clearTokens();
    set({ user: null });
  },

  logout: async () => {
    await tokenStore.clearTokens();
    set({ user: null });
  },

  loadUserFromToken: async () => {
    try {
      const token = await tokenStore.getAccessToken();
      if (token) {
        const user = await getUser();
        set({ user });
      }
    } catch (error) {
      await tokenStore.clearTokens();
      set({ user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));

