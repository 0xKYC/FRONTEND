import axios from "axios";

export async function getSDKToken() {
  const generateSdkToken = await axios.post(
    "http://localhost:3001/onfido/sdkToken",
    {}
  );
  return generateSdkToken;
}

export async function onfidoRedirect() {
  const res = await axios.post("http://localhost:3001/onfido/redirect", {});
  window.location.replace(res.data);
}

export async function onfidoCheckForApplicant() {}

export async function onfidoCreateApplicant() {
  const res = await axios.post(
    "http://localhost:3001/onfido/createApplicant",
    {}
  );
  return res.data;
}

export async function createUserInDB() {}
