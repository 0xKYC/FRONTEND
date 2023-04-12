import { Result } from "antd";

import { Container, StyledBox } from "./styled";

import { useMint } from "./useMint";
import { LoadingSpinner } from "common/LoadingSpinner";

export const MintContent = () => {
  const { error } = useMint();

  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="It took longer than expected. Please refresh the page or come back again later."
        />
      ) : (
        <StyledBox>
          <LoadingSpinner
            tip="Please wait a few moments, you will be automatically redirected."
            width="300px"
          />
        </StyledBox>
      )}
    </Container>
  );
};
