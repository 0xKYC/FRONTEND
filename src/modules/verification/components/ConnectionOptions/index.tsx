import { Col } from "antd";

// import { ENV } from "env";
import { Button } from "core/UI/Button";
import { DiscordButton } from "core/UI/Button/styles";
import { TosModalWeb2 } from "core/UI/Modals/TosModal/PartnerSign";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";
import { loadLocalStorageTos } from "redux/localStorage";

import discordLogo from "./discord-logo-blue.svg";
import { Card, CardsWrapper, ImgWrapper, LogosWrapper } from "./styles";

export const ConnectionOptions = () => {
  const dispatch = useAppDispatch();
  const tosSigned = loadLocalStorageTos();

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
            <img src="/img/svg/metamask-icon.svg" alt="0xKYC logo" />
            {/* <SvgIcon src="metamask-icon.svg" width="80" height="40" /> */}
            <img src="/img/svg/walletconnect.svg" alt="0xKYC logo" />
          </LogosWrapper>

          {/* <Description style={{ padding: "1.45rem 0" }}>
            Sanctions Check
          </Description> */}

          <Button onClick={handleWalletConnect}>Connect Wallet</Button>
        </Card>
      </Col>
      <Col lg={11} md={11} sm={24} xs={24}>
        <Card isDiscord={true}>
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
