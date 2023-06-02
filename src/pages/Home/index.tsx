import { lazy } from "react";

import { LoadingSpinner } from "../../common/LoadingSpinner";
import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/Content"));

const Home = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.content}
        icon="developer.svg"
      />
    </Container>
  );
};

export default Home;
