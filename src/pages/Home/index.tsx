import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/Content"));

const Home = () => {
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
        id="intro"
      />
    </Container>
  );
};

export default Home;
