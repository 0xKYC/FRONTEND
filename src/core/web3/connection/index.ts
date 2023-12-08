import { configureChains, createConfig } from "wagmi";

import {
  bsc,
  bscTestnet,
  polygon,
  polygonMumbai,
  scrollSepolia,
  sepolia,
  skaleNebulaTestnet,
} from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { ENV } from "../../../env";
import { IS_MAINNET, scrollMainnet } from "../../constans/chains";

export const projectId = ENV.VITE_APP_WALLET_CONNECT_ID;

const chainsArray = [
  polygon,
  sepolia,
  polygonMumbai,
  scrollSepolia,
  bscTestnet,
  bsc,
  scrollMainnet,
  skaleNebulaTestnet,
];

const testnetChains = [
  polygonMumbai,
  sepolia,
  scrollSepolia,
  bscTestnet,
  skaleNebulaTestnet,
  scrollMainnet,
];

export const properChains = IS_MAINNET ? chainsArray : testnetChains;

const { chains, publicClient } = configureChains(properChains, [
  publicProvider(),
]);

export const wagmiConfig = createConfig({
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

  publicClient,
});
