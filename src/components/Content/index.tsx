import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  RightBlockContainer,
} from "./styles";
import { Col, Row } from "antd";
import { Button } from "../../common/Button";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { onfidoRedirect } from "../../service/onfido/onfido.service";
import { useAppSelector } from "../../redux/hooks";
import { useAccount } from "wagmi";
import { selectApplicantId } from "../../redux/features/wallet/onfidoSlice";

import { withTranslation } from "react-i18next";
import { useConnectWallet } from "../../common/hooks/useConnectWallet";
import { CardInfo } from "../CardInfo";

const ContentBlock = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const onfidoApplicantId = useAppSelector(selectApplicantId);
  const { address } = useAccount();
  const isAuth = Boolean(address);
  const { open } = useConnectWallet();

  const handleOnfidoRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (address && onfidoApplicantId) {
      onfidoRedirect(onfidoApplicantId, address);
    } else {
      open({ route: "ConnectWallet" });
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
                <CardInfo />
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
