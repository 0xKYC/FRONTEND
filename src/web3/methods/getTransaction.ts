import { ChainId } from "constans/chains";
import { web3Factory } from "web3/web3Factory";

export const getTransaction = async (chainId: ChainId, txHash: string) => {
  const { web3 } = web3Factory(chainId);

  try {
    const transaction = await web3.eth.getTransaction(txHash);
    console.log("TRANSACTION", transaction);
    const receipt = await web3.eth.getTransactionReceipt(txHash);
    console.log("RECEIPT", receipt);
  } catch (err) {
    console.error(err);
  }
};
