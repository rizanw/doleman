export interface Wisata {
  label: String;
  name: String;
  description: String;
  phone: String;
  time_op: {
    day: [String];
    hour: [String];
  };
  address: {
    street: String;
    city: String;
    province: String;
  };
  location: {
    coordinate: [Number];
    type: String;
  };
  images?: [String];
  distance?: number;
}

export const FETCH_NEARBY = "wisata/FETCH_NEARBY";
export const UPDATE_DISTANCE = "wisata/UPDATE_DISTANCE";

export interface WisataList {
  wisatas: Wisata[];
}

interface FetchNearby {
  type: typeof FETCH_NEARBY;
  payload: Wisata[];
}

interface UpdateDistance {
  type: typeof UPDATE_DISTANCE;
  payload: Wisata;
}

export type WisataActionState = FetchNearby | UpdateDistance;
