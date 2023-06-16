import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { LoadingSpinner } from "common/LoadingSpinner";
import { SupportedChainId } from "constans/chains";
import { useGetUserQuery } from "redux/api/user/userApi";
import {
  selectMockedWalletAddress,
  selectRedirectUrl,
} from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { CardInfo } from "../CardInfo";
import { VerifiedCard } from "./VerifiedCard";
import { BlockWrapper, ContentWrapper } from "./styles";
import { getUserSbt } from "./utils";

const VerifiedPage = () => {
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

  useEffect(() => {
    if (redirectUrlFromPartner) {
      const timer = setTimeout(() => {
        // window.location.href = redirectUrlFromPartner;
        window.open(redirectUrlFromPartner, "_blank");
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [redirectUrlFromPartner]);

  if (isLoading) return <LoadingSpinner tip="Loading..." height="70vh" />;
  if (!user) return <p>Error with fetching the user</p>;

  const sbt = getUserSbt(user);
  const txHash = sbt?.txHash;

  return (
    <BlockWrapper>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={13} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <VerifiedCard
                txHash={txHash}
                chainId={chainId}
                redirectUrlFromPartner={redirectUrlFromPartner}
              />
            </ContentWrapper>
          </Col>
          <Col lg={10} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <CardInfo isPartnerFlow={Boolean(mockedWalletAddress)} />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};

export default withTranslation()(VerifiedPage);
