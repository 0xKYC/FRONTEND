import { ChainId } from "core/constans/chains";
import { ABI } from "core/web3/abis/OxKYC";
import { web3Factory } from "core/web3/web3Factory";

export const hasSoul = async (chainId: ChainId, walletAddress: string) => {
  const { web3, soulboundContract } = web3Factory(chainId);

  try {
    const soulbound = new web3.eth.Contract(ABI, soulboundContract);

    const hasSoul: boolean = await soulbound.methods
      // @ts-ignore
      .hasSoul(walletAddress)
      .call();

    return hasSoul;
  } catch (err) {
    console.error(err);
    return false;
  }
};
