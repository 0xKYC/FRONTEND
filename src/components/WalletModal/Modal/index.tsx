import { selectIsModalOpen, toggleModal } from "../../../redux/features/network/networkSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Options } from "../Options";
import { StyledModal, Text } from "./styles";

export const WalletModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(selectIsModalOpen);

  const closeModal = () => {
    dispatch(toggleModal());
  };
  return (
    <StyledModal
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
