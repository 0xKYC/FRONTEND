export interface User {
  walletAddress: string;
  onfidoApplicantId: string;
  onfidoResponse: null;
  proof: Proof;
  txHash: string;
}

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
