import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { Button } from "common/Button";
import { LoadingCircle } from "common/Spinner";
import { TosModalWeb2 } from "components/TosModal/web2Sign";
import { SupportedChainId } from "constans/chains";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import {
  selectApplicantId,
  selectCallbackUrl,
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { onfidoRedirect } from "service/onfido/onfido.service";

import { CardInfo } from "../../CardInfo";
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  Heading,
  RightBlockContainer,
} from "../../Content/styles";
import { ContentBlockProps } from "../../Content/types";

export const VerificationForPartners = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
}: ContentBlockProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onfidoApplicantId = useAppSelector(selectApplicantId);
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const partnerCallbackUrl = useAppSelector(selectCallbackUrl);

  const chainId = SupportedChainId.POLYGON_MUMBAI;

  const handleOnfidoRedirect = async () => {
    if (mockedWalletAddress && !tosAccepted) {
      dispatch(toggleTosModal(true));
      return;
    }
    if (mockedWalletAddress && onfidoApplicantId && chainId) {
      let redirectUrl = "http://localhost:3000/";
      if (process.env.ENVIRONMENT === "stage") {
        redirectUrl = "https://stage.0xkyc.id/";
      } else if (process.env.ENVIRONMENT === "prod") {
        redirectUrl = "https://app.0xkyc.id/";
      }

      try {
        setIsLoading(true);
        await onfidoRedirect({
          applicantId: onfidoApplicantId,
          chainId,
          walletAddress: mockedWalletAddress,
          callbackUrl: partnerCallbackUrl,
          redirectUrl,
          // redirectUrl: "http://localhost:3000/",
        });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const buttonText = mockedWalletAddress
    ? button?.enabled.title
    : button?.disabled.title;

  const header = mockedWalletAddress ? verifyTitle : title;

  const contentText = mockedWalletAddress ? verifyText : content;
  return (
    <RightBlockContainer>
      {mockedWalletAddress && !tosAccepted && <TosModalWeb2 />}

      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <Heading>{header}</Heading>
              <Content>{contentText}</Content>
              <ButtonWrapper>
                <Button onClick={handleOnfidoRedirect}>
                  {isLoading ? <LoadingCircle /> : buttonText}
                </Button>
              </ButtonWrapper>
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
