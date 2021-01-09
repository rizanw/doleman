//API URL
export const API_URL = process.env.API_URL
  ? process.env.API_URL
  : "https://doleman.herokuapp.com/api";

const BASE = {
  auth: `${API_URL}/auth`,
  user: `${API_URL}/user`,
  wisata: `${API_URL}/wisata`,
};

//API End Points
export const AUTH = {
  login: `${BASE.auth}/login`,
  register: `${BASE.auth}/register`,
  token_check: `${BASE.auth}/test_token`,
};

export const WISATA = {
  getAll: `${BASE.wisata}/all`,
  nearby: `${BASE.wisata}/nearby`,
  fetchById: `${BASE.wisata}/`,
  fetchStatisticById: `${BASE.wisata}/statistic`,
  addStatisticById: `${BASE.wisata}/statistic/add`,
};
