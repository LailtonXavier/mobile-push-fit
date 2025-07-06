import { ActivityIntensity } from '../types/activity-intensity-types';

export interface Activity {
  id?: string;
  name: string;
  duration: number;
  intensity: ActivityIntensity;
  userId: string;
  createdAt: Date;
  photo?: string | null;
  distance?: number;
  score?: number;
}