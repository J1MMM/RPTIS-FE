import axios from "axios";
import { BASE_URL } from "../constants/api";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "application/json" },
  withCredentials: false,
});
