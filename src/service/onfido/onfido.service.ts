import { ChainId } from "constans/chains";
import { api } from "../config";
import { Applicant } from "./types";

export async function getSDKToken() {
  const generateSdkToken = await api.post("onfido/sdkToken", {});
  return generateSdkToken;
}

export async function onfidoRedirect(
  applicantId: string,
  walletAddress: string,
  chainId: ChainId,
  redirectUrl?: string | null,
  email?: string
) {
  const res = await api.post<string>("onfido/redirect", {
    applicantId: applicantId,
    walletAddress: walletAddress,
    chainId: chainId,
    redirectUrl: redirectUrl ? redirectUrl : window.location.href,
    email: email || "",
  });

  window.location.replace(res.data);
}

export async function onfidoCreateApplicant() {
  const res = await api.post<Applicant>("onfido/createApplicant", {});
  return res.data;
}
