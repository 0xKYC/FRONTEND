import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChainId, SupportedChainId } from "../../../constans/chains";
import { RootState } from "../../store";

interface State {
  isModalOpen: boolean;
  selectedChain: ChainId;
}
const initialState: State = {
  isModalOpen: false,
  selectedChain: SupportedChainId.GOERLI,
};
export const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setChain: (state, action: PayloadAction<ChainId>) => {
      state.selectedChain = action.payload;
    },
  },
});

export const { toggleModal, setChain } = networkSlice.actions;

export default networkSlice.reducer;

export const selectIsModalOpen = (state: RootState) =>
  state.network.isModalOpen;
export const selectCurrentChain = (state: RootState) =>
  state.network.selectedChain;
