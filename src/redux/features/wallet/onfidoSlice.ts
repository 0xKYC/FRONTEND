import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  applicantId: string | null;
  verified: boolean;
}

const initialState: User = {
  applicantId: "",
  verified: false,
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
  },
});

export const { addApplicantId, checkIfVerified } = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
export const selectVerifiedUser = (state: RootState) => state.user.verified;
