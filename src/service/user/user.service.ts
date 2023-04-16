import { ChainId } from "constans/chains";

import { api } from "../config";
import { User, WalletAddress } from "./types";

export async function initUserInDB(walletAddress: WalletAddress) {
  const res = await api.post("user/upload", {
    walletAddress: walletAddress,
  });
  return res.data;
}

type UserUpdate = {
  walletAddress: WalletAddress;
  onfidoApplicantId?: string;
  signature?: string;
  tosVersion?: string;
  time_stamp?: string;
};
export async function createUserInDB(user: UserUpdate) {
  const res = await api.post<User>("user/upload", user);
  return res.data;
}
export async function editUserInDB(user: UserUpdate) {
  const res = await api.post<User | "User not found">("user/update", user);
  return res.data;
}

export async function findUserInDB(walletAddress: WalletAddress) {
  const res = await api.post<User | "noUserError">("user/fetch", {
    walletAddress: walletAddress,
  });
  return res.data;
}

export async function checkForSBT(walletAddress: WalletAddress, chainId: ChainId) {
  const res = await api.get<boolean>(`/soulbound/wallet/${walletAddress}/blockchainId/${chainId}`);

  return res.data;
}
export async function checkSanctionedWallet(walletAddress: WalletAddress) {
  const res = await api.get<boolean>(`/soulbound/sanctioned/${walletAddress}`);

  return res.data;
}

export async function subscribeNewsletter(email: string) {
  const res = await api.post<string>("user/newsletter/signup", {
    email,
  });

  return res.data;
}
