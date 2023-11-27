import { Col, Row } from "antd";

import Container from "core/UI/Container";
import { useGetCurrentFlow } from "core/hooks/useGetCurrentFlow";

import FooterWave from "./FooterWave";
import { SocialLink } from "./SocialLink";
import {
  Chat,
  Extra,
  FooterContainer,
  FooterMainContainer,
  FooterSection,
  Large,
  LogoContainer,
  NavLink,
  Para,
  StyledLink,
  Title,
} from "./styles";

const Footer = () => {
  const { isSunscreenFlow } = useGetCurrentFlow();
  return (
    <FooterMainContainer>
      <FooterWave />
      <FooterSection>
        <Container padding={true}>
          <Row justify="end">
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Contact</Title>
              <Para>{`Do you have any questions?`}</Para>

              <a href="mailto:support@0xkyc.id">
                <Chat> {`Send Us an Email`}</Chat>
              </a>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Company</Title>
              <Large left="true" to="/about">
                About Us
              </Large>

              <StyledLink
                href="https://0xkyc.id/pricing"
                target="_blank"
                rel="noreferrer"
              >
                Pricing &#8618;
              </StyledLink>

              <StyledLink
                href="https://docs.0xkyc.id/"
                target="_blank"
                rel="noreferrer"
              >
                Documentation &#8618;
              </StyledLink>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>Legal</Title>
              <Large left="true" to="/privacy-policy">
                Privacy Policy
              </Large>
              <Large left="true" to="/terms-of-service">
                Terms of Service
              </Large>
              <Large left="true" to="/tutorials">
                Tutorials
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            className="footer-icons-row"
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1.8rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img
                  src={
                    isSunscreenFlow
                      ? "/img/sunscreen-logo-crop.png"
                      : "/img/icons/new-logo.png"
                  }
                  alt="logo"
                  height="44px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="https://0xkyc.id" src="internet.svg" />
              <SocialLink href="https://github.com/0xKYC" src="github.svg" />
              <SocialLink
                href="https://twitter.com/0xkycinc"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/0xkyc/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://discord.com/invite/p58hBne2Ue"
                src="discord.svg"
                width="32px"
                height="32px"
              />
              {/* crunchbase icon */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </FooterMainContainer>
  );
};

export default Footer;
