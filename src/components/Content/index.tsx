import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  RightBlockContainer,
  StyledText,
} from "./styles";
import { Card, Col, Row } from "antd";

import { Button } from "../../common/Button";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { onfidoRedirect } from "../../service/onfido.service";
import { useAppSelector } from "../../redux/hooks";

import { selectApplicantId } from "../../redux/features/wallet/onfidoSlice";

import { withTranslation } from "react-i18next";
import { useConnectMetamask } from "../../common/hooks/useConnectMetamask";
import { ReactEventHandler } from "react";

const ContentBlock = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
  cardInfo,
  cardContact,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const onfidoApplicantId = useAppSelector(selectApplicantId);

  const { connectMetamask, walletAddress } = useConnectMetamask();

  const isAuth = Boolean(walletAddress);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOnfidoRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAuth) {
      onfidoRedirect(onfidoApplicantId, walletAddress);
    } else {
      connectMetamask();
      event.currentTarget.blur();
    }
  };

  const buttonText = isAuth ? button?.enabled.title : button?.disabled.title;

  const header = isAuth ? verifyTitle : title;
  const contentText = isAuth ? verifyText : content;

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(header)}</h6>
              <Content>{t(contentText)}</Content>

              <ButtonWrapper>
                <Button onClick={handleOnfidoRedirect}>{t(buttonText)}</Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            {isAuth ? (
              <Container>
                <Card
                  style={{ maxWidth: "540px" }}
                  title="Information"
                  bordered={false}
                  headStyle={{ backgroundColor: "#f1f2f3" }}
                  bodyStyle={{
                    backgroundColor: "#f1f2f3",
                    borderRadius: "0 0 40px",
                  }}
                >
                  <p>{t(cardInfo)}</p>

                  <StyledText>{t(cardContact)}</StyledText>
                </Card>
              </Container>
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
