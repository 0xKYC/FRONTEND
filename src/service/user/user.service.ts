import { ChainId } from "constans/chains";

import { api } from "../config";
import { User, Wallet, WalletAddress } from "./types";

type UserUpdate = {
  walletAddress: WalletAddress;
  onfidoApplicantId?: string;
  signature?: string;
  tosVersion?: string;
  time_stamp?: string;
};
export async function createUserInDB(user: UserUpdate) {
  const res = await api.post<User>("user/wallet", user);
  return res.data;
}

export async function findUserInDB(
  walletAddress: WalletAddress,
  chainId: ChainId,
) {
  try {
    const res = await api.get<Wallet>(
      `user/${walletAddress}/chainId/${chainId}`,
    );
    return res.data;
  } catch (error) {
    console.error("ERR", error);
  }
}

export async function subscribeNewsletter(email: string) {
  const res = await api.post<string>("user/newsletter/signup", {
    email,
  });

  return res.data;
}
