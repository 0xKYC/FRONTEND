import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  applicantId: string | null;
}

const initialState: User = {
  applicantId: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addApplicantId: (state, action: PayloadAction<string>) => {
      state.applicantId = action.payload;
    },
  },
});

export const { addApplicantId } = userSlice.actions;

export default userSlice.reducer;

export const selectApplicantId = (state: RootState) => state.user.applicantId;
