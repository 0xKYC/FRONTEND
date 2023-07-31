import { lazy } from "react";

import IntroContent from "content/IntroContent.json";
import VerifyContent from "content/VerifyContent.json";
import Container from "core/UI/Container";
import { LoadingSpinner } from "core/UI/LoadingSpinner";
import { useHandleParams } from "modules/verification/hooks/useHandleParams";

const ContentBlock = lazy(
  () => import("modules/verification/CustomVerificationPage"),
);

const CustomVerification = ({ isLoading }: { isLoading: boolean }) => {
  useHandleParams();
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;
  return (
    <Container>
      <ContentBlock
        type="right"
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.biometrics}
        icon="developer.svg"
      />
    </Container>
  );
};

export default CustomVerification;
