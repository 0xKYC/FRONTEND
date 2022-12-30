import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Content = lazy(() => import("../../components/Content/Verified"));

const Profile = () => {
  return (
    <Container>
      <ScrollToTop />
      <Content />
    </Container>
  );
};

export default Profile;
