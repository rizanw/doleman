import { AuthActionTypes, UPDATE_AUTH } from "./types";

export function updateAuth(isLoggedIn: boolean): AuthActionTypes {
  return {
    type: UPDATE_AUTH,
    meta: {
      isLoggedIn: isLoggedIn,
    },
  };
}
