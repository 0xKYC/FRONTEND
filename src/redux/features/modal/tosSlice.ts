import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";

type State = {
  isTosModalOpen: boolean;
};
const initialState: State = {
  isTosModalOpen: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTosModal: (state, action: PayloadAction<boolean>) => {
      state.isTosModalOpen = action.payload;
    },
  },
});

export const { toggleTosModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectIsTosModalOpen = (state: RootState) => state.modal.isTosModalOpen;
