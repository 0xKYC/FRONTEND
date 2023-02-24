import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";
import { ChainId } from "../../../constans/chains";

export interface User {
  applicantId: string | null;
  verified: boolean;
  txHash: string | null;
  isMinting: boolean;
  mintingChain: ChainId | null;
}

const initialState: User = {
  applicantId: "",
  verified: false,
  txHash: null,
  isMinting: false,
  mintingChain: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addApplicantId: (state, action: PayloadAction<string>) => {
      state.applicantId = action.payload;
    },
    checkIfVerified: (state, action: PayloadAction<boolean>) => {
      state.verified = action.payload;
    },
    addTxHash: (state, action: PayloadAction<string>) => {
      state.txHash = action.payload;
    },
    setMinting: (
      state,
      action: PayloadAction<{ minting: boolean; chainId: ChainId | null }>
    ) => {
      state.isMinting = action.payload.minting;
      state.mintingChain = action.payload.chainId;
    },
  },
});

export const { addApplicantId, checkIfVerified, addTxHash, setMinting } =
  userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
export const selectTxHash = (state: RootState) => state.user.txHash;
export const selectIsMinting = (state: RootState) => state.user.isMinting;
export const selectMintingChain = (state: RootState) => state.user.mintingChain;
