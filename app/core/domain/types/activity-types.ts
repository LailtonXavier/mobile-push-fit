import { ActivityIntensity } from './activity-intensity-types';

export interface CreateActivityDto {
  name: string;
  duration: number;
  intensity: ActivityIntensity;
  distance?: number;
  photo?: string;
}

export interface UpdateActivityDto {
  name?: string;
  duration?: number;
  intensity?: ActivityIntensity;
  distance?: number;
  photo?: string;
  createdAt?: Date;
}

export interface ResponseDelete {
	success: boolean,
	message: string
}
