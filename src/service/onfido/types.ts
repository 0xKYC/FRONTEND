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

export interface OnfidoRedirectData {
  applicantId: string;
  walletAddress: string;
  chainId: ChainId;
  redirectUrl?: string | null;
  callbackUrl?: string | null;
  email?: string;
}
