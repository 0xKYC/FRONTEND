import { Result } from "antd";

import { Container, StyledBox } from "./styled";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useMint } from "./useMint";
import { LoadingSpinner } from "../../common/LoadingSpinner";

export const MintContent = () => {
  const { error } = useMint();

  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="Please go back and refresh the page, we've encountered an issue."
          extra={
            <Link to="/">
              <ArrowLeftOutlined style={{ marginRight: ".4rem" }} />
              Go back
            </Link>
          }
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
