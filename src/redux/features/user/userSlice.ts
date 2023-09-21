import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ChainId } from "core/constans/chains";

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
  isMintingError: boolean;
  email: string;
  // when user comes from partner's website
  redirectUrl: string | null;
  mockedWalletAddress: string | null;
  callbackUrl: string | null;
  apiKey: string | null;
};

const initialState: User = {
  applicantId: "",
  verified: false,
  txHash: "",
  isMinting: false,
  mintingChain: null,
  mintingWalletAddress: null,
  isMintingActive: false,
  isMintingError: false,
  email: "",
  mockedWalletAddress: null,
  redirectUrl: null,
  callbackUrl: null,
  apiKey: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.verified = false;
      state.txHash = "";
      state.mockedWalletAddress = null;
    },
    addApplicantId: (state, action: PayloadAction<string | null>) => {
      state.applicantId = action.payload;
    },
    setPartnerParams: (state, action: PayloadAction<PartnerPayload>) => {
      state.mockedWalletAddress = action.payload.mockedWalletAddress;
      state.redirectUrl = action.payload.redirectUrl;
      state.callbackUrl = action.payload.callbackUrl;
    },
    setVerified: (state, action: PayloadAction<boolean>) => {
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

    setMintingActive: (state, action: PayloadAction<boolean>) => {
      state.isMintingActive = action.payload;
    },

    setApiKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const {
  addApplicantId,
  setVerified,
  addTxHash,
  setMinting,
  reset,
  setMintingActive,
  setPartnerParams,
  setApiKey,
  setEmail,
} = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectRedirectUrl = (state: RootState) => state.user.redirectUrl;
export const selectCallbackUrl = (state: RootState) => state.user.callbackUrl;
export const selectMockedWalletAddress = (state: RootState) =>
  state.user.mockedWalletAddress;
export const selectIsVerified = (state: RootState) => state.user.verified;
export const selectTxHash = (state: RootState) => state.user.txHash;
export const selectIsMinting = (state: RootState) => state.user.isMinting;
export const selectIsMintingError = (state: RootState) =>
  state.user.isMintingError;
export const selectIsMintingActive = (state: RootState) =>
  state.user.isMintingActive;
export const selectMintingChain = (state: RootState) => state.user.mintingChain;

export const selectMintingWallet = (state: RootState) =>
  state.user.mintingWalletAddress;

export const selectApiKey = (state: RootState) => state.user.apiKey;
export const selectEmail = (state: RootState) => state.user.email;
