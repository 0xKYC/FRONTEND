import { lazy } from "react";

const Container = lazy(() => import("core/UI/Container"));
const ScrollToTop = lazy(() => import("core/UI/ScrollToTop"));
const ContentBlock = lazy(() => import("modules/verification/Homepage"));

const HomePage = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock />
    </Container>
  );
};

export default HomePage;
