import { lazy } from "react";

import Container from "core/UI/Container";

const SunscreenPage = lazy(
  () => import("../../../modules/verification/sunscreen"),
);
const Sunscreen = () => {
  return (
    <Container>
      <SunscreenPage />
    </Container>
  );
};

export default Sunscreen;
