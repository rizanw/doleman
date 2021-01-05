//API URL
export const API_URL = process.env.API_URL
  ? process.env.API_URL
  : "https://1fcdf231c683.ngrok.io/api";

const BASE = {
  auth: `${API_URL}/auth`,
  user: `${API_URL}/user`,
};

//API End Points
export const AUTH = {
  login: `${BASE.auth}/login`,
  register: `${BASE.auth}/register`,
  token_check: `${BASE.auth}/test_token`,
};
