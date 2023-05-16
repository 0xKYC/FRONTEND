import { api } from "../config";
import { Applicant, OnfidoRedirectData } from "./types";

export async function getSDKToken() {
  const generateSdkToken = await api.post("onfido/sdkToken", {});
  return generateSdkToken;
}

export async function onfidoRedirect({
  applicantId,
  chainId,
  walletAddress,
  callbackUrl,
  email,
  redirectUrl,
}: OnfidoRedirectData) {
  const res = await api.post<string>("onfido/redirect", {
    applicantId: applicantId,
    walletAddress: walletAddress,
    chainId: chainId,
    redirectUrl: redirectUrl ? redirectUrl : window.location.href,
    email: email || "",
    callbackUrl: callbackUrl || "",
  });

  window.location.replace(res.data);
}

export async function onfidoCreateApplicant() {
  const res = await api.post<Applicant>("onfido/createApplicant", {});
  return res.data;
}
