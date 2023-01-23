import { api } from "../config";
import { User, WalletAddress } from "./types";

export async function initUserInDB(walletAddress: WalletAddress) {
  await api.post("user/upload", {
    walletAddress: walletAddress,
  });
}

export async function updateUserInDB(
  walletAddress: string,
  onfidoApplicantId: string
) {
  const res = await api.post("user/upload", {
    walletAddress: walletAddress,
    onfidoApplicantId: onfidoApplicantId,
  });
  return res.data;
}

export async function findUserInDB(walletAddress: WalletAddress) {
  const res = await api.post<User | "noUserError">("user/fetch", {
    walletAddress: walletAddress,
  });
  return res.data;
}

export async function checkForSBT(walletAddress: WalletAddress) {
  const res = await api.get<boolean>(`/soulbound/wallet/${walletAddress}`);

  return res.data;
}
export async function checkSanctionedWallet(walletAddress: WalletAddress) {
  const res = await api.get<boolean>(`/soulbound/sanctioned/${walletAddress}`);

  return res.data;
}
