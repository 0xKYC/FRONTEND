import { Col, Row } from "antd";

import Container from "core/UI/Container";
import { Service } from "modules/verification/components/Services/Service";
import styled from "styled-components";

import { HowToGetVerified } from "./HowToGetVerified";

const DiscordServers = () => {
  return (
    <Container>
      <SectionWrapper>
        <HowToGetVerified />

        <H3>Other Discord Servers you can verify with:</H3>

        <Row style={{ marginTop: "2rem", textAlign: "center" }}>
          <Col lg={8} md={12} xs={24}>
            <Service
              redirect={true}
              description="Discord server 1 description"
              href="https://discord.com/"
              img="/img/discord.png"
              title="Discord server 1"
            />
          </Col>

          <Col lg={8} md={12} xs={24}>
            <Service
              redirect={true}
              description="Discord server 2 description"
              href="https://discord.com/"
              img="/img/discord.png"
              title="Discord server 2"
            />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Service
              redirect={true}
              description="Discord server 3 description"
              href="https://discord.com/"
              img="/img/discord.png"
              title="Discord server 3"
            />
          </Col>
        </Row>
      </SectionWrapper>
    </Container>
  );
};

export default DiscordServers;

const H3 = styled.h3`
  font-size: 1.7rem;
  margin-top: 0rem;
  text-align: center;
  @media screen and (min-width: 724px) {
    margin-top: 5rem;
  }
`;

const SectionWrapper = styled.section`
  margin: 0 auto;
  padding-bottom: 15rem;

  @media screen and (min-width: 1024px) {
    padding-top: 3rem;
  }
`;
