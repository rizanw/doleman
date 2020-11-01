export interface AuthState {
  isLoggedIn: boolean;
}

export const UPDATE_AUTH = "auth/UPDATE_AUTH";

interface UpdateAuthAction {
  type: typeof UPDATE_AUTH;
  meta: {
    isLoggedIn: boolean;
  };
}

export type AuthActionTypes = UpdateAuthAction;
