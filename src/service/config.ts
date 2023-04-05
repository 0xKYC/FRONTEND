import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});
//process.env.REACT_APP_BASE_URL ||
