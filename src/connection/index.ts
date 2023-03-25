import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";
import { scrollAlpha } from "../constans/chains";

export const connectWalletId = process.env.REACT_APP_WALLET_CONNECT_ID || "";
export const chains = [polygonMumbai, goerli, scrollAlpha];

const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId: connectWalletId,
  }),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    appName: "0xKYC",
    chains,
    projectId: connectWalletId,
    version: "2",
  }),

  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);

ethereumClient.getDefaultChain();
