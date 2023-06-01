import { Link } from "react-router-dom";

import { InfoCircleOutlined } from "@ant-design/icons";

import { Box, StyledInfo, StyledModal, StyledP, Title } from "../styles";
import { useSignTerms } from "./useSignTerms";

export const TosModal = () => {
  const { closeModal, sign, isModalOpen, isLoading } = useSignTerms();
  return (
    <StyledModal
      open={isModalOpen}
      onCancel={closeModal}
      onOk={sign}
      okText="Accept"
      maskClosable={false}
      okButtonProps={{ disabled: isLoading }}
    >
      <Box>
        <Title>Welcome to 0xKYC </Title>
        <StyledP>
          By clicking on the “Accept” button or otherwise continuing to use this
          service, you agree you have read, understand and accept{" "}
          <Link
            to="https://onfido.com/facial-scan-policy-and-release"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onfido Facial Scan Policy and Release,{" "}
          </Link>
          <Link
            to="https://onfido.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy{" "}
          </Link>
          and{" "}
          <Link
            to="https://onfido.com/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service{" "}
          </Link>
          as well as{" "}
          <Link to="terms-of-service" target="_blank" rel="noopener noreferrer">
            0xKYC Terms of Service{" "}
          </Link>
          and{" "}
          <Link to="privacy-policy" target="_blank" rel="noopener noreferrer">
            0xKYC Privacy Policy
          </Link>
          .
        </StyledP>

        {isLoading && (
          <StyledInfo>
            <InfoCircleOutlined style={{ fontSize: "1.1rem" }} /> Check your
            wallet to confirm
          </StyledInfo>
        )}
      </Box>
    </StyledModal>
  );
};
