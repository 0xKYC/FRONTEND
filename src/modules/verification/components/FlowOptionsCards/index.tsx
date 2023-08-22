import { Col } from "antd";

import { Button } from "core/UI/Button";
import { SvgIcon } from "core/UI/SvgIcon";
import { Description, Heading } from "modules/verification/styles";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { useAppDispatch } from "redux/hooks";

import { Card, CardsWrapper, LogosWrapper, StyledLink } from "./styles";

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
            <SvgIcon src="/metamask-icon.svg" width="50" height="30" />
            <SvgIcon src="/walletconnect.svg" width="50" height="30" />
          </LogosWrapper>

          <Heading>0xKYC</Heading>
          <Description>(Sanctions Check)</Description>

          <Button onClick={handleWalletConnect}>Connect Wallet</Button>
        </Card>
      </Col>
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card isDiscord={true}>
          <SvgIcon src="/discord-logo-blue.svg" width="200" height="30" />

          <Heading>Sunscreen</Heading>
          <Description>(Uniqueness Verification)</Description>

          <StyledLink isDiscord={true} to="/discord-verification">
            Connect Discord
          </StyledLink>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
