import { Result, Spin } from "antd";
import { Progress } from "antd";

import { useMint } from "./hooks/useMint";
import { Container, P, StyledBox, Text } from "./styles";

export const MintPage = () => {
  const { error, percent, loadingText, mockedWalletAddress } = useMint();

  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="It took longer than expected. Please refresh the page or come back again later."
        />
      ) : (
        <StyledBox>
          {!mockedWalletAddress && <P>Your token is being minted</P>}

          <Spin
            style={{
              color: "#fb7324",
              fontSize: "1.2rem",
            }}
          ></Spin>
          {!mockedWalletAddress && (
            <Progress
              percent={percent}
              type="line"
              showInfo={false}
              strokeColor={{ from: "#fbae81", to: "#fb7324" }}
            />
          )}

          <Text>{loadingText}</Text>
        </StyledBox>
      )}
    </Container>
  );
};
