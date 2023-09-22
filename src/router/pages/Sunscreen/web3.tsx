import { lazy } from "react";

import IntroContent from "content/IntroContent.json";
import VerifyContent from "content/VerifyContent.json";
import { LoadingSpinner } from "core/UI/LoadingSpinner";

const Container = lazy(() => import("core/UI/Container"));
const ScrollToTop = lazy(() => import("core/UI/ScrollToTop"));
const Verification = lazy(() => import("modules/verification/0xkyc"));

const SunscreenWeb3 = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return (
    <Container>
      <ScrollToTop />
      <Verification
        uniqueness={true}
        title="Verify your uniqueness with our Sunscreen service"
        content="Sunscreen is a verification check which prevents bots and duplicate accounts"
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.biometrics}
        icon="developer.svg"
        flow="sunscreen"
      />
    </Container>
  );
};

export default SunscreenWeb3;
