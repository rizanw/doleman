import { Dispatch } from "redux";
import { WISATA } from "../../resources/api";
import { fetchPost } from "../../utils/fetch";
import { FETCH_BY_ID, FETCH_NEARBY } from "./types";

export function fetchNearby(coordinates: { lat: number; long: number }) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(WISATA.nearby, coordinates);
    dispatch({ type: FETCH_NEARBY, payload: res });
    return res;
  };
}

export function fetchWisata(id: string) {
  return async (dispatch: Dispatch) => {
    const res = await fetchPost(WISATA.fetchById, { id: id }); 
    dispatch({ type: FETCH_BY_ID, payload: res });
    return res;
  };
}
