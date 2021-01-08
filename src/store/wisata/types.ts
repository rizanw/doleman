export interface Wisata {
  label: string;
  name: string;
  description: string;
  phone: string;
  time_op: {
    day: [string];
    hour: [string];
  };
  address: {
    street: string;
    city: string;
    province: String;
  };
  location: {
    coordinate: [];
    type: string;
  };
  images?: [string];
  distance?: number;
}

export const FETCH_NEARBY = "wisata/FETCH_NEARBY";
export const FETCH_BY_ID = "wisata/FETCH_BY_ID";
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

interface FetchWisata {
  type: typeof FETCH_BY_ID;
  payload: Wisata;
}

export type WisataActionState = FetchNearby | UpdateDistance | FetchWisata;
