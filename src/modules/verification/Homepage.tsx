import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Services } from "modules/profile/components/Services";

import { FlowOptionsCards } from "./components/FlowOptionsCards";
import { SectionWrapper, Title } from "./styles";

const HomePage = () => {
  return (
    <SectionWrapper>
      <Title>Connect Wallet or Discord</Title>

      <Fade direction="right">
        <FlowOptionsCards />
      </Fade>

      <Services />
    </SectionWrapper>
  );
};

export default withTranslation()(HomePage);
