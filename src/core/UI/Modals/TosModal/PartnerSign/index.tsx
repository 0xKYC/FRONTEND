import { useCallback, useEffect } from "react";

import { ENV } from "env";

import {
  selectIsTosModalOpen,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import { selectMockedWalletAddress } from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { loadLocalStorageTos, saveTosToLocalStorage } from "redux/localStorage";

import { ModalContent } from "../ModalContent";
import { StyledModal } from "../styles";

export const TosModalWeb2 = ({ redirect }: { redirect?: boolean }) => {
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();

  const isTosModalOpen = useAppSelector(selectIsTosModalOpen);
  const tosSigned = loadLocalStorageTos();

  const closeModal = () => {
    dispatch(toggleTosModal(false));

    localStorage.clear();
  };

  const showModal = useCallback(
    () => dispatch(toggleTosModal(true)),
    [dispatch],
  );

  useEffect(() => {
    if (mockedWalletAddress && !tosSigned) {
      setTimeout(() => {
        showModal();
      }, 500);
    } else {
      dispatch(toggleTosModal(false));
    }
  }, [mockedWalletAddress, tosSigned, dispatch, showModal]);

  const handleSignTos = () => {
    dispatch(toggleTosModal(false));
    saveTosToLocalStorage(true);
    if (redirect) {
      window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
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
