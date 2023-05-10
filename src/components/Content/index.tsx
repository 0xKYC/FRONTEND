import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";
import { useAccount, useNetwork } from "wagmi";

import { Button } from "common/Button";
import { SvgIcon } from "common/SvgIcon";
import { SupportedChainId } from "constans/chains";
import { toggleModal } from "redux/features/network/networkSlice";
import {
  selectApplicantId,
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { onfidoRedirect } from "service/onfido/onfido.service";

import { CardInfo } from "../CardInfo";
import { EmailForm } from "../EmailForm";
import { TosModal } from "../TosModal";
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
  const { chain } = useNetwork();
  const [verifyClicked, setVerifyClicked] = useState(false);
  const walletAddress = address || mockedWalletAddress;

  const chainID = address ? chain?.id : SupportedChainId.POLYGON_MUMBAI;
  const handleOnfidoRedirect = async (email?: string) => {
    if (walletAddress && onfidoApplicantId && chainID) {
      try {
        await onfidoRedirect(
          onfidoApplicantId,
          walletAddress,
          chainID,
          window.location.href,
          email,
        );
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleVerify = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (walletAddress && tosAccepted) {
      setVerifyClicked(true);
    } else {
      dispatch(toggleModal());
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
                    We collect your email address to contact you regarding
                    critical transactional features of your user profile, it is
                    optional, but recommended
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
