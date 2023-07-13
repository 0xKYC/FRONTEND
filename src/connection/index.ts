import { configureChains, createClient } from "wagmi";

import { EthereumClient } from "@web3modal/ethereum";
import { polygon, polygonMumbai, sepolia } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { IS_MAINNET } from "../constans/chains";
import { ENV } from "../env";

export const projectId = ENV.REACT_APP_WALLET_CONNECT_ID;

const chains = [polygon, sepolia, polygonMumbai];

const testnetChains = [polygonMumbai, sepolia];

export const properChains = IS_MAINNET ? chains : testnetChains;

const { provider } = configureChains(properChains, [publicProvider()]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: properChains }),

    new WalletConnectConnector({
      chains: properChains,
      options: {
        projectId: projectId,
      },
    }),
  ],

  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
