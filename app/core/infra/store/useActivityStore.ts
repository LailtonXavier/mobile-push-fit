import { Activity } from '@/core/domain/entities/activity';
import { CreateActivityDto, UpdateActivityDto } from '@/core/domain/types/activity-types';
import { create } from 'zustand';
import { createActivity } from '../controllers/activity/createActivity';
import { useAuthStore } from './useAuthStore';
import { getUser } from '../controllers/user/getUser';
import { updateActivity } from '../controllers/activity/updateActivity';
import { deleteActivity } from '../controllers/activity/deleteActivity';

interface AuthState {
  activity: Activity  | null;
  createActivity: (data: CreateActivityDto) => Promise<void>;
  updateActivity: (data: UpdateActivityDto, activityID: string) => Promise<void>;
  deleteActivity: (activityID: string) => Promise<void>;
  isLoading: boolean;
}

export const useActivityStore = create<AuthState>((set) => ({
  activity: null,
  isLoading: true,

  createActivity: async (data) => {
    set({ isLoading: true });

    await createActivity(data);

    useAuthStore.getState().user;

    const updatedUser = await getUser();
    useAuthStore.setState({ user: updatedUser });

    set({ isLoading: false });
  },

  updateActivity: async (data, activityID) => {
    set({ isLoading: true });

    await updateActivity(data, activityID);

    useAuthStore.getState().user;

    const updatedUser = await getUser();
    useAuthStore.setState({ user: updatedUser });

    set({ isLoading: false });
  },

  deleteActivity: async (activityID) => {
    set({ isLoading: true });

    await deleteActivity(activityID);

    useAuthStore.getState().user;

    const updatedUser = await getUser();
    useAuthStore.setState({ user: updatedUser });

    set({ isLoading: false });
  },
}));

