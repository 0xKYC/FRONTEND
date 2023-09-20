import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { LoadingSpinner } from "core/UI/LoadingSpinner";
import { DEFAULT_CHAIN } from "core/constans/chains";
import { useGetUserWalletQuery } from "redux/api/user/userApi";
import {
  selectMockedWalletAddress,
  selectRedirectUrl,
} from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { BlockWrapper, ContentWrapper, ErrorText } from "../styles";
import { VerifiedCard } from "./components/VerifiedCard";
import { useRedirectUser } from "./hooks/useRedirectUser";
import { getUserSbt } from "./utils";

const Web3ProfilePage = () => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const redirectUrlFromPartner = useAppSelector(selectRedirectUrl);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const walletAddress = address || mockedWalletAddress;
  const chainId = chain ? chain.id : DEFAULT_CHAIN;
  const { data: user, isLoading } = useGetUserWalletQuery({
    walletAddress: walletAddress || "",
    chainId,
  });

  useRedirectUser(redirectUrlFromPartner);

  if (isLoading) return <LoadingSpinner tip="Loading..." height="70vh" />;
  if (!user) return <ErrorText>Error with fetching the user</ErrorText>;

  const sbt = getUserSbt(user);
  const txHash = sbt?.txHash;

  return (
    <BlockWrapper>
      <Fade triggerOnce direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={13} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <VerifiedCard
                flow={user.flow}
                txHash={txHash}
                chainId={chainId}
                redirectUrlFromPartner={redirectUrlFromPartner}
              />
            </ContentWrapper>
          </Col>
          <Col lg={10} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <InformationCard
                isUniquenessFlow={Boolean(mockedWalletAddress)}
              />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </BlockWrapper>
  );
};

export default Web3ProfilePage;
