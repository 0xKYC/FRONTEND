import vContent from "content/VerifiedContent.json";
import { Button } from "core/UI/Button";
import { SvgIcon } from "core/UI/SvgIcon";
import { StyledCard } from "modules/profile/Web3/components/VerifiedCard/styles";
import { Checkmark } from "modules/profile/components/Checkmark";
import { Content, Flex } from "modules/profile/styles";
import { useGetDiscordUserQuery } from "redux/api/user/userApi";

import { Box, Heading, StyledList } from "./styles";

export const VerifiedCard = () => {
  const { data: user, isLoading } = useGetDiscordUserQuery();
  if (isLoading) return <p>Loading</p>;
  if (!user) return <p>Error while fetching user!</p>;
  return (
    <StyledCard style={{ margin: "0 auto" }}>
      <Box>
        <Heading>{vContent.title}</Heading>
        <Flex>
          <Checkmark />
          <SvgIcon src="discord-logo-blue.svg" width="120" height="52" />
        </Flex>
      </Box>
      {user.discordGuilds.length > 0 ? (
        <>
          <Content>Discord servers you are verified on:</Content>

          <StyledList>
            <li>0xKYC Discord Server ✅</li>
            <li>Discord Server 1 ✅</li>
            <li>Discord Server 2 ✅</li>
          </StyledList>
        </>
      ) : (
        <Button>Join our Discord Server!</Button>
      )}
    </StyledCard>
  );
};
