import { Col } from "antd";

// import { ENV } from "env";
import { Button } from "core/UI/Button";
import { DiscordButton } from "core/UI/Button/styles";
import { TosModalWeb2 } from "core/UI/Modals/TosModal/PartnerSign";
import { Description } from "modules/verification/styles";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import {
  selectIsTosSigned,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Card, CardsWrapper, ImgWrapper, SecondImgWrapper } from "./styles";

export const FlowOptionsCards = () => {
  const dispatch = useAppDispatch();
  const tosSigned = useAppSelector(selectIsTosSigned);

  const handleWalletConnect = () => {
    dispatch(toggleConnectorsModal());
  };

  const handleDiscordConnect = () => {
    if (!tosSigned) {
      dispatch(toggleTosModal(true));
    } else {
      // window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
    }
  };
  return (
    <CardsWrapper
      justify="space-around"
      align="middle"
      style={{ borderRadius: ".5rem" }}
    >
      <TosModalWeb2 redirect={true} />
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card>
          <ImgWrapper>
            <img src="/img/icons/new-logo.png" alt="0xKYC logo" />
          </ImgWrapper>

          <Description style={{ padding: "1.45rem 0" }}>
            Sanctions Check
          </Description>

          <Button onClick={handleWalletConnect}>Connect Wallet</Button>
        </Card>
      </Col>
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card isDiscord={true}>
          <SecondImgWrapper>
            <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
          </SecondImgWrapper>

          <Description>
            Uniqueness Verification
            <p style={{ fontSize: "1.1rem" }}>(cooming soon)</p>
          </Description>

          <DiscordButton onClick={handleDiscordConnect} disabled>
            Connect Discord
          </DiscordButton>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
