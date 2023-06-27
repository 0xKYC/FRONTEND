import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";

import { Button } from "common/Button";
import { LoadingCircle } from "common/Spinner";
import { SvgIcon } from "common/SvgIcon";
import { useHandleOnfidoRedirect } from "common/utils/handleOnfidoRedirect";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";

import { CardInfo } from "../CardInfo";
import { TosModal } from "../TosModal/walletSign";
import { EmailForm } from "./EmailForm";
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
  const [isVerifyClicked, setVerifyClicked] = useState(false);
  const dispatch = useAppDispatch();
  const { handleOnfidoRedirect, walletAddress, tosAccepted, isLoading } =
    useHandleOnfidoRedirect();

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
              {isVerifyClicked && walletAddress ? (
                <Fade>
                  <Heading>Please provide your email address</Heading>
                  <Content style={{ marginBottom: "1rem" }}>
                    We use it to inform you about the details of your
                    verification
                  </Content>
                  <EmailForm handleOnfidoRedirect={handleOnfidoRedirect} />
                </Fade>
              ) : (
                <>
                  <Heading>{t(header)}</Heading>
                  <Content>{t(contentText)}</Content>
                  <ButtonWrapper>
                    <Button onClick={handleVerify}>
                      {isLoading ? <LoadingCircle /> : buttonText}
                    </Button>
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
