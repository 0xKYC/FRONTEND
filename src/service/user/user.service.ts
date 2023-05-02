import { api } from "../config";
import { User, WalletAddress } from "./types";

type UserUpdate = {
  walletAddress: WalletAddress;
  onfidoApplicantId?: string;
  signature?: string;
  tosVersion?: string;
  time_stamp?: string;
};
export async function createUserInDB(user: UserUpdate) {
  const res = await api.post<User>("user", user);
  return res.data;
}
export async function editUserInDB(user: UserUpdate) {
  const res = await api.patch<User>("user", user);
  return res.data;
}

export async function findUserInDB(walletAddress: WalletAddress) {
  try {
    const res = await api.get<User>(`user/${walletAddress}`);
    return res.data;
  } catch (error) {
    console.log("ERR", error);
  }
}

export async function subscribeNewsletter(email: string) {
  const res = await api.post<string>("user/newsletter/signup", {
    email,
  });

  return res.data;
}
