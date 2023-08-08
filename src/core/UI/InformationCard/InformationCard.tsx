import { UniquenessFlowInformation } from "./UniquenessFlowInformation";
import { StyledCard, StyledLink, StyledList, StyledText } from "./styles";

type Props = {
  isUniquenessFlow?: boolean;
};
export const InformationCard = ({ isUniquenessFlow }: Props) => {
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

      {isUniquenessFlow ? (
        <UniquenessFlowInformation />
      ) : (
        <>
          {" "}
          <StyledText>
            Only the result of the check is shared, check result includes:
          </StyledText>
          <StyledList>
            <li>if you are verified </li>
            <li>if you are at least 18 years old</li>
            <li>your unique identifier (UUID)</li>
          </StyledList>
        </>
      )}

      <StyledText>
        Please contact{" "}
        <StyledLink href="mailto:support@0xkyc.id">support@0xkyc.id</StyledLink>{" "}
        if you have any questions or require support or join our{" "}
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/p58hBne2Ue"
        >
          Discord
        </StyledLink>{" "}
        for a live support chat.
      </StyledText>
    </StyledCard>
  );
};
