import { Row, Col } from "antd";

import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { getChainInfo } from "../../../constans/chains";
import vContent from "../../../content/VerifiedContent.json";
import { selectTxHash } from "../../../redux/features/user/userSlice";
import { useAppSelector } from "../../../redux/hooks";
import { CardInfo } from "../../CardInfo";
import { Heading } from "../styles";
import { Checkmark } from "./Checkmark";

import {
  Content,
  Box,
  StyledLink,
  StyledCard,
  BlockWrapper,
  ContentWrapper,
  Flex,
} from "./styles";

const VerifiedContent = () => {
  const { t } = useTranslation();
  const txHash = useAppSelector(selectTxHash);
  const { chain } = useNetwork();

  if (!chain) return <p>Error with fetching the network</p>;

  const { logoUrl, label, explorer, explorerName } = getChainInfo(chain.id);

  return (
    <BlockWrapper>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={13} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <StyledCard>
                <Box>
                  <Heading>{t(vContent.title)}</Heading>
                  <Flex>
                    <Checkmark />
                    <img
                      alt={label}
                      src={logoUrl}
                      width={44}
                      height={42}
                      style={{ marginTop: "3px", marginLeft: "6px" }}
                    />
                  </Flex>
                </Box>
                {vContent.info.map(({ text, id }) => {
                  return <Content key={id}>{t(text)}</Content>;
                })}
                <StyledLink
                  chainId={chain.id}
                  href={explorer + txHash}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to {explorerName}
                </StyledLink>
              </StyledCard>
            </ContentWrapper>
          </Col>
          <Col lg={10} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <CardInfo />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};

export default withTranslation()(VerifiedContent);
