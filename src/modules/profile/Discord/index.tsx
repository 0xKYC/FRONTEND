import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { InformationCard } from "core/UI/InformationCard/InformationCard";
import styled from "styled-components";

import { BlockWrapper, ContentWrapper } from "../styles";
import { VerifiedCard } from "./components/VerfiedCard";
import {
  MobileWalletConnection,
  WalletConnection,
} from "./components/WalletConnection";

export const DiscordProfilePage = () => {
  return (
    <SectionWrapper style={{ padding: 0, minHeight: 0 }}>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={13} md={24} sm={24} xs={24}>
            <ContentWrapper style={{ padding: "0" }}>
              <VerifiedCard />
            </ContentWrapper>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24}>
            <ContentWrapper style={{ marginBottom: "1.7rem" }}>
              <MobileWalletConnection />

              <InformationCard isUniquenessFlow={true} />

              <WalletConnection />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(BlockWrapper)`
  padding: 0;
  min-height: 0;
  max-width: 520px;

  @media screen and (min-width: 990px) {
    max-width: 100%;
  }
`;
