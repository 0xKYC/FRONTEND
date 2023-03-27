import { StyledContainer, StyledText, StyledTitle } from "./style";

interface Props {
  text: string;
  title: string;
}
const TextContainer = ({ text, title }: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledText> &emsp; &emsp; &emsp;{text}</StyledText>
    </StyledContainer>
  );
};
export default TextContainer;
