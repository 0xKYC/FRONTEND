import { ENV } from "env";
import { Chain } from "wagmi";

type BaseChainInfo = {
  readonly bridge?: string;
  readonly docs?: string;
  readonly explorer: string;
  readonly explorerName: string;
  readonly logoUrl: string;
  readonly circleLogoUrl?: string;
  readonly label: string;
  readonly helpCenterUrl?: string;
  readonly color: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Goerli ETH',
    symbol: string; // e.g. 'gorETH',
    decimals: number; // e.g. 18,
  };
};

export const IS_MAINNET =
  ENV.REACT_APP_ENVIRONMENT === "prod" || ENV.REACT_APP_ENVIRONMENT === "stage";

export enum SupportedChainId {
  // MAINNET = 1,
  SEPOLIA = 11155111,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001,

  SCROLL_SEPOLIA = 534351,
  SCROLL_MAINNET = 534352,

  BNB = 56,
  BNB_TESTNET = 97,
  SKALE_NEBULA_TESTNET = 503129905,
}

export const CHAIN_INFO = {
  // [SupportedChainId.MAINNET]: {
  //   docs: "https://docs.uniswap.org/",
  //   explorer: "https://etherscan.io/",
  //   infoLink: "https://info.uniswap.org/#/",
  //   label: "Ethereum",
  //   logoUrl: "/img/ethereum-logo.png",
  //   nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  // },
  [SupportedChainId.SEPOLIA]: {
    docs: "https://docs.uniswap.org/",
    explorer: "https://sepolia.etherscan.io/tx/",
    explorerName: "Etherscan",
    infoLink: "https://info.uniswap.org/#/",
    label: "Ethereum Sepolia",
    logoUrl: "/img/ethereum-logo.png",
    color: "#0077be",
    nativeCurrency: {
      name: "Sepolia Ether",
      symbol: "SepoliaETH",
      decimals: 18,
    },
  },

  [SupportedChainId.POLYGON]: {
    bridge: "https://wallet.polygon.technology/polygon/bridge",
    docs: "https://polygon.io/",
    explorer: "https://polygonscan.com/tx/",
    explorerName: "Polygonscan",
    infoLink: "https://info.uniswap.org/#/polygon/",
    label: "Polygon",
    logoUrl: "/img/svg/polygon-matic-logo.svg",
    color: "#8247e5",
    nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    bridge: "https://wallet.polygon.technology/bridge",
    docs: "https://polygon.io/",
    explorer: "https://mumbai.polygonscan.com/tx/",
    explorerName: "Polygonscan",
    label: "Polygon Mumbai",
    logoUrl: "/img/svg/polygon-matic-logo.svg",
    color: "#8247e5",
    nativeCurrency: {
      name: "Polygon Mumbai Matic",
      symbol: "mMATIC",
      decimals: 18,
    },
  },

  // [SupportedChainId.SCROLL_ALPHA]: {
  //   explorer: "https://blockscout.scroll.io/tx/",
  //   explorerName: "Blockscout",
  //   label: "Scroll Alpha",
  //   logoUrl: "/img/svg/scroll.svg",
  //   nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
  //   bridge: "https://scroll.io/alpha/bridge/",
  // },
  [SupportedChainId.SCROLL_SEPOLIA]: {
    explorer: "https://sepolia-blockscout.scroll.io/tx/",
    explorerName: "Blockscout",
    label: "Scroll Sepolia",
    logoUrl: "/img/svg/scroll.svg",
    nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
    color: "#3B226A",
    bridge: "https://scroll.io/alpha/bridge/",
  },
  [SupportedChainId.SCROLL_MAINNET]:{
    explorer: "https://sepolia-blockscout.scroll.io/tx/",
    explorerName: "Blockscout",
    label: "Scroll Mainnet",
    logoUrl: "/img/svg/scroll.svg",
    nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
    color: "#3B226A",
    bridge: "https://scroll.io/alpha/bridge/", 
  },
  [SupportedChainId.BNB]: {
    bridge: "https://cbridge.celer.network/1/56",
    docs: "https://docs.bnbchain.org/",
    explorer: "https://bscscan.com/tx/",
    explorerName: "BNB Explorer",
    label: "BNB Smart Chain",
    logoUrl: "/img/svg/bnb.svg",
    color: "#0077be",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
  },
  [SupportedChainId.BNB_TESTNET]: {
    bridge: "https://cbridge.celer.network/1/56",
    docs: "https://docs.bnbchain.org/",
    explorer: "https://testnet.bscscan.com/tx/",
    explorerName: "BNB Testnet Explorer",
    label: "BNB Testnet",
    logoUrl: "/img/svg/bnb.svg",
    color: "#0077be",
    nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
  },
  [SupportedChainId.SKALE_NEBULA_TESTNET]: {
    bridge: "",
    docs: "https://docs.skale.network/",
    explorer: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
    explorerName: "SKALE Explorer",
    label: "Skale Nebula Testnet",
    logoUrl: "/img/svg/skale.svg",
    color: "#FFFFFF",
    nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  },
};
export const CHAIN_IDS = [
  SupportedChainId.POLYGON,

  SupportedChainId.SEPOLIA,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.SCROLL_SEPOLIA,
  SupportedChainId.SCROLL_MAINNET,
  SupportedChainId.SKALE_NEBULA_TESTNET,

  SupportedChainId.BNB_TESTNET,
  SupportedChainId.BNB,
] as const;

export const TESTNET_CHAINS_IDS = [
  SupportedChainId.SEPOLIA,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.SCROLL_SEPOLIA,
  SupportedChainId.BNB_TESTNET,
  SupportedChainId.SKALE_NEBULA_TESTNET,
  SupportedChainId.SCROLL_MAINNET
] as const;

export type ChainId = (typeof CHAIN_IDS)[number];

export function getChainInfo(chainId: ChainId | undefined): BaseChainInfo {
  if (typeof chainId === "undefined") {
    return CHAIN_INFO[SupportedChainId.POLYGON];
  }

  if (CHAIN_IDS.includes(chainId)) {
    return CHAIN_INFO[chainId];
  } else {
    return CHAIN_INFO[SupportedChainId.POLYGON];
  }
}
export const NETWORK_SELECTOR_CHAINS = [
  SupportedChainId.POLYGON,
  SupportedChainId.BNB,
  SupportedChainId.SEPOLIA,
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.SCROLL_SEPOLIA,
  SupportedChainId.SCROLL_MAINNET,
  SupportedChainId.BNB_TESTNET,
  SupportedChainId.SKALE_NEBULA_TESTNET
];

export const ONLY_TESTNET_CHAINS = [
  SupportedChainId.POLYGON_MUMBAI,
  SupportedChainId.SEPOLIA,
  SupportedChainId.SCROLL_SEPOLIA,
  SupportedChainId.BNB_TESTNET,
  SupportedChainId.SKALE_NEBULA_TESTNET,
  SupportedChainId.SCROLL_MAINNET
];

export const DEFAULT_CHAIN = IS_MAINNET
  ? SupportedChainId.BNB
  : SupportedChainId.BNB_TESTNET;

export const scrollSepolia = {
  id: 534351,
  name: "Scroll Sepolia",
  network: "scroll-sepolia",
  nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://sepolia-rpc.scroll.io/"] },
    default: { http: ["https://sepolia-rpc.scroll.io/"] },
  },
  blockExplorers: {
    etherscan: {
      name: "BlockScout",
      url: "https://sepolia-blockscout.scroll.io",
    },
    default: {
      name: "BlockScout",
      url: "https://sepolia-blockscout.scroll.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473,
    },
  },
} as const satisfies Chain;

export const scrollMainnet = {
  id: 534352,
  name: "Scroll Mainnet",
  network: "scroll-mainnet",
  nativeCurrency: { name: "Scroll Alpha Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: ["https://rpc.scroll.io/"] },
    default: { http: ["https://rpc.scroll.io/"] },
  },
  blockExplorers: {
    etherscan: {
      name: "ScrollScan",
      url: "https://scrollscan.com/",
    },
    default: {
      name: "ScrollScan",
      url: "https://scrollscan.com/",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14,
    },
  },
} as const satisfies Chain;
