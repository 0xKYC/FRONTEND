import styled from "styled-components";

import { Heading } from "../Services/styles";

type Props = {
  src: string;
  title?: string;
};
export const VideoSection = ({ title = "Watch our video!", src }: Props) => {
  return (
    <Wrapper>
      <Heading style={{ textAlign: "center" }}>{title}</Heading>

      <Box>
        <Content>
          <Flex>
            <VideoFrame src={src} title={title} allowFullScreen />
          </Flex>
        </Content>
      </Box>
    </Wrapper>
  );
};
const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  min-height: 30vh;

  @media screen and (min-width: 600px) {
    min-height: 50vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 4rem;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Box = styled.div`
  padding: 1em;
  border: 0.25em solid #18216d;
  position: relative;
  width: 100%;
  @media screen and (max-width: 400px) {
    padding: 1em 0.5em;
  }
  @media screen and (min-width: 800px) {
    width: 90%;
  }
  @media screen and (min-width: 1024px) {
    width: 65%;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: #fff;
  }

  &::before {
    top: -0.3em; // let it overlap a bit to prevent thin line which could appear during scaling in some browsers etc.
    bottom: -0.3em;
    left: 1.2em;
    right: 1.2em;
  }

  &::after {
    left: -0.3em;
    right: -0.3em;
    top: 1.2em;
    bottom: 1.2em;
  }
`;
