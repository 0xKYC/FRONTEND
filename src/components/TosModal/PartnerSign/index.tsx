import { useCallback, useEffect } from "react";

import {
  selectIsTosModalOpen,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import {
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ModalContent } from "../ModalContent";
import { StyledModal } from "../styles";

export const TosModalWeb2 = () => {
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);
  const isTosModalOpen = useAppSelector(selectIsTosModalOpen);

  const closeModal = () => {
    dispatch(toggleTosModal(false));

    dispatch(signTos(false));
  };

  const showModal = useCallback(
    () => dispatch(toggleTosModal(true)),
    [dispatch],
  );

  useEffect(() => {
    if (mockedWalletAddress && !tosAccepted) {
      setTimeout(() => {
        showModal();
      }, 500);
    } else {
      dispatch(toggleTosModal(false));
    }
  }, [mockedWalletAddress, tosAccepted, dispatch, showModal]);

  const handleSignTos = () => {
    dispatch(toggleTosModal(false));
    dispatch(signTos(true));
  };

  return (
    <StyledModal
      width={600}
      open={isTosModalOpen}
      onCancel={closeModal}
      onOk={handleSignTos}
      okText="Accept"
      maskClosable={false}
    >
      <ModalContent />
    </StyledModal>
  );
};
