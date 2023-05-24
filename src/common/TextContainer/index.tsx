import { GoBackArrow } from "common/GoBackArrow";

import { StyledContainer, StyledText, StyledTitle } from "./style";

type Props = {
  text: string;
  title: string;
};

const TextContainer = ({ text, title }: Props) => {
  return (
    <StyledContainer>
      <GoBackArrow />

      <StyledTitle>{title}</StyledTitle>
      <StyledText> &emsp; &emsp; &emsp;{text}</StyledText>
    </StyledContainer>
  );
};
export default TextContainer;
