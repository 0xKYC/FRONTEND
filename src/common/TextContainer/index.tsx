import { GoBackArrow } from "common/GoBackArrow";

import { StyledContainer, StyledTitle } from "./style";

type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const TextContainer = ({ title, children }: Props) => {
  return (
    <StyledContainer
      style={{ textAlign: "left", color: "black", marginTop: "2rem" }}
      className="markdown"
    >
      <GoBackArrow />

      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};
export default TextContainer;
