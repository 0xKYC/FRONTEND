import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { useAccount } from "wagmi";

import { PROMOTION_VIDEO, SUNSCREEN_CHECK_TUTORIAL } from "core/constans/links";
import { Services } from "modules/verification/components/Services";

import { BotInvitationSection } from "./components/BotInvitationSection";
import { ConnectionOptions } from "./components/ConnectionOptions";
import { FlowSelection } from "./components/FlowSelection";
import { VideoSection } from "./components/VideoSection";
import { SectionWrapper, Title } from "./styles";

const HomePage = () => {
  const { isConnected } = useAccount();
  return (
    <SectionWrapper>
      <Title>
        {" "}
        {isConnected
          ? "Choose the Verification Flow:"
          : "Connect Wallet or Discord"}{" "}
      </Title>

      <Fade direction="right">
        {isConnected ? <FlowSelection /> : <ConnectionOptions />}
      </Fade>
      {!isConnected && (
        <>
          <BotInvitationSection />
          <Services />
        </>
      )}
      <VideoSection
        src={isConnected ? SUNSCREEN_CHECK_TUTORIAL : PROMOTION_VIDEO}
      />
    </SectionWrapper>
  );
};

export default withTranslation()(HomePage);
