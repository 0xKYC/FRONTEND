import {
  selectIsConnectorsModalOpen,
  toggleConnectorsModal,
} from "redux/features/connection/connectionSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Options } from "../Options";
import { StyledModal, Text } from "./styles";

export const WalletModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(selectIsConnectorsModalOpen);

  const closeModal = () => {
    dispatch(toggleConnectorsModal());
  };
  return (
    <StyledModal
      key={2}
      open={isModalOpen}
      onCancel={closeModal}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <Text>Choose wallet to connect</Text>
      <Options />
    </StyledModal>
  );
};
