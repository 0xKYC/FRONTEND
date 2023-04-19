import { ChainId } from "constans/chains";

import { api } from "../config";
import { User, WalletAddress } from "./types";

// export async function initUserInDB(walletAddress: WalletAddress) {
//   const res = await api.post("user", {
//     walletAddress: walletAddress,
//   });
//   return res.data;
// }

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
  const res = await api.patch<User | "User not found">("user", user);
  return res.data;
}

export async function findUserInDB(walletAddress: WalletAddress) {
  const res = await api.get<User | "noUserError">(`user/${walletAddress}`);
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
