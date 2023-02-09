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
      <StyledText>
        This is a demo product only, please contact us{" "}
        <StyledLink href="mailto:@gmail.com">here</StyledLink> when you see any
        bugs, issues or improvements.
      </StyledText>
    </StyledCard>
  );
};
