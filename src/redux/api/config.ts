import { ENV } from "env";

export const API_URL = ENV.VITE_APP_BASE_URL || "http://localhost:3001/";
