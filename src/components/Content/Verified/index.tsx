import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { getChainInfo } from "constans/chains";
import vContent from "content/VerifiedContent.json";
import { useGetUserQuery } from "redux/api/user/userApi";

import { CardInfo } from "../../CardInfo";
import { Heading } from "../styles";
import { Checkmark } from "./Checkmark";
import { BlockWrapper, Box, Content, ContentWrapper, Flex, StyledCard, StyledLink } from "./styles";
import { getUserSbt } from "./utils";

const VerifiedContent = () => {
  const { t } = useTranslation();

  const { chain } = useNetwork();
  const { address } = useAccount();

  const { data: user } = useGetUserQuery(address);
  if (!chain) return <p>Error with fetching the network</p>;

  if (!user) return <p>Error with fetching the user</p>;

  const sbt = getUserSbt(user, chain.id);
  const txHash = sbt?.txHash;
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
