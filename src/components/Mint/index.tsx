import { Result, Spin } from "antd";

import { Container, StyledBox } from "./styled";
import { useMint } from "./useMint";

export const MintContent = () => {
  const { error, secondsRemaining } = useMint();

  const loadingInfo =
    secondsRemaining === 0
      ? "This is taking longer than usual, please wait for the token to mint. This usually takes up to 30 seconds. We are waiting for the blockchain to mint the token."
      : "Please wait a few moments, you will be automatically redirected.";
  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="It took longer than expected. Please refresh the page or come back again later."
        />
      ) : (
        <StyledBox>
          <Spin
            tip={loadingInfo}
            size="large"
            style={{
              color: "#fb7324",
              fontSize: "1.2rem",
            }}
          ></Spin>
        </StyledBox>
      )}
    </Container>
  );
};
