import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ChainId, SupportedChainId } from "../../../constans/chains";
import { RootState } from "../../store";

interface State {
  isConnectorsModalOpen: boolean;
  isConnectionInfoModalOpen: boolean;
  selectedChain: ChainId;
}
const initialState: State = {
  isConnectorsModalOpen: false,
  isConnectionInfoModalOpen: false,
  selectedChain: SupportedChainId.GOERLI,
};
export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    toggleConnectorsModal: (state) => {
      state.isConnectorsModalOpen = !state.isConnectorsModalOpen;
    },
    toggleConnectionInfoModal: (state) => {
      state.isConnectionInfoModalOpen = !state.isConnectionInfoModalOpen;
    },
    setChain: (state, action: PayloadAction<ChainId>) => {
      state.selectedChain = action.payload;
    },
  },
});

export const { toggleConnectorsModal, setChain, toggleConnectionInfoModal } =
  connectionSlice.actions;

export default connectionSlice.reducer;

export const selectIsConnectorsModalOpen = (state: RootState) =>
  state.connection.isConnectorsModalOpen;

export const selectIsConnectionInfoModalOpen = (state: RootState) =>
  state.connection.isConnectionInfoModalOpen;

export const selectCurrentChain = (state: RootState) =>
  state.connection.selectedChain;
