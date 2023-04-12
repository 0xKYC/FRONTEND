import { Link } from "react-router-dom";

import { Result } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Error = () => {
  return (
    <Container>
      <Result
        status="error"
        title="Verification failed"
        extra={
          <Link to="/">
            <ArrowLeftOutlined style={{ fontSize: ".75rem" }} /> Go to homepage
          </Link>
        }
      />
      <TextBox>
        <Text>
          We weren't able to verify your request, please contact{" "}
          <a href="mailto:support@0xkyc.id">support@0xkyc.id</a> and carefully explain your
          situation and we will try to help. Please be advised it might take up to 48h to get a
          response. Please don't share any personal information with us except for your wallet
          address and the blockchain and it's version (ex. Polygon Mumbai, Ethereum Goerli etc.).
        </Text>
      </TextBox>
    </Container>
  );
};

export default Error;

const Text = styled("p")`
  color: #616161;
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  padding-bottom: 15rem;
`;
const TextBox = styled("div")`
  text-align: center;
  max-width: 70%;
`;
