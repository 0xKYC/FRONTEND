import { ChainId } from "core/constans/chains";
import { ABI } from "core/web3/abis/OxKYC";
import { web3Factory } from "core/web3/web3Factory";
import { AbiItem } from "web3-utils";

export const confirmUniqueness = async (
  chainId: ChainId,
  walletAddress: string,
) => {
  const { web3, soulboundContract } = web3Factory(chainId);

  try {
    const soulbound = new web3.eth.Contract(
      ABI as AbiItem[],
      soulboundContract,
    );
    const uniquenessConfirmed: boolean = await soulbound.methods
      .uniquenessConfirmed(walletAddress)
      .call();

    return uniquenessConfirmed;
  } catch (err) {
    console.error(err);
    return false;
  }
};
