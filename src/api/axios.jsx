import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  // headers: { "Content-Type": "application/json" },
});
