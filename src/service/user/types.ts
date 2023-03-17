export interface User {
  walletAddress: string;
  onfidoApplicantId: string;
  onfidoResponse: null;
  onfidoStatus: OnfidoStatus;
  proof: Proof;
  txHash: string;
}
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
