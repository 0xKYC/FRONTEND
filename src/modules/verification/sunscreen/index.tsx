import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { DiscordButton } from "core/UI/Button/styles";
import { InformationCard } from "core/UI/InformationCard/InformationCard";

import { CommonSection } from "../components/CommonSection";
import { SectionWrapper } from "../styles";

const SuncreenVerification = () => {
  return (
    <SectionWrapper style={{ textAlign: "center", paddingTop: 0 }}>
      <Fade>
        <Row justify="space-around" align="middle">
          <Col lg={11} md={24} sm={24} xs={24}>
            <CommonSection
              header="Verify your uniqueness with our Sunscreen service"
              contentText="Sunscreen is a verification check which prevents bots and duplicate accounts in Discord servers"
            >
              <DiscordButton>Connect Discord</DiscordButton>
            </CommonSection>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <InformationCard margin="5rem 0 0 0" isUniquenessFlow={true} />
          </Col>
        </Row>
      </Fade>
    </SectionWrapper>
  );
};

export default SuncreenVerification;
