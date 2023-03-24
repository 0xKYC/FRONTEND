import { ChainId } from "../../../constans/chains";
import { txHash } from "../../../service/user/types";

export const getHash = (txHashes: txHash, chainID: ChainId) => {
  return txHashes[chainID] || chainID;
};
