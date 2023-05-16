import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
import tos from "content/TermsOfService.json";
import { useEditUserMutation } from "redux/api/user/userApi";
import { selectIsTosModalOpen, toggleTosModal } from "redux/features/modal/tosSlice";
import {
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Box, StyledModal, StyledP, Title } from "../styles";

const loadingIcon = <LoadingOutlined style={{ fontSize: 18, color: "white" }} spin />;
const { version } = tos;

export const TosModalWeb2 = () => {
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);
  const isTosModalOpen = useAppSelector(selectIsTosModalOpen);

  const [editUser, result] = useEditUserMutation();

  const closeModal = () => {
    dispatch(toggleTosModal(false));

    dispatch(signTos(false));
  };

  const showModal = useCallback(() => dispatch(toggleTosModal(true)), [dispatch]);

  useEffect(() => {
    if (mockedWalletAddress && !tosAccepted) {
      showModal();
    } else {
      dispatch(toggleTosModal(false));
    }
  }, [mockedWalletAddress, tosAccepted, dispatch, showModal]);

  const handleSignTos = () => {
    if (mockedWalletAddress) {
      const userToUpdate = {
        walletAddress: mockedWalletAddress,
        signature: "signed",
        tosVersion: version,
        time_stamp: new Date().toISOString(),
      };
      editUser(userToUpdate)
        .unwrap()
        .then(() => {
          dispatch(toggleTosModal(false));
          dispatch(signTos(true));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <StyledModal
      open={isTosModalOpen}
      onCancel={closeModal}
      onOk={handleSignTos}
      okText={result.isLoading ? loadingIcon : "Accept"}
      maskClosable={false}
    >
      <Box>
        <Title>Welcome to 0xKYC </Title>

        <StyledP biggerMargin>
          By using 0xKYC, you consent to our{" "}
          <Link to="terms-of-service" target="_blank" rel="noopener noreferrer">
            Terms of Service{" "}
          </Link>
          and{" "}
          <a
            href="https://0xkyc.id/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </StyledP>
      </Box>
    </StyledModal>
  );
};
