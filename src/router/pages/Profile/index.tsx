import { lazy } from "react";

const Container = lazy(() => import("../../../core/UI/Container"));
const ScrollToTop = lazy(() => import("../../../core/UI/ScrollToTop"));
const Content = lazy(() => import("../../../modules/profile/Web3/index"));

const Profile = () => {
  return (
    <Container>
      <ScrollToTop />
      <Content />
    </Container>
  );
};

export default Profile;
