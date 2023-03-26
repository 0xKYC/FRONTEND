import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
  StyledLink,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
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

  return (
    <>
      <FooterSection>
        <Container padding={true}>
          <Row justify="end">
            <Col lg={7} md={7} sm={24} xs={24}>
              <Language>{t("Contact")}</Language>
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
                href="https://0xkyc.notion.site/0xKYC-Public-Documentation-f7db271a06e840f7862a929fb9f42299"
                target="_blank"
                rel="noopener"
              >
                {t("Documentation")}
              </StyledLink>
            </Col>
            <Col lg={7} md={7} sm={24} xs={24}>
              <Title>{t("Legal")}</Title>

              <Large left="true" to="/terms-of-service">
                {t("Terms of Service")}
              </Large>

              <StyledLink
                href="https://0xkyc.id/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Privacy Policy")}
              </StyledLink>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img src="/img/icons/new-logo.png" alt="logo" height="44px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
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
