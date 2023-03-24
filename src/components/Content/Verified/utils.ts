import { ChainId } from "../../../constans/chains";
import { txHash } from "../../../service/user/types";

export const getHash = (txHashes: txHash, chainID: ChainId) => {
  if (!txHashes) return;

  return txHashes[chainID] || chainID;
};
