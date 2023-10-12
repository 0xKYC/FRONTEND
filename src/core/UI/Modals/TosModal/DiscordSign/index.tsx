import { useEffect } from "react";

import tosContent from "content/TermsOfService.json";
import { useAcceptTosMutation } from "redux/api/user/userApi";
import {
  selectIsTosModalOpen,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ModalContent } from "../ModalContent";
import { StyledModal } from "../styles";

export const TosModalDiscord = ({ signed }: { signed: boolean }) => {
  const dispatch = useAppDispatch();

  const isTosModalOpen = useAppSelector(selectIsTosModalOpen);

  const [signTos] = useAcceptTosMutation();

  useEffect(() => {
    if (!signed) {
      dispatch(toggleTosModal(true));
    }
  }, [signed, dispatch]);

  const closeModal = () => {
    dispatch(toggleTosModal(false));

    localStorage.clear();
  };

  const handleSignTos = async () => {
    dispatch(toggleTosModal(false));

    await signTos({
      signature: "signed",
      tosVersion: tosContent.version,
    }).unwrap();
  };

  return (
    <StyledModal
      className="discord-modal"
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
