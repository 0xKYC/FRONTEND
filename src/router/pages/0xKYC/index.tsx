import { lazy } from "react";

import IntroContent from "content/IntroContent.json";
import VerifyContent from "content/VerifyContent.json";
import { LoadingSpinner } from "core/UI/LoadingSpinner";

const Container = lazy(() => import("core/UI/Container"));
const ScrollToTop = lazy(() => import("core/UI/ScrollToTop"));
const ContentBlock = lazy(() => import("modules/verification/0xkyc"));

const SanctionsCheck = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        uniqueness={false}
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.content}
        icon="developer.svg"
        flow="0xkyc"
      />
    </Container>
  );
};

export default SanctionsCheck;
