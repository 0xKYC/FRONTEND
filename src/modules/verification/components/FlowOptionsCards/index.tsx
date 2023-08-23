import { Col } from "antd";

import { Button } from "core/UI/Button";
import METAMASK_ICON from "core/UI/Modals/assets/metamask-icon.svg";
import WALLETCONNECT_ICON from "core/UI/Modals/assets/walletconnect.svg";
import { Description } from "modules/verification/styles";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { useAppDispatch } from "redux/hooks";

import DISCORD_LOGO from "./discord-logo-blue.svg";
import {
  Card,
  CardsWrapper,
  ImgWrapper,
  LogosWrapper,
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
          <LogosWrapper>
            <img
              src={METAMASK_ICON}
              width="50"
              height="30"
              alt="Metamask Icon"
            />
            <img
              src={WALLETCONNECT_ICON}
              width="35"
              height="30"
              alt="Wallet Connect Icon"
            />
          </LogosWrapper>

          <ImgWrapper>
            <img src="/img/icons/new-logo.png" alt="0xKYC logo" />
          </ImgWrapper>
          <Description>Sanctions Check</Description>

          <Button onClick={handleWalletConnect}>Connect Wallet</Button>
        </Card>
      </Col>
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card isDiscord={true}>
          <img src={DISCORD_LOGO} width="150" height="25" alt="Discord logo" />

          <SecondImgWrapper>
            <img src="/img/sunscreen-logo.png" alt="Sunscreen logo" />
          </SecondImgWrapper>
          <Description>Uniqueness Verification</Description>

          <StyledLink isDiscord={true} to="/discord-verification">
            Connect Discord
          </StyledLink>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
