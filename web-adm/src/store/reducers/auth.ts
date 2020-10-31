import { Reducer } from 'redux';
import { AuthData, AuthActionTypes } from '../types';

const INITIAL_STATE: AuthData = {};

const authReducer: Reducer<AuthData> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return action.payload.data;
      
    case AuthActionTypes.UNAUTH:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default authReducer;