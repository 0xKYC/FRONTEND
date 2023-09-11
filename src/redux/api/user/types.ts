type UserObject = {
  uuid: string | null;
};
export type Wallet = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  onfidoApplicantId: string;
  address: string;
  signature: string | null;
  sbts: Sbt[];
  user: UserObject | null;
  tosVersion: string | null;
};
export type Sbt = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  txHash: string | null;
  proof: any | null;
  chainId: number;
  mintStatus: MintStatus;
  onfidoWorkflowRunWebhook: any | null;
  onfidoWorkflowRunId: string | null;
  onfidoStatus: OnfidoStatus | null;
};

const mintStatus = {
  none: "none",
  todo: "todo",
  enqueued: "enqueued",
  tx_sent: "tx_sent",
  success: "success",
  failed: "failed",
};

export type MintStatus = (typeof mintStatus)[keyof typeof mintStatus];

export type OnfidoStatus =
  | "error"
  | "abandoned"
  | "approved"
  | "declined"
  | "review"
  | "awaiting_input"
  | "processing";

export type WalletAddress = string;

export type UserNotFoundError = {
  status: number;
  message: string;
  data: {
    address: string;
  };
};

export type DiscordUser = {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
};
