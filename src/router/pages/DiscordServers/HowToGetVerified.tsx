import { useMediaQuery } from "core/hooks/useMediaQuery";
import { Heading } from "modules/verification/styles";

import { Box, StyledLink, Text } from "../../../modules/profile/Discord/styles";

export const HowToGetVerified = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  return (
    <Box>
      <Heading
        style={{
          marginTop: isMobile ? "0rem" : "2rem",
        }}
      >
        How to get verified
      </Heading>
      <Text style={{ marginTop: "2rem" }}>Follow the next steps:</Text>
      <Text>
        1. Go to our Discord Server by clicking{" "}
        <StyledLink
          href="https://discord.com/invite/p58hBne2Ue"
          target="_blank"
          rel="noopener"
        >
          here
        </StyledLink>
        .
      </Text>
      <Text>
        2. In the Discord server, find the <b>#bot</b> channel and click on it
        to enter.
      </Text>
      <Text>
        3. Follow the instructions provided in the channel to complete the
        verification process.
      </Text>
    </Box>
  );
};
