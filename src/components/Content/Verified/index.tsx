import { Fade } from "react-awesome-reveal";
import { useTranslation, withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { LoadingSpinner } from "common/LoadingSpinner";
import { SupportedChainId, getChainInfo } from "constans/chains";
import vContent from "content/VerifiedContent.json";
import { useGetUserQuery } from "redux/api/user/userApi";
import {
  selectMockedWalletAddress,
  selectRedirectUrl,
} from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { CardInfo } from "../../CardInfo";
import { Heading } from "../styles";
import { Checkmark } from "./Checkmark";
import {
  BlockWrapper,
  Box,
  Content,
  ContentWrapper,
  Flex,
  P,
  StyledCard,
  StyledLink,
  StyledRedirectLink,
} from "./styles";
import { getUserSbt } from "./utils";

const VerifiedContent = () => {
  const { t } = useTranslation();

  const { chain } = useNetwork();
  const { address } = useAccount();
  const redirectUrlFromPartner = useAppSelector(selectRedirectUrl);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const walletAddress = address || mockedWalletAddress;
  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;
  const { data: user, isLoading } = useGetUserQuery({
    walletAddress: walletAddress || "",
    chainId,
  });

  if (isLoading) return <LoadingSpinner tip="Loading..." height="70vh" />;
  if (!user) return <p>Error with fetching the user</p>;

  const sbt = getUserSbt(user);
  const txHash = sbt?.txHash;
  const { logoUrl, label, explorer, explorerName } = getChainInfo(chainId);

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
                  chainId={chainId}
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
              {redirectUrlFromPartner && (
                <P>
                  Close the tab or go back to{" "}
                  <StyledRedirectLink href={redirectUrlFromPartner}>
                    Insert Stonks
                  </StyledRedirectLink>
                </P>
              )}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};

export default withTranslation()(VerifiedContent);
