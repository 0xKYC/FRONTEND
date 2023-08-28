import { StyledLink, Text } from "./styles";

export const NotVerifiedDiscordPage = () => {
  return (
    <>
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
    </>
  );
};
