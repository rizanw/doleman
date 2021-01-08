import { Dispatch } from "redux";
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_GEOCODING,
  UserIn,
  UserReg,
} from "./types";
import { AUTH } from "../../resources/api";
import { fetchGet, fetchPost } from "../../utils/fetch";

export function updateGeo(coords: { lat: number; lon: number }) {
  return async (dispatch: Dispatch) => {
    const GeoAPI = "pk.12480b436f19d2977113ac333ed2a602";
    var uri = `https://us1.locationiq.com/v1/reverse.php?key=${GeoAPI}&lat=${coords.lat}&lon=${coords.lon}&format=json`;
    const res = await fetchGet(uri);
    dispatch({ type: UPDATE_GEOCODING, payload: res });
    return res;
  };
}

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
