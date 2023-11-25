import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { useMediaQuery } from "core/hooks/useMediaQuery";

import { BlockWrapper, ContentWrapper } from "../styles";
import { Instructions } from "./components/Instructions";
import { VerifiedCard } from "./components/VerfiedCard";
import { BotInvitationSection } from "modules/verification/components/BotInvitationSection";

export const DiscordProfilePage = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <BlockWrapper>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col 
          order={1}
          lg={13} 
          md={24} 
          sm={24} 
          xs={24}
          >
            <ContentWrapper style={{ padding: "0" }}>
              <VerifiedCard />
            </ContentWrapper>
          </Col>
          <Col 
          order={isMobile ? 2 : 3}
          flex="auto"
          >
            <Instructions />
            <BotInvitationSection />
          </Col>
          <Col 
          order={isMobile ? 3 : 2}
          lg={10} 
          md={24} 
          sm={24} 
          xs={24} 
          >
            <ContentWrapper>
              <InformationCard
                isUniquenessFlow={true}
                isDiscordFlow
                verified={true}
              />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};
