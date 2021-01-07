import { Dispatch } from "redux";
import { WISATA } from "../../resources/api";
import { fetchPost } from "../../utils/fetch";
import { FETCH_NEARBY } from "./types";

export function fetchNearby(coordinates: { lat: number; long: number }) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(WISATA.nearby, coordinates);
    dispatch({ type: FETCH_NEARBY, payload: res });
    return res;
  };
}
