import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  selectIsTosModalOpen,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import {
  selectMockedWalletAddress,
  selectTosAccepted,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ModalContent } from "../ModalContent";
import { StyledModal } from "../styles";

export const TosModalWeb2 = ({ redirect }: { redirect?: boolean }) => {
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAccepted);
  const isTosModalOpen = useAppSelector(selectIsTosModalOpen);
  const navigate = useNavigate();
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
    if (redirect) {
      navigate("/discord-servers");
    }
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
