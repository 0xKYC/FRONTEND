import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";
import { ChainId } from "constans/chains";
import { txHash } from "service/user/types";

// isMinting indicate if user's token is minting, isMintingActive indicate if user is on the network of his minting token
export interface User {
  applicantId: string | null;
  verified: boolean;
  txHashes: txHash;
  isMinting: boolean;
  mintingChain: ChainId | null;
  mintingWalletAddress: string | null;
  isMintingActive: boolean;
  tosAccepted: boolean;
  isMintingError: boolean;
}

const initialState: User = {
  applicantId: "",
  verified: false,
  txHashes: {},
  isMinting: false,
  mintingChain: null,
  mintingWalletAddress: null,
  isMintingActive: false,
  tosAccepted: false,
  isMintingError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.verified = false;
    },
    addApplicantId: (state, action: PayloadAction<string>) => {
      state.applicantId = action.payload;
    },
    checkIfVerified: (state, action: PayloadAction<boolean>) => {
      state.verified = action.payload;
    },
    addTxHashes: (state, action: PayloadAction<txHash>) => {
      state.txHashes = action.payload;
    },
    setMinting: (
      state,
      action: PayloadAction<{
        minting: boolean;
        chainId: ChainId | null;
        walletAddress: string;
        error: boolean;
      }>
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
  addTxHashes,
  setMinting,
  reset,
  setMintingActive,
  signTos,
} = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
export const selectTxHashes = (state: RootState) => state.user.txHashes;
export const selectIsMinting = (state: RootState) => state.user.isMinting;
export const selectIsMintingError = (state: RootState) =>
  state.user.isMintingError;
export const selectIsMintingActive = (state: RootState) =>
  state.user.isMintingActive;
export const selectMintingChain = (state: RootState) => state.user.mintingChain;
export const selectTosAcceptedWallet = (state: RootState) =>
  state.user.tosAccepted;
export const selectMintingWallet = (state: RootState) =>
  state.user.mintingWalletAddress;
