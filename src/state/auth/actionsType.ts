import { User } from './auth';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export interface RegisterSucces {
  type: typeof REGISTER_SUCCESS;
}
export interface LoginSucces {
  type: typeof LOGIN_SUCCESS;
}
export interface UserLoaded {
  type: typeof USER_LOADED;
  payload: User;
}
export interface AuthError {
  type: typeof AUTH_ERROR;
  payload: string;
}
export interface LogOut {
  type: typeof LOGOUT;
}
export interface clearError {
  type: typeof CLEAR_ERROR;
}

export type AuthActionTypes = LoginSucces | RegisterSucces | UserLoaded | AuthError | LogOut | clearError;
