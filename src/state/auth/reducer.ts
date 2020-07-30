import {
  AuthActionTypes,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERROR,
} from './actionsType';
import { Auth } from './auth';

const initialState: Auth = {
  isAuthenticated: false,
  loading: true,
  error: null,
  user: null,
};

const AuthReducer = (state = initialState, action: AuthActionTypes): Auth => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
export default AuthReducer;
