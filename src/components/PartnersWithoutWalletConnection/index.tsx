import Container from "common/Container";
import Content from "components/Content";

import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";
import { useHandleParams } from "./hooks/useHandleParams";

export const PartnersWithoutWalletConnectionScreen = () => {
  useHandleParams();
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
