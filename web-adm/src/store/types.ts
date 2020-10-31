/**
 * Action Types
 */

export enum AuthActionTypes {
  AUTH = '@auth/AUTH',
  UNAUTH = '@auth/UNAUTH'
}

/**
 * State Types
 */

interface User {
  id: string;
  name: string;
  email: string;
};

export interface AuthData {
  readonly admin?: User;
  readonly token?: string;
};

export interface ApplicationState {
  auth: AuthData
}