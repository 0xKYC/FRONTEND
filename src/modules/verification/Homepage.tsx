import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import ReactPlayer from "react-player/youtube";

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
          ? "Choose the Verification Flow:"
          : "Connect Wallet or Discord"}{" "}
      </Title>

      <Fade direction="right">
        {isConnected ? <FlowSelection /> : <ConnectionOptions />}
      </Fade>

      {!isConnected && <Services />}

      <p style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "5rem" }}>
        Watch quick video about 0xKYC!
      </p>
      <div
        style={{
          display: "flex",
          marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=QHm8tHxXlN4"
          controls={true}
        />
      </div>
    </SectionWrapper>
  );
};

export default withTranslation()(HomePage);
