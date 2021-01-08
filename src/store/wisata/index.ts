import {
  FETCH_BY_ID,
  FETCH_NEARBY,
  Wisata,
  WisataActionState,
  WisataList,
} from "./types";

const initialStateList: WisataList = {
  wisatas: [],
};

export function wisataListReducer(
  state: WisataList = initialStateList,
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

const initialState: Wisata = {
  label: "",
  name: "",
  description: "",
  phone: "",
  time_op: {
    day: [""],
    hour: [""],
  },
  address: {
    street: "",
    city: "",
    province: "",
  },
  location: {
    coordinate: [],
    type: "",
  },
  images: [""],
  distance: 0,
};

export function wisataReducer(
  state: Wisata = initialState,
  action: WisataActionState
): Wisata {
  switch (action.type) {
    case FETCH_BY_ID:
      return action.payload;
    default:
      return state;
  }
}
