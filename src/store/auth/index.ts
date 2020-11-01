import { AuthState, AuthActionTypes, UPDATE_AUTH } from "./types";

const initialState: AuthState = {
  isLoggedIn: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        isLoggedIn: action.meta.isLoggedIn,
      };
    default:
      return state;
  }
}
