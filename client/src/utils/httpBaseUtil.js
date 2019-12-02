import { API_URL } from "../constant/appConfig";
import axios from "axios";

export const httpBase = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    responseType: "json"
  });
  return api;
};
