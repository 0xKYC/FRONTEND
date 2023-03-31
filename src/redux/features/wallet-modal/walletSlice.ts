import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isModalOpen: false,
};
export const walletSlice = createSlice({
  name: "wallet-modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = walletSlice.actions;

export default walletSlice.reducer;

export const selectIsModalOpen = (state: RootState) =>
  state.walletModal.isModalOpen;
