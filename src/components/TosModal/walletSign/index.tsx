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
          By connecting your wallet and using 0xKYC, you consent to our{" "}
          <Link to="terms-of-service" target="_blank" rel="noopener noreferrer">
            Terms of Service{" "}
          </Link>
          and{" "}
          <Link to="privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
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
