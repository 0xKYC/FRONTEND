import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";

type State = {
  isTosModalOpen: boolean;
  tosSigned: boolean;
};
const initialState: State = {
  isTosModalOpen: false,
  tosSigned: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTosModal: (state, action: PayloadAction<boolean>) => {
      state.isTosModalOpen = action.payload;
    },
    signTosAction: (state, action: PayloadAction<boolean>) => {
      state.tosSigned = action.payload;
    },
  },
});

export const { toggleTosModal, signTosAction } = modalSlice.actions;

export default modalSlice.reducer;

export const selectIsTosModalOpen = (state: RootState) =>
  state.modal.isTosModalOpen;
export const selectIsTosSigned = (state: RootState) => state.modal.tosSigned;
