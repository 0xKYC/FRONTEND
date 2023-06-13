import { Result, Spin } from "antd";
import { Progress } from "antd";

import { useMint } from "./hooks/useMint";
import { Container, StyledBox } from "./styled";

export const MintContent = () => {
  const { error, secondsRemaining, percent } = useMint();

  const loadingTitle =
    secondsRemaining === 0
      ? "Your token is being minted"
      : "Your data is being processed";
  const loadingInfo =
    secondsRemaining === 0
      ? "Please wait for the token to mint. This usually takes up to 30 seconds."
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
          <p
            style={{ color: "#fb7324", fontSize: "1.2rem", fontWeight: "400" }}
          >
            {loadingTitle}
          </p>

          <Spin
            style={{
              color: "#fb7324",
              fontSize: "1.2rem",
            }}
          ></Spin>
          <Progress
            percent={percent}
            type="line"
            showInfo={false}
            strokeColor={{ from: "#fbae81", to: "#fb7324" }}
          />

          <p style={{ color: "#fb7324", fontSize: "1rem", fontWeight: "300" }}>
            {loadingInfo}
          </p>
        </StyledBox>
      )}
    </Container>
  );
};
