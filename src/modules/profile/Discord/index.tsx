import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { InformationCard } from "core/UI/InformationCard/InformationCard";

import { BlockWrapper, ContentWrapper } from "../styles";
import { VerifiedCard } from "./components/VerfiedCard";

export const DiscordProfilePage = () => {
  return (
    <BlockWrapper>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={13} md={24} sm={24} xs={24}>
            <ContentWrapper style={{ padding: "0" }}>
              <VerifiedCard />
            </ContentWrapper>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <InformationCard isUniquenessFlow={true} />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};
