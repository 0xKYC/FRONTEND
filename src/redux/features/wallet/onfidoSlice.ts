import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  applicantId: string | null;
  verified: boolean;
  txHash: string | null;
}

const initialState: User = {
  applicantId: "",
  verified: false,
  txHash: null,
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
  },
});

export const { addApplicantId, checkIfVerified, addTxHash } = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
export const selectTxHash = (state: RootState) => state.user.txHash;
