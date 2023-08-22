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
  CustomVerificationWrapper,
  Heading,
} from "./styles";
import { HomePageProps } from "./types";

const CustomVerificationPage = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
}: HomePageProps) => {
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
    <CustomVerificationWrapper>
      {mockedWalletAddress && !tosAccepted && <TosModalWeb2 />}

      <Fade direction="right">
        <Row justify="space-between" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            <Heading>{header}</Heading>
            <Content>{contentText}</Content>
            <ButtonWrapper>
              <Button onClick={handleOnfidoRedirectWithTosCheck}>
                {isLoading ? <LoadingCircle /> : buttonText}
              </Button>
            </ButtonWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <InformationCard isUniquenessFlow={Boolean(mockedWalletAddress)} />
          </Col>
        </Row>
      </Fade>
    </CustomVerificationWrapper>
  );
};

export default CustomVerificationPage;
