import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_GEOCODING,
  User,
  UserActionState,
} from "./types";

const initialState: User = {
  name: "",
  email: "",
  roles: "",
  accessToken: undefined,
  geocoding: undefined,
  adminOn: undefined,
};

export const authReducer = (
  state: User = initialState,
  action: UserActionState
): User => {
  switch (action.type) {
    case UPDATE_GEOCODING:
      return {
        ...state,
        geocoding: action.payload.address.city
          ? action.payload.address.city
          : action.payload.address.county + ", " + action.payload.address.state,
      };
    case REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        roles: action.payload.roles[0],
        accessToken: action.payload.accessToken,
      };
    case LOGIN_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        roles: action.payload.roles[0],
        accessToken: action.payload.accessToken,
        adminOn: action.payload.adminOn,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
