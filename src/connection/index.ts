import { configureChains, createClient } from "wagmi";

import { EthereumClient, walletConnectProvider } from "@web3modal/ethereum";
import { goerli, polygonMumbai } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { scrollAlpha } from "../constans/chains";

export const connectWalletId = process.env.REACT_APP_WALLET_CONNECT_ID || "";
export const chains = [goerli, polygonMumbai, scrollAlpha];

const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId: connectWalletId,
  }),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        name: "0xKYC",
        projectId: connectWalletId,
        qrcode: true,
      },
    }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: "0xKYC",
    //   },
    // }),
  ],

  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);

ethereumClient.getDefaultChain();
