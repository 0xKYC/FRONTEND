import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";

import Container from "common/Container";
import { SvgIcon } from "common/SvgIcon";

import {
  Chat,
  Extra,
  FooterContainer,
  FooterSection,
  Large,
  LogoContainer,
  NavLink,
  Para,
  StyledLink,
  Title,
} from "./styles";

type SocialLinkProps = {
  href: string;
  src: string;
};
export const SocialLink = ({ href, src }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </a>
  );
};
const Footer = ({ t }: any) => {
  return (
    <>
      <FooterSection>
        <Container padding={true}>
          <Row justify="end">
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>{t("Contact")}</Title>
              <Para>{t(`Do you have any questions?`)}</Para>

              <a href="mailto:support@0xkyc.id">
                <Chat>{t(`Send Us an Email`)}</Chat>
              </a>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/about">
                {t("About Us")}
              </Large>

              <StyledLink
                href="https://github.com/0xKYC/.docs/blob/main/IMPLEMENTATION.md"
                target="_blank"
                rel="noopener"
              >
                {t("Documentation")} &#8618;
              </StyledLink>
              <StyledLink
                href="https://www.notion.so/0xkyc/How-to-get-verified-on-0xKYC-dApp-5a2e8532c564491189db9f816b5ee046"
                target="_blank"
                rel="noopener"
              >
                {t("How to get verified")} &#8618;
              </StyledLink>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>{t("Legal")}</Title>
              <Large left="true" to="/privacy-policy">
                {t("Privacy Policy")}
              </Large>
              <Large left="true" to="/terms-of-service">
                {t("Terms of Service")}
              </Large>
              <Large left="true" to="/third-parties">
                {t("Third Parties")}
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
                <img src="/img/icons/new-logo.png" alt="logo" height="44px" />
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
              {/* crunchbase icon */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
