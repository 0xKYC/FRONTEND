import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";
import { ChainId } from "../../../constans/chains";

// isMinting indicate if user's token is minting, isMintingActive indicate if user is on the network of his minting token
export interface User {
  applicantId: string | null;
  verified: boolean;
  txHash: string | null;
  isMinting: boolean;
  mintingChain: ChainId | null;
  mintingWalletAddress: string | null;
  isMintingActive: boolean;
}

const initialState: User = {
  applicantId: "",
  verified: false,
  txHash: null,
  isMinting: false,
  mintingChain: null,
  mintingWalletAddress: null,
  isMintingActive: false,
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
    addTxHash: (state, action: PayloadAction<string | null>) => {
      state.txHash = action.payload;
    },
    setMinting: (
      state,
      action: PayloadAction<{
        minting: boolean;
        chainId: ChainId | null;
        walletAddress: string;
      }>
    ) => {
      state.isMinting = action.payload.minting;
      state.mintingChain = action.payload.chainId;
      state.mintingWalletAddress = action.payload.walletAddress;
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
} = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
export const selectTxHash = (state: RootState) => state.user.txHash;
export const selectIsMinting = (state: RootState) => state.user.isMinting;
export const selectIsMintingActive = (state: RootState) =>
  state.user.isMintingActive;
export const selectMintingChain = (state: RootState) => state.user.mintingChain;
export const selectMintingWallet = (state: RootState) =>
  state.user.mintingWalletAddress;
