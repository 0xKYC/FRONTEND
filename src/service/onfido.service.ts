import axios from "axios";

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
  const res = await axios.post("http://localhost:3001/onfido/redirect", {
    applicantId: applicantId,
    walletAddress: walletAddress,
  });
  window.location.replace(res.data);
  if (walletAddress) {
    sessionStorage.setItem("walletAddress", walletAddress);
  }
}

export async function onfidoCreateApplicant() {
  const res = await axios.post(
    "http://localhost:3001/onfido/createApplicant",
    {}
  );
  return res.data;
}
