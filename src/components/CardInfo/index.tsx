import { StyledCard, StyledLink, StyledText } from "./styles";

export const CardInfo = () => {
  return (
    <StyledCard
      bordered={false}
      headStyle={{ backgroundColor: "#f1f2f3" }}
      bodyStyle={{
        backgroundColor: "#f1f2f3",
        borderRadius: "0 0 40px",
      }}
    >
      <StyledText style={{ fontWeight: "500" }}>
        Your data is not being shared with our clients!
      </StyledText>
      <StyledText>
        Only the result of the check is shared, shared information includes:
        <ul>
          <li>if you are verified </li>
          <li>if you are at least 18 years old</li>
        </ul>
      </StyledText>
      <StyledText>
        Please contact{" "}
        <StyledLink href="mailto:support@0xkyc.id">support@0xkyc.id</StyledLink>{" "}
        if you have any questions or require support or join our{" "}
        <StyledLink href="https://discord.gg/p58hBne2Ue">Discord</StyledLink>{" "}
        for a live support chat
      </StyledText>
    </StyledCard>
  );
};
