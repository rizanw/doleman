import { FETCH_NEARBY, WisataActionState, WisataList } from "./types";

const initialState: WisataList = {
  wisatas: [],
};

export function wisataListReducer(
  state: WisataList = initialState,
  action: WisataActionState
): WisataList {
  switch (action.type) {
    case FETCH_NEARBY:
      return {
        wisatas: action.payload,
      };
    default:
      return state;
  }
}
