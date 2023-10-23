import { Result, Spin } from "antd";

import { useDiscordVerification } from "./hooks/useDiscordVerification";
import { Container, DiscordText, StyledBox } from "./styles";

export const DiscordVerificationPage = () => {
  const { error } = useDiscordVerification();
  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="It took longer than expected. Please refresh the page or come back again later."
        />
      ) : (
        <StyledBox className="discord">
          <Spin />

          <DiscordText>
            Please wait a few moments, you will be automatically redirected.
          </DiscordText>
        </StyledBox>
      )}
    </Container>
  );
};
