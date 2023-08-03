import Web3 from "web3";

import { ChainId, SupportedChainId } from "constans/chains";

import { ENV } from "../env";

type Chains = {
  [K in ChainId]: {
    readonly provider: string;
    readonly soulboundContract: string;
  };
};

export const web3Factory = (
  blockchainId: ChainId,
): { web3: Web3; soulboundContract: string } => {
  const supportedChains: Chains = {
    [SupportedChainId.POLYGON]: {
      provider: ENV.REACT_APP_POLYGON_ALCHEMY_URL,
      soulboundContract: ENV.REACT_APP_POLYGON_SOULBOUND_CONTRACT,
    },
    [SupportedChainId.SEPOLIA]: {
      provider: ENV.REACT_APP_SEPOLIA_ALCHEMY_URL,
      soulboundContract: ENV.REACT_APP_SEPOLIA_SOULBOUND_CONTRACT,
    },
    [SupportedChainId.POLYGON_MUMBAI]: {
      provider: ENV.REACT_APP_MUMBAI_INFURA_URL,
      soulboundContract: ENV.REACT_APP_MUMBAI_SOULBOUND_CONTRACT,
    },
    [SupportedChainId.SCROLL_ALPHA]: {
      provider: "https://alpha-rpc.scroll.io/l2",
      soulboundContract: ENV.REACT_APP_SCROLL_SOULBOUND_CONTRACT,
    },
  };

  const web3Instance = supportedChains[blockchainId];

  const web3 = new Web3(web3Instance.provider);

  const soulboundContract = web3Instance.soulboundContract;

  return { web3, soulboundContract };
};
