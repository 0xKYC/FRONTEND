import { lazy } from "react";

const Container = lazy(() => import("../../../common/Container"));
const ScrollToTop = lazy(() => import("../../../common/ScrollToTop"));
const Content = lazy(() => import("../../../components/VerifiedProfile"));
// const Services = lazy(() => import("../../components/Services"));

const Profile = () => {
  return (
    <Container>
      <ScrollToTop />
      <Content />
      {/* <Services /> */}
    </Container>
  );
};

export default Profile;
