import { Result } from "antd";

import styled from "styled-components";

const BlackListError = () => {
  return (
    <Container>
      <Result status="error" title="Verification error" />
      <TextBox>
        <Text>
          We determined you are not eligible for a 0xKYC ✅ but if you think
          that is in error, please email{" "}
          <a href="mailto:support@0xkyc.id">support@0xkyc.id</a>. There might be
          an individual on sanctioned list with your name on it.
        </Text>
      </TextBox>
    </Container>
  );
};

export default BlackListError;

const Text = styled("p")`
  color: #616161;
  font-size: 1rem;
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
  max-width: 700px;
  margin: 0 3rem;
`;
