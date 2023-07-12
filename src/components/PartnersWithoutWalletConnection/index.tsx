import Container from "common/Container";

import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";
import { VerificationForPartners } from "./Verifcation";
import { useHandleParams } from "./hooks/useHandleParams";

export const PartnersWithoutWalletConnectionScreen = () => {
  useHandleParams();
  return (
    <Container>
      <VerificationForPartners
        type="right"
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.biometrics}
        icon="developer.svg"
      />
    </Container>
  );
};
