import axios from "axios";

export const API_URL =
  process.env.REACT_APP_BASE_URL || "http://localhost:3001/";

export const api = axios.create({
  baseURL: API_URL,
});
// http://localhost:3000/stonks?walletAddress=WALLET_ADDRESS&redirectUrl=aHR0cHM6Ly9leGFtcGxlLm9yZw==&callbackUrl=aHR0cHM6Ly9zamo2a29qanVnZnNqNWhlNGxleHliNWhobTB6eGR3ai5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3Mv
