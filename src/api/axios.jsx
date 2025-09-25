import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;


export default axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  // headers: { "Content-Type": "application/json" },
});