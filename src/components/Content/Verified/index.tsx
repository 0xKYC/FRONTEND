import { Row, Col } from "antd";

import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";

import vContent from "../../../content/VerifiedContent.json";
import { selectTxHash } from "../../../redux/features/wallet/onfidoSlice";
import { useAppSelector } from "../../../redux/hooks";
import { CardInfo } from "../../CardInfo";
import { RightBlockContainer, ContentWrapper } from "../styles";
import { Checkmark } from "./Checkmark";

import { Content, Box, StyledLink, StyledCard } from "./styles";

export const VerifiedContent = () => {
  const { t } = useTranslation();
  const txHash = useAppSelector(selectTxHash);

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <StyledCard>
                <Box>
                  <h6>{t(vContent.title)}</h6>
                  <Checkmark />
                </Box>
                {vContent.info.map(({ text, id }) => {
                  return <Content key={id}>{t(text)}</Content>;
                })}
                <StyledLink
                  href={"https://goerli.etherscan.io/tx/" + txHash}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Etherscan
                </StyledLink>
              </StyledCard>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <CardInfo />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(VerifiedContent);
