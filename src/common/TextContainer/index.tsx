import ReactMarkdown from "react-markdown";

import { GoBackArrow } from "common/GoBackArrow";
import rehypeRaw from "rehype-raw";

import { StyledContainer, StyledTitle } from "./style";

type Props = {
  text: string;
  title: string;
};

const TextContainer = ({ text, title }: Props) => {
  return (
    <StyledContainer style={{ textAlign: "left", color: "black" }}>
      <GoBackArrow />

      <StyledTitle>{title}</StyledTitle>
      <ReactMarkdown
        children={text}
        rehypePlugins={[rehypeRaw]}
        className="markdown"
      />
    </StyledContainer>
  );
};
export default TextContainer;
