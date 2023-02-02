import { Result } from "antd";
import { Container } from "../../components/Mint/styled";

const Error = () => {
  return (
    <Container>
      <Result
        status="error"
        title="Verification failed"
        subTitle="For more information, please contact support."
        extra={[<a href="mailto:support@0xkyc.id">support@0xkyc.id</a>]}
      />
    </Container>
  );
};

export default Error;
