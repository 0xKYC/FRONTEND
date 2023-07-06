import { ModalContent } from "../ModalContent";
import { StyledModal } from "../styles";
import { useSignTerms } from "./useSignTerms";

export const TosModalNormal = () => {
  const { closeModal, sign, isModalOpen } = useSignTerms();

  return (
    <StyledModal
      key={1}
      width={600}
      open={isModalOpen}
      onCancel={closeModal}
      onOk={sign}
      okText="Accept"
      maskClosable={false}
    >
      <ModalContent />
    </StyledModal>
  );
};
