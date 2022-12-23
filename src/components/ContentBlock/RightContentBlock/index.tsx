import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  RightBlockContainer,
} from "./styles";
import { Col, Modal, Row } from "antd";

import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { onfidoRedirect } from "../../../service/onfido.service";
import { useAppSelector } from "../../../redux/hooks";
import { selectWalletAddress } from "../../../redux/features/wallet/walletSlice";
import { selectApplicantId } from "../../../redux/features/wallet/onfidoSlice";
import { useState } from "react";
import { withTranslation } from "react-i18next";


const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const walletAddress = useAppSelector(selectWalletAddress);
  const onfidoApplicantId = useAppSelector(selectApplicantId);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const error = () => {
    Modal.error({
      centered: true,
      closable: true,
      maskClosable: true,
      title: "Connect wallet first!",
    });
  };

  const handleOnfidoRedirect = () => {
    if (walletAddress && onfidoApplicantId) {
      onfidoRedirect(onfidoApplicantId, walletAddress);
    } else {
      error();
    }
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={handleOnfidoRedirect}

                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
