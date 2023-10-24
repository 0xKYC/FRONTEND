import vContent from "content/VerifiedContent.json";
import { SvgIcon } from "core/UI/SvgIcon";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import { StyledCard } from "modules/profile/Web3/components/VerifiedCard/styles";
import { Checkmark } from "modules/profile/components/Checkmark";
import { Flex } from "modules/profile/styles";

import { Box, Heading, RedirectDiscordLink, Wrapper } from "./styles";

export const VerifiedCard = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <StyledCard style={{ margin: "0 auto" }}>
      <Box>
        <Heading>{vContent.title}</Heading>
        <Flex>
          <Checkmark />
          <SvgIcon src="discord-logo-blue.svg" width="120" height="52" />
        </Flex>
      </Box>
      <Wrapper>
        <SvgIcon
          src="developer.svg"
          width={isMobile ? "250" : "300"}
          height="150"
        />
        {/* {user.discordAccount.discordGuilds.length > 0 ? (
        <>
          <Content>Discord servers you are verified on:</Content>

          <StyledList>
            <li>0xKYC Discord Server ✅</li>
            <li>Discord Server 1 ✅</li>
            <li>Discord Server 2 ✅</li>
          </StyledList>
        </>
      ) : ( */}
        <RedirectDiscordLink
          href="https://discord.com/invite/p58hBne2Ue"
          target="_blank"
          rel="noopener"
        >
          Join our Discord Server!
        </RedirectDiscordLink>
      </Wrapper>
    </StyledCard>
  );
};
