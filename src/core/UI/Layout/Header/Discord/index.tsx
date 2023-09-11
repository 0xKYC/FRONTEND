import { Link } from "react-router-dom";

import { Avatar, Row } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { DiscordButton } from "core/UI/Button/styles";
import Container from "core/UI/Container";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import { useGetDiscordUserQuery } from "redux/api/user/userApi";

import { DesktopButtons, HeaderSection } from "../styles";
import { getUserAvatar } from "./getDiscordAvatar";
import { Image, MobileConnectBtn, MobileImage } from "./styles";
import { useToggleAuth } from "./useToggleAuth";

export const DiscordHeader = () => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const { data, isLoading } = useGetDiscordUserQuery();
  console.log(data);

  const userAvatarUrl = getUserAvatar(data);

  const { toggleAuth } = useToggleAuth(data);

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
              <DiscordButton onClick={toggleAuth}>
                {isLoading
                  ? "Loading"
                  : data
                  ? "Disconnect"
                  : "Connect Discord"}
              </DiscordButton>
            </MobileConnectBtn>

            <DesktopButtons>
              {data && (
                <div>
                  <Avatar
                    size={54}
                    src={userAvatarUrl}
                    icon={<UserOutlined />}
                  />
                </div>
              )}

              <DiscordButton onClick={toggleAuth}>
                {isLoading
                  ? "Loading"
                  : data
                  ? "Disconnect"
                  : "Connect Discord"}
              </DiscordButton>
            </DesktopButtons>
          </Row>
        </Container>
      </nav>
    </HeaderSection>
  );
};
