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
  console.log(res.data);
  window.location.replace(res.data);
}

export async function onfidoCheckForApplicant() {}

export async function onfidoCreateApplicant() {}

export async function createUserInDB() {}
