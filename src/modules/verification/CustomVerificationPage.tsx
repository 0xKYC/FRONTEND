import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { Button } from "core/UI/Button";
import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { TosModalWeb2 } from "core/UI/Modals/TosModal/PartnerSign";
import { LoadingCircle } from "core/UI/Spinner";
import { useHandleOnfidoRedirect } from "modules/verification/hooks/useHandleOnfidoRedirect";

import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  Heading,
  RightBlockContainer,
} from "./styles";
import { VerificationPageProps } from "./types";

const CustomVerificationPage = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
}: VerificationPageProps) => {
  const {
    handleOnfidoRedirectWithTosCheck,
    mockedWalletAddress,
    tosAccepted,
    isLoading,
  } = useHandleOnfidoRedirect();

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
                <Button onClick={handleOnfidoRedirectWithTosCheck}>
                  {isLoading ? <LoadingCircle /> : buttonText}
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <InformationCard
                isUniquenessFlow={Boolean(mockedWalletAddress)}
              />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default CustomVerificationPage;
