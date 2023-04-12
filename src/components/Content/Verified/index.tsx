import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useNetwork } from "wagmi";

import { getChainInfo } from "constans/chains";
import vContent from "content/VerifiedContent.json";
import { selectTxHashes } from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { CardInfo } from "../../CardInfo";
import { Heading } from "../styles";
import { Checkmark } from "./Checkmark";
import { BlockWrapper, Box, Content, ContentWrapper, Flex, StyledCard, StyledLink } from "./styles";
import { getHash } from "./utils";

const VerifiedContent = () => {
  const { t } = useTranslation();
  const txHashes = useAppSelector(selectTxHashes);
  const { chain } = useNetwork();

  if (!chain) return <p>Error with fetching the network</p>;

  const hash = getHash(txHashes, chain.id);

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
                  href={explorer + hash}
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
