import { Col, Row } from "antd";

import Container from "core/UI/Container";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import { DiscordProfilePage } from "modules/profile/Discord";
import { NotVerifiedDiscordPage } from "modules/profile/Discord/NotVerifiedDiscordPage";
import { Service } from "modules/verification/components/Services/Service";
import { Heading, SectionWrapper } from "modules/verification/styles";
import styled from "styled-components";

const DiscordServers = () => {
  const isMobile = useMediaQuery("(max-width:430px)");

  const isVerified = false;
  return (
    <Container>
      <SectionWrapper
        style={{ minHeight: "50vh", textAlign: isVerified ? "left" : "center" }}
      >
        <Heading style={{ marginTop: isMobile ? "0rem" : "2rem" }}>
          {!isVerified && "How to get verified"}
        </Heading>

        {isVerified ? <DiscordProfilePage /> : <NotVerifiedDiscordPage />}

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
  margin-top: 3rem;
  text-align: center;
  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
