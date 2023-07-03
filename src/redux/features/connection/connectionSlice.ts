import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChainId, SupportedChainId } from "constans/chains";

import { RootState } from "../../store";

type State = {
  isConnectorsModalOpen: boolean;
  isConnectionInfoModalOpen: boolean;
  selectedChain: ChainId;
};
const initialState: State = {
  isConnectorsModalOpen: false,
  isConnectionInfoModalOpen: false,
  selectedChain: SupportedChainId.POLYGON,
};
export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    toggleConnectorsModal: (state) => {
      state.isConnectorsModalOpen = !state.isConnectorsModalOpen;
    },
    closeConnectionInfoModal: (state) => {
      state.isConnectionInfoModalOpen = false;
    },
    openConnectionInfoModal: (state) => {
      state.isConnectionInfoModalOpen = true;
    },
    setChain: (state, action: PayloadAction<ChainId>) => {
      state.selectedChain = action.payload;
    },
  },
});

export const {
  toggleConnectorsModal,
  setChain,
  openConnectionInfoModal,
  closeConnectionInfoModal,
} = connectionSlice.actions;

export default connectionSlice.reducer;

export const selectIsConnectorsModalOpen = (state: RootState) =>
  state.connection.isConnectorsModalOpen;

export const selectIsConnectionInfoModalOpen = (state: RootState) =>
  state.connection.isConnectionInfoModalOpen;

export const selectCurrentChain = (state: RootState) =>
  state.connection.selectedChain;
