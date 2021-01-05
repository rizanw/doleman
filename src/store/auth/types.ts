export interface UserIn {
  email: string;
  password: string;
}

export interface UserReg extends UserIn {
  name: string;
  roles: [string];
}

export interface User {
  name: string;
  email: string;
  roles: string;
  accessToken?: string;
}

export const LOGOUT_USER = "auth/LOGOUT_USER";
export const LOGIN_USER = "auth/LOGIN_USER";
export const REGISTER_USER = "auth/REGISTER_USER";

interface RegisterUserAction {
  type: typeof REGISTER_USER;
  payload: User;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type UserActionState =
  | RegisterUserAction
  | LoginUserAction
  | LogoutUserAction;
