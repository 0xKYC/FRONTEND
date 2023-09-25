import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { useAccount } from "wagmi";

import { Services } from "modules/verification/components/Services";

import { ConnectionOptions } from "./components/ConnectionOptions";
import { FlowSelection } from "./components/FlowSelection";
import { SectionWrapper, Title } from "./styles";

const HomePage = () => {
  const { isConnected } = useAccount();
  return (
    <SectionWrapper>
      <Title>
        {" "}
        {isConnected
          ? "Choose the verification flow"
          : "Connect Wallet or Discord"}{" "}
      </Title>

      <Fade direction="right">
        {isConnected ? <FlowSelection /> : <ConnectionOptions />}
      </Fade>

      {!isConnected && <Services />}
    </SectionWrapper>
  );
};

export default withTranslation()(HomePage);
