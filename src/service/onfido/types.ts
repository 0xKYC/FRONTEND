import { ChainId } from "constans/chains";

export type Applicant = {
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
};
type IdNumber = {
  type: string;
  value: string;
  stateCode: string | null;
};
type Address = {
  postcode: string;
  country: string;
};

export type OnfidoRedirectData = {
  applicantId: string;
  walletAddress: string;
  chainId: ChainId;
  redirectUrl?: string | null;
  callbackUrl?: string | null;
  email?: string;
};
