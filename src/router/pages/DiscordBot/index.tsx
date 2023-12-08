import { ENV } from "env";

import Container from "core/UI/Container";
import { ADD_DISCORD_BOT_VIDEO } from "core/constans/links";
import {
  RedirectDiscordLink,
  RedirectDiscordLinkSecondary,
} from "modules/profile/Discord/components/VerfiedCard/styles";
import { VideoSection } from "modules/verification/components/VideoSection";
import styled from "styled-components";

const DiscordBot = () => {
  return (
    <Container>
      <SectionWrapper style={{ textAlign: "center" }}>
        <H3>
          Secure your servers from bots and duplicate accounts with our Discord
          Bot
        </H3>
        <Text>Easy to implement. Quick verification. 24/7 support.</Text>
        <LinksWrapper>
          <RedirectDiscordLink
            target="_blank"
            rel="noopener noreferrer"
            href={ENV.VITE_APP_DISCORD_BOT_INVITATION_URL}
          >
            Invite Sunscreen Bot
          </RedirectDiscordLink>
          <RedirectDiscordLinkSecondary
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/p58hBne2Ue"
          >
            Join our server
          </RedirectDiscordLinkSecondary>
        </LinksWrapper>

        <VideoSection title="How to implement" src={ADD_DISCORD_BOT_VIDEO} />
      </SectionWrapper>
    </Container>
  );
};

export default DiscordBot;

const Text = styled.p`
  font-size: 1.4rem;
  margin: 2rem;
`;
const H3 = styled.h3`
  font-size: 2.2rem;
  text-align: center;
  background: -webkit-linear-gradient(-50deg, #6f97fd, #232960);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0.5rem;
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 11rem;
    font-size: 3.3rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  margin-bottom: 5rem;

  @media screen and (min-width: 1024px) {
    gap: 2rem;
    margin-bottom: 4rem;
    flex-direction: row;
  }
`;
const SectionWrapper = styled.section`
  margin: 0 auto;
  padding-bottom: 15rem;

  @media screen and (min-width: 1024px) {
    padding-top: 3rem;
  }
`;
