import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

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

import { Box, StyledModal, StyledP, Title } from "../styles";

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
      showModal();
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
      <Box>
        <Title>Welcome to 0xKYC </Title>

        <StyledP>
          By clicking on the “Accept” button or otherwise continuing to use this
          service, you agree you have read, understand and accept{" "}
          <a
            href="https://onfido.com/facial-scan-policy-and-release/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onfido Facial Scan Policy and Release
          </a>
          ,{" "}
          <a
            href="https://onfido.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://onfido.com/terms-of-service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms Of Service
          </a>{" "}
          as well as{" "}
          <Link
            to="/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            0xKYC Terms Of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          .
        </StyledP>
      </Box>
    </StyledModal>
  );
};
