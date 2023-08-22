import { useState } from "react";

import { Avatar, Row } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { DiscordButton } from "core/UI/Button/styles";
import Container from "core/UI/Container";

import {
  DesktopButtons,
  HeaderSection,
  Image,
  LogoContainer,
  MobileConnectBtn,
  MobileImage,
} from "../styles";

export const DiscordHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <HeaderSection id="intro">
      <nav>
        <Container>
          <Row justify="space-between">
            <LogoContainer to="/" aria-label="homepage">
              <Image
                src="/img/icons/new-logo.png"
                alt="logo"
                width="180px"
                height="54px"
              />
              <MobileImage
                src="/img/icons/0xkyc-icon.png"
                alt="logo"
                width="54px"
                height="54px"
              />
            </LogoContainer>

            <MobileConnectBtn>
              <DiscordButton onClick={handleLogin}>
                {loggedIn ? "Disconnect" : "Connect Discord"}{" "}
              </DiscordButton>
            </MobileConnectBtn>

            <DesktopButtons>
              {loggedIn && (
                <div>
                  <Avatar size={54} icon={<UserOutlined />} />
                </div>
              )}

              <DiscordButton onClick={handleLogin}>
                {loggedIn ? "Disconnect" : "Connect Discord"}
              </DiscordButton>
            </DesktopButtons>
          </Row>
        </Container>
      </nav>
    </HeaderSection>
  );
};
