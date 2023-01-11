import { StyledCard, StyledText } from "./styles";

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
        <a href="mailto:@gmail.com">here </a>
        when you see any bugs, issues or improvements.
      </StyledText>
    </StyledCard>
  );
};
