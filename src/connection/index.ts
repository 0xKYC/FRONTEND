import { configureChains, createClient } from "wagmi";

import { EthereumClient } from "@web3modal/ethereum";
import { goerli, polygonMumbai } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { scrollAlpha } from "../constans/chains";
import { ENV } from "../env";

export const projectId = ENV.REACT_APP_WALLET_CONNECT_ID;

export const chains = [goerli, polygonMumbai, scrollAlpha];

const { provider } = configureChains(chains, [publicProvider()]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
  ],

  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
