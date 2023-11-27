import { configureChains, createConfig } from "wagmi";

import { bsc, bscTestnet, polygon, polygonMumbai, sepolia } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { ENV } from "../../../env";
import { IS_MAINNET, scrollSepolia } from "../../constans/chains";

export const projectId = ENV.VITE_APP_WALLET_CONNECT_ID;

const chainsArray = [
  polygon,
  sepolia,
  polygonMumbai,
  scrollSepolia,
  bscTestnet,
  bsc,
];

const testnetChains = [polygonMumbai, sepolia, scrollSepolia, bscTestnet];

export const properChains = IS_MAINNET ? chainsArray : testnetChains;

const { chains, publicClient } = configureChains(properChains, [
  publicProvider(),
]);

export const wagmiConfig = createConfig({
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

  publicClient,
});


