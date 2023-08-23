import { useState } from "react";
import { Link } from "react-router-dom";

import { Avatar, Row } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { DiscordButton } from "core/UI/Button/styles";
import Container from "core/UI/Container";
import { useMediaQuery } from "core/hooks/useMediaQuery";

import { DesktopButtons, HeaderSection } from "../styles";
import { Image, MobileConnectBtn, MobileImage } from "./styles";

export const DiscordHeader = () => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <HeaderSection id="intro">
      <nav>
        <Container>
          <Row justify="space-between">
            <Link to="/" aria-label="homepage">
              <Image
                src="/img/sunscreen-logo-crop.png"
                alt="logo"
                width={isMobile ? "180px" : "220px"}
                height="54px"
              />
              <MobileImage
                src="/img/sunscreen-small.png"
                alt="logo"
                width="60px"
                height="60px"
              />
            </Link>

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
