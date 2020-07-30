import { combineReducers } from 'redux';
import AuthReducer from './auth/reducer';

const allReducers = combineReducers({
  AuthReducer,
});

export type AppState = ReturnType<typeof allReducers>;
export default allReducers;
