import vContent from "content/VerifiedContent.json";
import { SvgIcon } from "core/UI/SvgIcon";
import { StyledCard } from "modules/profile/Web3/components/VerifiedCard/styles";
import { Checkmark } from "modules/profile/components/Checkmark";
import { Content, Flex } from "modules/profile/styles";

import { Box, Heading, StyledList } from "./styles";

export const VerifiedCard = () => {
  return (
    <StyledCard style={{ margin: "0 auto" }}>
      <Box>
        <Heading>{vContent.title}</Heading>
        <Flex>
          <Checkmark />
          <SvgIcon src="discord-logo-blue.svg" width="120" height="52" />
        </Flex>
      </Box>

      <Content>Discord servers you are verified on:</Content>

      <StyledList>
        <li>0xKYC Discord Server ✅</li>
        <li>Discord Server 1 ✅</li>
        <li>Discord Server 2 ✅</li>
      </StyledList>
    </StyledCard>
  );
};
