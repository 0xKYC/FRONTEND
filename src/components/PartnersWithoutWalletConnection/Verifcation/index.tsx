import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import { Button } from "common/Button";
import { LoadingCircle } from "common/Spinner";
import { useHandleOnfidoRedirect } from "common/utils/handleOnfidoRedirect";
import { TosModalWeb2 } from "components/TosModal/web2Sign";

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
              <CardInfo />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};
