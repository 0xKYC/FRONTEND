import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { Button } from "common/Button";
import { SvgIcon } from "common/SvgIcon";
import { SupportedChainId } from "constans/chains";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import {
  selectApplicantId,
  selectCallbackUrl,
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { onfidoRedirect } from "service/onfido/onfido.service";

import { CardInfo } from "../CardInfo";
import { EmailForm } from "../EmailForm";
import { TosModal } from "../TosModal/walletSign";
import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  Heading,
  RightBlockContainer,
} from "./styles";
import { ContentBlockProps } from "./types";

const ContentBlock = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
  icon,
  t,
}: ContentBlockProps) => {
  const dispatch = useAppDispatch();
  const onfidoApplicantId = useAppSelector(selectApplicantId);
  const { address } = useAccount();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const partnerCallbackUrl = useAppSelector(selectCallbackUrl);

  const { chain } = useNetwork();
  const [verifyClicked, setVerifyClicked] = useState(false);
  const walletAddress = address || mockedWalletAddress;

  const chainId = address ? chain?.id : SupportedChainId.POLYGON_MUMBAI;

  const handleOnfidoRedirect = async (email?: string) => {
    if (walletAddress && onfidoApplicantId && chainId) {
      try {
        await onfidoRedirect({
          applicantId: onfidoApplicantId,
          chainId,
          walletAddress,
          callbackUrl: partnerCallbackUrl,
          redirectUrl: "https://app.0xkyc.id/",
          // redirectUrl: "http://localhost:3000/",
          email,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleVerify = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (walletAddress && tosAccepted) {
      setVerifyClicked(true);
    } else if (walletAddress && !tosAccepted) {
      dispatch(toggleTosModal(true));
    } else {
      dispatch(toggleConnectorsModal());
      event.currentTarget.blur();
    }
  };

  const buttonText = walletAddress
    ? button?.enabled.title
    : button?.disabled.title;

  const header = walletAddress ? verifyTitle : title;
  const contentText = walletAddress ? verifyText : content;
  return (
    <RightBlockContainer>
      {!tosAccepted && <TosModal />}

      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              {verifyClicked && walletAddress ? (
                <Fade>
                  <Heading>Please provide your email address</Heading>
                  <Content>
                    For now you can only subscribe to our marketing newsletter,
                    otherwise we will not use your email
                  </Content>
                  <EmailForm handleOnfidoRedirect={handleOnfidoRedirect} />
                </Fade>
              ) : (
                <>
                  <Heading>{t(header)}</Heading>
                  <Content>{t(contentText)}</Content>
                  <ButtonWrapper>
                    <Button onClick={handleVerify}>{t(buttonText)}</Button>
                  </ButtonWrapper>
                </>
              )}
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            {walletAddress ? (
              <ContentWrapper>
                <CardInfo />
              </ContentWrapper>
            ) : (
              <Container>
                <SvgIcon src={icon} width="100%" height="100%" />
              </Container>
            )}
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(ContentBlock);
