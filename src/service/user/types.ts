export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  uuid: string | null;
  walletAddress: string;
  onfidoApplicantId: string;
  email: string | null;
  tosVersion: string | null;
  signature: string | null;
  timestamp: Date | null;
  sbts: Sbt[];
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
