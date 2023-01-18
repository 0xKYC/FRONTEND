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

export interface Applicant {
  id: string;
  createdAt: string;
  deleteAt: string | null;
  href: string;
  firstName: string;
  lastName: string;
  email: string | null;
  dob: string | null;
  address: Address | null;
  idNumbers: IdNumber[] | null;
  phoneNumber: string | null;
  location: Location | null;
}
interface IdNumber {
  type: string;
  value: string;
  stateCode: string | null;
}
interface Address {
  postcode: string;
  country: string;
}
