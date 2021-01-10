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
    coordinates: [];
    type: string;
  };
  images?: [string];
  rerata_biaya: string;
  crowdedness?: number;
  distance?: number;
  in?: number;
  total?: number;
  capacity?: number;
}

export const FETCH_NEARBY = "wisata/FETCH_NEARBY";
export const FETCH_BY_ID = "wisata/FETCH_BY_ID";
export const UPDATE_DISTANCE = "wisata/UPDATE_DISTANCE";
export const FETCH_STATISTIC = "wisata/statistic/FETCH_STATISTIC";
export const INC_STATISTIC = "wisata/statistic/INC_STATISTIC";
export const CHECK_IN = "wisata/ticket/CHECKIN";

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

interface FetchStatistic {
  type: typeof FETCH_STATISTIC;
  payload: Wisata;
}

interface IncStatistic {
  type: typeof INC_STATISTIC;
  payload: Wisata;
}

interface CheckIn {
  type: typeof CHECK_IN;
  payload: Wisata;
}

export type WisataActionState =
  | CheckIn
  | FetchNearby
  | FetchStatistic
  | IncStatistic
  | UpdateDistance
  | FetchWisata;
