import { z } from "zod";

const envVariables = z.object({
  REACT_APP_ENVIRONMENT: z.string().min(1),
  REACT_APP_BASE_URL: z.string().min(1),
  REACT_APP_MAINNET_INFURA_URL: z.string().min(1),
  REACT_APP_GOERLI_SOULBOUND_CONTRACT: z.string().min(1),
  REACT_APP_MUMBAI_SOULBOUND_CONTRACT: z.string().min(1),
  REACT_APP_SCROLL_SOULBOUND_CONTRACT: z.string().min(1),
  REACT_APP_GOERLI_INFURA_URL: z.string().min(1),
  REACT_APP_MUMBAI_INFURA_URL: z.string().min(1),
  REACT_APP_WALLET_CONNECT_ID: z.string().min(1),
});

export const ENV = envVariables.parse(process.env);
