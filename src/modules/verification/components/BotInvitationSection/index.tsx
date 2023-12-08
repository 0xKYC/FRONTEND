import { Divider } from "antd";
import { ENV } from "env";

import {
  RedirectDiscordLink,
  RedirectDiscordLinkReact,
} from "modules/profile/Discord/components/VerfiedCard/styles";
import styled from "styled-components";

export const BotInvitationSection = () => {
  return (
    <Wrapper>
      <Divider />
      <H2>Add our Discord bot to your server</H2>
      <LinkWrapper>
        <RedirectDiscordLink
          target="_blank"
          rel="noopener noreferrer"
          href={ENV.VITE_APP_DISCORD_BOT_INVITATION_URL}
        >
          Invite Sunscreen Bot
        </RedirectDiscordLink>
        <RedirectDiscordLinkReact to="/discord-bot">
          Learn more
        </RedirectDiscordLinkReact>
      </LinkWrapper>
      <Divider />
    </Wrapper>
  );
};

const LinkWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 3rem;
  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;
const H2 = styled.h2`
  font-size: 2.2rem;

  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;
