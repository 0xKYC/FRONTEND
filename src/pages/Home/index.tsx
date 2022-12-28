import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/Content"));
const Wave = lazy(() => import("../../components/Wave"));

const Home = () => {
  return (
    <div className="wave_container">
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          verifyTitle={VerifyContent.title}
          verifyText={VerifyContent.content}
          cardInfo={VerifyContent.info}
          cardContact={VerifyContent.contact}
          icon="developer.svg"
          id="intro"
        />
      </Container>
      <Wave />
    </div>
  );
};

export default Home;
