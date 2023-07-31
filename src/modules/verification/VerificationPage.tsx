import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Col, Row } from "antd";

import { Button } from "core/UI/Button";
import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { TosModalNormal } from "core/UI/Modals/TosModal/NormalSign";
import { LoadingCircle } from "core/UI/Spinner";
import { SvgIcon } from "core/UI/SvgIcon";
import { useHandleOnfidoRedirect } from "modules/verification/hooks/useHandleOnfidoRedirect";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";

import { EmailForm } from "./components/EmailForm";
import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  Heading,
  RightBlockContainer,
} from "./styles";
import { VerificationPageProps } from "./types";

const VerificationPage = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
  icon,
  t,
}: VerificationPageProps) => {
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
      {!tosAccepted && <TosModalNormal />}
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
                <InformationCard />
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

export default withTranslation()(VerificationPage);
