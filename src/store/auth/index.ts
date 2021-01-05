import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  User,
  UserActionState,
} from "./types";

const initialState: User = {
  name: "",
  email: "",
  roles: "",
  accessToken: undefined,
};

export const authReducer = (
  state: User = initialState,
  action: UserActionState
): User => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.name,
        roles: action.payload.roles[0],
        accessToken: action.payload.accessToken,
      };
    case LOGIN_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.name,
        roles: action.payload.roles[0],
        accessToken: action.payload.accessToken,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
