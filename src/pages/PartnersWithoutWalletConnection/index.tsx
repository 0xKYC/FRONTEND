import Container from "common/Container";
import Content from "components/Content";
import { useHandleParams } from "components/PartnersWithoutWalletConnection/hooks/useHandleParams";

import { LoadingSpinner } from "../../common/LoadingSpinner";
import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const PartnersWithoutWalletConnection = ({ isLoading }: { isLoading: boolean }) => {
  useHandleParams();
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return (
    <Container>
      <Content
        type="right"
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.content}
        icon="developer.svg"
      />
    </Container>
  );
};

export default PartnersWithoutWalletConnection;
