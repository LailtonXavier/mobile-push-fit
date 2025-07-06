import { Activity } from '../entities/activity';

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  activities: Activity[];
  photo: string;
};

export interface RegisterUserDto {
  photo: string;
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDto {
  photo?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface DeleteAccountDto {
  password: string;
}
