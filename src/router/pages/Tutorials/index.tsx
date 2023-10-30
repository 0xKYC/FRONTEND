import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import ReactPlayer from "react-player/youtube";

import { Divider } from "antd";

import { Heading } from "modules/verification/styles";
import styled from "styled-components";

import { InfoText } from "../InsertStonks";

const text = "Description of the video";
const videos = [
  {
    title: "How to do Sunscreen",
    text,
    videoSrc: "https://www.youtube.com/watch?v=QHm8tHxXlN4",
  },
  {
    title: "How to do 0xKYC",
    text,
    videoSrc: "https://www.youtube.com/watch?v=QHm8tHxXlN4",
  },
  {
    title: "How to add Discord Bot",
    text,
    videoSrc: "https://www.youtube.com/watch?v=QHm8tHxXlN4",
  },
];

const Tutorials = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsExploding(true);
    }
  };

  const [isExploding, setIsExploding] = useState(false);

  return (
    <div
      style={{ marginTop: "3rem", paddingBottom: "10rem", textAlign: "center" }}
    >
      <Heading>Welcome on Tutorial Page!</Heading>

      {isExploding && (
        <ConfettiExplosion
          onComplete={() => setIsExploding(false)}
          duration={1800}
          height="100vh"
        />
      )}
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        {videos.map((video, idx) => {
          return (
            <p
              onClick={() => handleClickScroll(`section-${idx}`)}
              style={{ cursor: "pointer", fontWeight: 400, fontSize: "1.1rem" }}
            >
              {idx + 1}. {video.title}
            </p>
          );
        })}
      </div>
      <Divider />
      {videos.map((video, idx) => {
        return (
          <div
            id={`section-${idx.toString()}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Title>{video.title}</Title>
            <p style={{ fontSize: "1.2rem" }}>{video.text}</p>

            <ReactPlayer url={video.videoSrc} controls={true} />
            <Divider />
          </div>
        );
      })}

      <InfoText>
        If you encounter any difficulties, don't hesitate to reach out to{" "}
        <a href="mailto:support@0xkyc.id">our support team</a>.
      </InfoText>
    </div>
  );
};

export default Tutorials;

const Title = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 0;

  @media screen and (min-width: 1200px) {
    font-size: 1.9rem;
    margin-top: 1.5rem;
  }
`;
