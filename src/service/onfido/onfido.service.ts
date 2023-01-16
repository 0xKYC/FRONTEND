import axios from "axios";
import { Applicant } from "./types";

export async function getSDKToken() {
  const generateSdkToken = await axios.post(
    "http://localhost:3001/onfido/sdkToken",
    {}
  );
  return generateSdkToken;
}

export async function onfidoRedirect(
  applicantId: string | null,
  walletAddress: string | null
) {
  const res = await axios.post<string>(
    "http://localhost:3001/onfido/redirect",
    {
      applicantId: applicantId,
      walletAddress: walletAddress,
    }
  );
  window.location.replace(res.data);
}

export async function onfidoCreateApplicant() {
  const res = await axios.post<Applicant>(
    "http://localhost:3001/onfido/createApplicant",
    {}
  );
  return res.data;
}
