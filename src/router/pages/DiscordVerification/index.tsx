import { Col, Row } from "antd";

import Container from "core/UI/Container";
import { Service } from "modules/verification/components/Services/Service";
import { Heading, SectionWrapper } from "modules/verification/styles";
import styled from "styled-components";

const DiscordServers = () => {
  return (
    <Container>
      <SectionWrapper style={{ minHeight: "50vh", textAlign: "center" }}>
        <Heading>How to get verified</Heading>

        <Text style={{ marginTop: "3rem" }}>Follow the next steps:</Text>
        <Text>
          1. Go to our Discord Server by clicking{" "}
          <StyledLink
            href="https://discord.com/invite/p58hBne2Ue"
            target="_blank"
            rel="noopener"
          >
            here
          </StyledLink>
          .
        </Text>
        <Text>
          2. In the Discord server, find the <b>#bot</b> channel and click on it
          to enter.
        </Text>
        <Text>
          3. Follow the instructions provided in the channel to complete the
          verification process.
        </Text>

        <H3>Other Discord Servers you can verify with:</H3>
        <Row style={{ marginTop: "2rem" }}>
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

  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
const Text = styled.p`
  font-size: 1.3rem;
  @media screen and (min-width: 400px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled.a`
  color: #5865f2;

  &:hover,
  &:focus,
  &:active {
    color: #5865f2;
    text-decoration: none;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #5865f2;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  &:active::before {
    background-color: #5865f2;
  }
  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  position: relative;
  transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;

  letter-spacing: 0.025em;
  text-decoration: none;
  padding: 0.1em;
  font-weight: 700;
`;
