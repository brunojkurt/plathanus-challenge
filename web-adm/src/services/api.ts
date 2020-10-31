import axios from "axios";
import { store } from '../store';

const getCredendials = () => {
  const state = store.getState();
  return state.auth;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(async config => {
  const token = getCredendials().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;