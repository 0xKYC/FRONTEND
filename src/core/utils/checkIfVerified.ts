import { SupportedChainId } from "core/constans/chains";
import { confirmUniqueness } from "core/web3/methods/confirmUniqueness";
import { hasSoul } from "core/web3/methods/hasSoul";
import { Flow } from "redux/api/onfido/types";

type Args = {
  flow: Flow | null;
  chainId: SupportedChainId;
  walletAddress: string;
};
export const checkIfVerified = async ({
  flow,
  chainId,
  walletAddress,
}: Args): Promise<boolean> => {
  if (flow === "sanctionsCheck") {
    return await hasSoul(chainId, walletAddress);
  } else if (flow === "sunscreen") {
    return await confirmUniqueness(chainId, walletAddress);
  } else if (flow === "insertStonks") {
    return await confirmUniqueness(chainId, walletAddress);
  } else {
    throw Error("Wrong flow choosen!");
  }
};
