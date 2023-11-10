import styled from "styled-components";

export const TutorialLayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 0.5rem 10rem 0.5rem;
`;

export const TutorialVideoSection = styled("div")`
  text-align: center;
  width: 100%;
  padding: 0px 18px;

  @media screen and (min-width: 768px) {
    max-width: 730px;
  }
`;

export const TutorialVideoNav = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const TutorialVideoContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const VideoLayout = styled("div")`
  position: relative;
  width: 100%;
  //maintain aspect ratio of 16:9
  padding-bottom: 56.25%;
`;

export const Title = styled("h3")`
  font-size: 1.7rem;
  margin-bottom: 0;

  @media screen and (min-width: 1200px) {
    font-size: 1.9rem;
    margin-top: 1.5rem;
  }
`;

export const VideoFrame = styled("iframe")`
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
