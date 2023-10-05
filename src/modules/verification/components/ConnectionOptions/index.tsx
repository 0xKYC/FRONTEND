import { Col } from "antd";

// import { ENV } from "env";
import { DiscordButton, StyledButton } from "core/UI/Button/styles";
import { TosModalWeb2 } from "core/UI/Modals/TosModal/PartnerSign";
import { SvgIcon } from "core/UI/SvgIcon";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import {
  selectIsTosSigned,
  toggleTosModal,
} from "redux/features/modal/tosSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import discordLogo from "./discord-logo-blue.svg";
import { Card, CardsWrapper, ImgWrapper, LogosWrapper } from "./styles";

export const ConnectionOptions = () => {
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
      <Col lg={11} md={11} sm={24} xs={24}>
        <Card>
          <LogosWrapper>
            <img
              src="/img/new-metamask.png"
              alt="Metamask logo"
              width="160"
              height="50"
            />
            <SvgIcon src="walletconnect-logo.svg" width="150" height="40" />
          </LogosWrapper>

          {/* <Description style={{ padding: "1.45rem 0" }}>
            Sanctions Check
          </Description> */}

          <StyledButton onClick={handleWalletConnect}>
            Connect Wallet
          </StyledButton>
        </Card>
      </Col>
      <Col lg={11} md={11} sm={24} xs={24}>
        <Card isDiscord={true} style={{ paddingTop: "2.3rem" }}>
          <ImgWrapper>
            <img src={discordLogo} alt="Discord logo" />
          </ImgWrapper>

          {/* <Description>
            Uniqueness Verification
            <p style={{ fontSize: "1.1rem" }}>(cooming soon)</p>
          </Description> */}

          <DiscordButton onClick={handleDiscordConnect} disabled>
            Connect Discord
          </DiscordButton>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
