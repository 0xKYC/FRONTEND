import { Chain } from "wagmi";
interface BaseChainInfo {
  readonly bridge?: string;
  readonly docs?: string;
  readonly explorer: string;
  readonly explorerName: string;
  readonly logoUrl: string;
  readonly circleLogoUrl?: string;
  readonly label: string;
  readonly helpCenterUrl?: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Goerli ETH',
    symbol: string; // e.g. 'gorETH',
    decimals: number; // e.g. 18,
  };
}

export enum SupportedChainId {
  GOERLI = 5,
  POLYGON_MUMBAI = 80001,
  SCROLL_ALPHA = 534353,
}

export const CHAIN_INFO = {
  [SupportedChainId.POLYGON_MUMBAI]: {
    bridge: "https://wallet.polygon.technology/bridge",
    docs: "https://polygon.io/",
    explorer: "https://mumbai.polygonscan.com/tx/",
    explorerName: "Polygonscan",
    label: "Polygon Mumbai",
    logoUrl: "/img/svg/polygon-matic-logo.svg",
    nativeCurrency: {
      name: "Polygon Mumbai Matic",
      symbol: "mMATIC",
      decimals: 18,
    },
  },
  [SupportedChainId.GOERLI]: {
    explorer: "https://goerli.etherscan.io/tx/",
    explorerName: "Etherscan",
    label: "Ethereum Goerli",
    logoUrl: "/img/ethereum-logo.png",
    nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
  },

  [SupportedChainId.SCROLL_ALPHA]: {
    explorer: "https://blockscout.scroll.io/tx/",
    explorerName: "Blockscout",
    label: "Scroll Alpha",
    logoUrl: "/img/svg/scroll.svg",
    nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
    bridge: "https://scroll.io/alpha/bridge/",
  },
};
export const CHAIN_IDS = [
  SupportedChainId.GOERLI,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.SCROLL_ALPHA,
] as const;

export type ChainId = typeof CHAIN_IDS[number];

export function getChainInfo(chainId: ChainId): BaseChainInfo {
  return CHAIN_INFO[chainId] ?? undefined;
}
export const NETWORK_SELECTOR_CHAINS = [
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.GOERLI,
  SupportedChainId.SCROLL_ALPHA,
];

export const scrollAlpha = {
  id: 534353,
  name: "Scroll Alpha",
  network: "Scroll",
  nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://alpha-rpc.scroll.io/l2"] },
    default: { http: ["https://alpha-rpc.scroll.io/l2"] },
  },
  blockExplorers: {
    etherscan: { name: "BlockScout", url: "https://blockscout.scroll.io/" },
    default: { name: "BlockScout", url: "https://blockscout.scroll.io/" },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;
