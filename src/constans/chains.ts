interface BaseChainInfo {
  readonly bridge?: string;
  readonly docs?: string;
  readonly explorer: string;
  readonly infoLink: string;
  readonly logoUrl: string;
  readonly circleLogoUrl?: string;
  readonly label: string;
  readonly helpCenterUrl?: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Goerli ETH',
    symbol: string; // e.g. 'gorETH',
    decimals: number; // e.g. 18,
  };
  readonly color?: string;
  readonly backgroundColor?: string;
}

export enum SupportedChainId {
  GOERLI = 5,
  POLYGON_MUMBAI = 80001,
}

export const CHAIN_INFO = {
  [SupportedChainId.GOERLI]: {
    explorer: "https://goerli.etherscan.io/",
    infoLink: "https://info.uniswap.org/#/",
    label: "Ethereum Goerli",
    logoUrl: "/img/ethereum-logo.png",
    nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    bridge: "https://wallet.polygon.technology/bridge",
    docs: "https://polygon.io/",
    explorer: "https://mumbai.polygonscan.com/",
    infoLink: "https://info.uniswap.org/#/polygon/",
    label: "Polygon Mumbai",
    logoUrl: "/img/svg/polygon-matic-logo.svg",

    nativeCurrency: {
      name: "Polygon Mumbai Matic",
      symbol: "mMATIC",
      decimals: 18,
    },
  },
};
export const CHAIN_IDS = [
  SupportedChainId.GOERLI,
  SupportedChainId.POLYGON_MUMBAI,
] as const;

export type ChainId = typeof CHAIN_IDS[number];

export function getChainInfo(chainId: ChainId): BaseChainInfo {
  return CHAIN_INFO[chainId] ?? undefined;
}
export const NETWORK_SELECTOR_CHAINS = [
  SupportedChainId.GOERLI,
  SupportedChainId.POLYGON_MUMBAI,
];
