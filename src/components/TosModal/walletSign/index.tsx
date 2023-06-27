import { Link } from "react-router-dom";

import { Box, StyledModal, StyledP, Title } from "../styles";
import { useSignTerms } from "./useSignTerms";

export const TosModal = () => {
  const { closeModal, sign, isModalOpen } = useSignTerms();
  return (
    <StyledModal
      width={600}
      open={isModalOpen}
      onCancel={closeModal}
      onOk={sign}
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
          <Link to="terms-of-service" target="_blank" rel="noopener noreferrer">
            {" "}
            0xKYC Terms Of Service
          </Link>{" "}
          and{" "}
          <Link to="privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          .
        </StyledP>
      </Box>
    </StyledModal>
  );
};
