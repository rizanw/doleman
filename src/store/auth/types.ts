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
  geocoding?: string;
}

export const LOGOUT_USER = "auth/LOGOUT_USER";
export const LOGIN_USER = "auth/LOGIN_USER";
export const REGISTER_USER = "auth/REGISTER_USER";

export const UPDATE_GEOCODING = "user/UPDATE_GEOCODING";

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

interface UpdateGeocoding {
  type: typeof UPDATE_GEOCODING;
  payload: {
    address: {
      country: string;
      country_code: string;
      county: string;
      city: string;
      postcode: string;
      state: string;
      village: string;
    };
  };
}

export type UserActionState =
  | UpdateGeocoding
  | RegisterUserAction
  | LoginUserAction
  | LogoutUserAction;
