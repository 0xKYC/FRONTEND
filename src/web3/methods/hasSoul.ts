import { ChainId } from "constans/chains";
import { AbiItem } from "web3-utils";
import { sbtABI } from "web3/abis/soulbound";
import { web3Factory } from "web3/web3Factory";

export const hasSoul = async (chainId: ChainId, walletAddress: string) => {
  const { web3, soulboundContract } = web3Factory(chainId);

  try {
    const soulbound = new web3.eth.Contract(
      sbtABI as AbiItem[],
      soulboundContract,
    );
    const hasSoul: boolean = await soulbound.methods
      .hasSoul(walletAddress)
      .call();

    return hasSoul;
  } catch (err) {
    console.error(err);
  }
};
