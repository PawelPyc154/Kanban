import { GoogleLoginResponse } from 'react-google-login';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axiosWithConfig from '../../utils/axiosWithConfig';
import {
  AuthActionTypes,
  AUTH_ERROR,
  CLEAR_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  USER_LOADED,
} from './actionsType';

const asyncHandlerError = (fn: (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => void) => (
  dispatch: ThunkDispatch<{}, {}, AuthActionTypes>,
) =>
  Promise.resolve(fn(dispatch)).catch((err) => {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response?.data.error,
    });
  });

export const loadUser = () =>
  asyncHandlerError(async (dispatch: Dispatch<AuthActionTypes>) => {
    const res = await axiosWithConfig.get('/auth/me');
    dispatch({
      type: USER_LOADED,
      payload: { ...res.data.data },
    });
  });

export const setLogin = (email: string, password: string) =>
  asyncHandlerError(async (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => {
    await axiosWithConfig.post('/auth/login', { email, password });
    await dispatch({
      type: LOGIN_SUCCESS,
    });
    await dispatch(loadUser());
  });

export const setLoginRegisterGoogle = (res: GoogleLoginResponse) =>
  asyncHandlerError(async (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => {
    await axiosWithConfig.post('/auth/google/token', {
      access_token: res.accessToken,
    });
    await dispatch({
      type: LOGIN_SUCCESS,
    });
    await dispatch(loadUser());
  });

export const setRegister = (name: string, email: string, password: string) =>
  asyncHandlerError(async (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => {
    await axiosWithConfig.post('/auth/register', { name, email, password });
    await dispatch({
      type: REGISTER_SUCCESS,
    });
    await dispatch(loadUser());
  });

export const setLogOut = () =>
  asyncHandlerError(async (dispatch: ThunkDispatch<{}, {}, AuthActionTypes>) => {
    const res = await axiosWithConfig.post('/auth/logout');
    dispatch({
      type: LOGOUT,
      payload: res.data,
    });
  });

export const clearError = (): AuthActionTypes => ({ type: CLEAR_ERROR });
