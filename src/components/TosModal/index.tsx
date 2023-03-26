import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSignTerms } from "./useSignTerms";
import { Box, StyledInfo, StyledModal, StyledP, Title } from "./styles";

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
          <a
            href="https://0xkyc.id/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
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
