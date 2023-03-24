import { ChainId } from "../../constans/chains";

export interface User {
  walletAddress: string;
  onfidoApplicantId: string;
  onfidoResponse: null;
  onfidoStatus: OnfidoStatus;
  proof: Proof;
  txHashes: txHash;
  signature?: string;
  tosVersion?: string;
  time_stamp?: string;
}

export type txHash = {
  [k in ChainId]?: string;
};
const hs: txHash = {
  "5": "123",
};
export type OnfidoStatus = "error" | "abandoned" | "approved";
interface Proof {
  scheme: string;
  curve: string;
  proof: Proofs;
  inputs: string[];
}

interface Proofs {
  a: string[];
  b: Array<string[]>;
  c: string[];
}

export type WalletAddress = string;
