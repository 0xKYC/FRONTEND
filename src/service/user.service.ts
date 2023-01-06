import axios from "axios";

export async function initUserInDB(walletAddress: string) {
  const res = await axios.post("http://localhost:3001/user/upload", {
    walletAddress: walletAddress,
  });
}

export async function updateUserInDB(
  walletAddress: string,
  onfidoApplicantId: string
) {
  const res = await axios.post("http://localhost:3001/user/upload", {
    walletAddress: walletAddress,
    onfidoApplicantId: onfidoApplicantId,
  });
  return res.data;
}

export async function findUserInDB(walletAddress: string) {
  const res = await axios.post("http://localhost:3001/user/fetch", {
    walletAddress: walletAddress,
  });
  return res.data;
}

export async function checkForSBT(walletAddress: string) {
  const res = await axios.get<boolean>(
    `http://localhost:3001/soulbound/wallet/${walletAddress}`
  );

  return res.data;
}
