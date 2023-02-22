import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  Heading,
  RightBlockContainer,
} from "./styles";
import { Col, Row } from "antd";
import { Button } from "../../common/Button";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { onfidoRedirect } from "../../service/onfido/onfido.service";
import { useAppSelector } from "../../redux/hooks";
import { useAccount, useNetwork } from "wagmi";
import { selectApplicantId } from "../../redux/features/user/userSlice";

import { withTranslation } from "react-i18next";

import { CardInfo } from "../CardInfo";

import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { EmailForm } from "../EmailForm";

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
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const [verifyClicked, setVerifyClicked] = useState(false);

  const handleOnfidoRedirect = async () => {
    if (address && onfidoApplicantId && chain) {
      try {
        await onfidoRedirect(onfidoApplicantId, address, chain.id);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleVerify = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (address) {
      setVerifyClicked(true);
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
              {verifyClicked ? (
                <Fade>
                  <Heading>Please provide your email address</Heading>
                  <Content>
                    We collect your email address to contact you regarding
                    processing and transactions
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
            {isAuth ? (
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
