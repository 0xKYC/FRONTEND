import { Col } from "antd";

import { Button } from "core/UI/Button";
import { Description } from "modules/verification/styles";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { useAppDispatch } from "redux/hooks";

import {
  Card,
  CardsWrapper,
  ImgWrapper,
  SecondImgWrapper,
  StyledLink,
} from "./styles";

export const FlowOptionsCards = () => {
  const dispatch = useAppDispatch();
  const handleWalletConnect = () => {
    dispatch(toggleConnectorsModal());
  };
  return (
    <CardsWrapper
      justify="space-around"
      align="middle"
      style={{ borderRadius: ".5rem" }}
    >
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card>
          <ImgWrapper>
            <img src="/img/icons/new-logo.png" alt="0xKYC logo" />
          </ImgWrapper>

          <Description>Sanctions Check</Description>

          <Button onClick={handleWalletConnect}>Connect Wallet</Button>
        </Card>
      </Col>
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card isDiscord={true}>
          <SecondImgWrapper>
            <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
          </SecondImgWrapper>

          <Description>Uniqueness Verification</Description>

          <StyledLink isDiscord={true} to="/discord-servers">
            Connect Discord
          </StyledLink>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
