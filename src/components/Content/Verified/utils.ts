import { ChainId, SupportedChainId } from "../../../constans/chains";

export const getTransactionUrl = (chainId: ChainId) => {
  const mumbaiTransactionUrl = "https://mumbai.polygonscan.com/tx/";
  const goerliTransactionUrl = "https://goerli.etherscan.io/tx/";
  const linkToTransaction =
    chainId === SupportedChainId.GOERLI
      ? goerliTransactionUrl
      : chainId === SupportedChainId.POLYGON_MUMBAI
      ? mumbaiTransactionUrl
      : "";

  return linkToTransaction;
};

export const getButtonText = (chainId: ChainId) => {
  const buttonText =
    chainId === SupportedChainId.GOERLI
      ? "Etherscan"
      : chainId === SupportedChainId.POLYGON_MUMBAI && "Polygonscan";

  return buttonText;
};
