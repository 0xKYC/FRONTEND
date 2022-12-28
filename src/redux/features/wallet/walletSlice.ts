import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

export interface Wallet {
  walletAddress: string | null;
}

const initialState: Wallet = {
  walletAddress: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addWalletAddress: (state, action: PayloadAction<string | null>) => {
      state.walletAddress = action.payload;
    },
  },
});

export const { addWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;

export const selectWalletAddress = (state: RootState) =>
  state.wallet.walletAddress;
