import { Dispatch } from "redux";
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UserIn,
  UserReg,
} from "./types";
import { AUTH } from "../../resources/api";
import { fetchPost } from "../../utils/fetch";

export function register(user: UserReg) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(AUTH.register, user);
    dispatch({ type: REGISTER_USER, payload: res });
    return res;
  };
}

export function login(user: UserIn) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(AUTH.login, user);
    dispatch({ type: LOGIN_USER, payload: res });
    return res;
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}
