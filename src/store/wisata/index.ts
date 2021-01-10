import {
  CHECK_IN,
  FETCH_BY_ID,
  FETCH_NEARBY,
  FETCH_STATISTIC,
  INC_STATISTIC,
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
  in: 0,
  total: 0,
  capacity: 0,
};

export function wisataReducer(
  state: Wisata = initialState,
  action: WisataActionState
): Wisata {
  switch (action.type) {
    case FETCH_BY_ID:
      return action.payload;
    case FETCH_STATISTIC:
      return {
        ...state,
        in: action.payload.in,
        total: action.payload.total,
        capacity: action.payload.capacity,
      };
    case INC_STATISTIC:
      return {
        ...state,
        in: action.payload.in,
        total: action.payload.total,
        capacity: action.payload.capacity,
      };
    case CHECK_IN:
      return {
        ...state,
        in: action.payload.in,
        total: action.payload.total,
        capacity: action.payload.capacity,
      };
    default:
      return state;
  }
}
