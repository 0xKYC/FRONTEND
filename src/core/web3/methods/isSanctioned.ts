import { ENV } from "env";
import Web3 from "web3";

import { sanctionABI } from "core/web3/abis/sanction";

export const isWalletSanctioned = async (walletAddress: string) => {
  const web3Sanctions = new Web3(ENV.VITE_APP_MAINNET_INFURA_URL);
  const blacklistContractAddress = "0x40c57923924b5c5c5455c48d93317139addac8fb";
  const OFACBlacklistContract = new web3Sanctions.eth.Contract(
    sanctionABI,
    blacklistContractAddress,
  );

  try {
    const isSanctioned: boolean = await OFACBlacklistContract.methods
      // @ts-ignore
      .isSanctioned(walletAddress)
      .call();
    return isSanctioned;
  } catch (err) {
    console.error(err);
  }
};
