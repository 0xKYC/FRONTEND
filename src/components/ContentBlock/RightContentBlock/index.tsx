import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  RightBlockContainer,
} from "./styles";
import { Col, Row } from "antd";

import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { onfidoRedirect } from "../../../service/onfido.service";
import { selectWalletAddress } from "../../../redux/features/user/walletSlice";
import { selectApplicantId } from "../../../redux/features/user/onfidoSlice";
import { useAppSelector } from "../../../redux/hooks";
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
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {walletAddress}
              <br />
              {onfidoApplicantId}
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => onfidoRedirect(onfidoApplicantId, walletAddress)}
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
