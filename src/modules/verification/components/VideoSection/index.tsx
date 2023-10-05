import ReactPlayer from "react-player/youtube";

import styled from "styled-components";

import { Heading } from "../Services/styles";

export const VideoSection = () => {
  return (
    <Wrapper>
      {/* <div
        style={{
          border: "1px solid #fb7324",
          padding: "1rem 2rem",
          borderRadius: ".5rem",
          width: "75%",
        }}
      > */}
      <Box>
        <Content>
          <Heading style={{ textAlign: "center" }}>
            Watch quick video about 0xKYC!
          </Heading>
          <div
            style={{
              display: "flex",
              marginTop: "3rem",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=QHm8tHxXlN4"
              controls={true}
            />
          </div>
        </Content>
      </Box>
    </Wrapper>
  );
};

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
