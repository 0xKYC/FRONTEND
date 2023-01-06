import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";

import { goerli } from "wagmi/chains";

export const connectWalletId = process.env.REACT_APP_WALLET_CONNECT_ID || "";
const chains = [goerli];

const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId: connectWalletId,
  }),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "0xKYC", chains }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
