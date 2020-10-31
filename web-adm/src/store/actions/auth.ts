import { action } from 'typesafe-actions';
import { AuthActionTypes, AuthData } from '../types';

export const login = (data: AuthData) => action(AuthActionTypes.AUTH, { data });

export const logout = () => action(AuthActionTypes.UNAUTH);