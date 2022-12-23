import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
<<<<<<< HEAD
  applicantId: string | null;
}

const initialState: User = {
  applicantId: null,
=======
  applicantId: string;
}

const initialState: User = {
  applicantId: "",
>>>>>>> 7f3eb3a62f7b8a71347d353dd1d669dd1cb80da3
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
