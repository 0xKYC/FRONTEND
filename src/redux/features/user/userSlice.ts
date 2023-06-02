import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ChainId } from "constans/chains";

import { RootState } from "../../store";

type PartnerPayload = {
  callbackUrl: string;
  redirectUrl: string;
  mockedWalletAddress: string;
};
// isMinting indicate if user's token is minting, isMintingActive indicate if user is on the network of his minting token
export type User = {
  applicantId: string | null;
  verified: boolean;
  txHash: string;
  isMinting: boolean;
  mintingChain: ChainId | null;
  mintingWalletAddress: string | null;
  isMintingActive: boolean;
  tosAccepted: boolean;
  isMintingError: boolean;

  // when user comes from partner's website
  redirectUrl: string | null;
  mockedWalletAddress: string | null;
  callbackUrl: string | null;
};

const initialState: User = {
  applicantId: "",
  verified: false,
  txHash: "",
  isMinting: false,
  mintingChain: null,
  mintingWalletAddress: null,
  isMintingActive: false,
  tosAccepted: false,
  isMintingError: false,
  mockedWalletAddress: null,
  redirectUrl: null,
  callbackUrl: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.applicantId = "";
      state.verified = false;
      state.txHash = "";
      state.mockedWalletAddress = null;
    },
    addApplicantId: (state, action: PayloadAction<string>) => {
      state.applicantId = action.payload;
    },
    setPartnerParams: (state, action: PayloadAction<PartnerPayload>) => {
      state.mockedWalletAddress = action.payload.mockedWalletAddress;
      state.redirectUrl = action.payload.redirectUrl;
      state.callbackUrl = action.payload.callbackUrl;
    },
    checkIfVerified: (state, action: PayloadAction<boolean>) => {
      state.verified = action.payload;
    },
    addTxHash: (state, action: PayloadAction<string>) => {
      state.txHash = action.payload;
    },
    setMinting: (
      state,
      action: PayloadAction<{
        minting: boolean;
        chainId: ChainId | null;
        walletAddress: string;
        error: boolean;
      }>,
    ) => {
      state.isMinting = action.payload.minting;
      state.mintingChain = action.payload.chainId;
      state.mintingWalletAddress = action.payload.walletAddress;
      state.isMintingError = action.payload.error;
    },
    signTos: (state, action: PayloadAction<boolean>) => {
      state.tosAccepted = action.payload;
    },
    setMintingActive: (state, action: PayloadAction<boolean>) => {
      state.isMintingActive = action.payload;
    },
  },
});

export const {
  addApplicantId,
  checkIfVerified,
  addTxHash,
  setMinting,
  reset,
  setMintingActive,
  signTos,
  setPartnerParams,
} = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectRedirectUrl = (state: RootState) => state.user.redirectUrl;
export const selectCallbackUrl = (state: RootState) => state.user.callbackUrl;
export const selectMockedWalletAddress = (state: RootState) =>
  state.user.mockedWalletAddress;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
export const selectTxHash = (state: RootState) => state.user.txHash;
export const selectIsMinting = (state: RootState) => state.user.isMinting;
export const selectIsMintingError = (state: RootState) => state.user.isMintingError;
export const selectIsMintingActive = (state: RootState) => state.user.isMintingActive;
export const selectMintingChain = (state: RootState) => state.user.mintingChain;
export const selectTosAcceptedWallet = (state: RootState) => state.user.tosAccepted;
export const selectMintingWallet = (state: RootState) => state.user.mintingWalletAddress;
