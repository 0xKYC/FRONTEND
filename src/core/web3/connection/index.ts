import { configureChains, createClient } from "wagmi";

import { EthereumClient } from "@web3modal/ethereum";
import { 
  bsc, 
  bscTestnet, 
  polygon, 
  polygonMumbai, 
  sepolia, 
  // WAGMI version update needed to import scollSepolia
  // scrollSepola,
  skaleNebulaTestnet 
} from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

import { ENV } from "../../../env";
import { IS_MAINNET, scrollMainnet, scrollSepolia } from "../../constans/chains";

export const projectId = ENV.REACT_APP_WALLET_CONNECT_ID;

const chains = [
  polygon,
  sepolia,
  polygonMumbai,
  scrollSepolia,
  bscTestnet,
  bsc,
  scrollMainnet,
  skaleNebulaTestnet
];

const testnetChains = [
  polygonMumbai, 
  sepolia, 
  scrollSepolia, 
  bscTestnet,
  skaleNebulaTestnet,
  scrollMainnet
];

export const properChains = IS_MAINNET ? chains : testnetChains || [];

const { provider } = configureChains(chains, [publicProvider()]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains: chains }),

    new WalletConnectConnector({
      chains: chains,
      options: {
        projectId: projectId,
      },
    }),
  ],

  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
