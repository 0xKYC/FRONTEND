import { lazy } from "react";

import { LoadingSpinner } from "core/UI/LoadingSpinner";

const Container = lazy(() => import("core/UI/Container"));
const ScrollToTop = lazy(() => import("core/UI/ScrollToTop"));
const ContentBlock = lazy(() => import("modules/verification/Homepage"));

const HomePage = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock />
    </Container>
  );
};

export default HomePage;
