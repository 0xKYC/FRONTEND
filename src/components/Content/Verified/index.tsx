import { Row, Col } from "antd";

import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";
import vContent from "../../../content/VerifiedContent.json";
import { CardInfo } from "../../CardInfo";
import { RightBlockContainer, ContentWrapper, Container } from "../styles";
import { Checkmark } from "./Checkmark";

import { Content, Box } from "./styles";

export const VerifiedContent = () => {
  const { t } = useTranslation();
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <Box>
                <h6>{t(vContent.title)}</h6>
                <Checkmark />
              </Box>
              {vContent.info.map(({ text, id, href }) => {
                return href ? (
                  <a key={id} href={href} target="_blank" rel="noreferrer">
                    {t(text)}
                  </a>
                ) : (
                  <Content key={id}>{t(text)}</Content>
                );
              })}
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <Container>
              <CardInfo />
            </Container>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(VerifiedContent);
