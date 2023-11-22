import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { Divider } from "antd";

import {
  ADD_DISCORD_BOT_VIDEO,
  SANCTIONS_CHECK_TUTORIAL,
  SUNSCREEN_CHECK_TUTORIAL,
} from "core/constans/links";
import { Heading } from "modules/verification/styles";

import { InfoText } from "../InsertStonks";
import {
  Title,
  TutorialLayoutContainer,
  TutorialVideoContainer,
  TutorialVideoNav,
  TutorialVideoSection,
  VideoFrame,
  VideoLayout,
} from "./style";

const videos = [
  {
    title: "How to add Sunscreen Discord Bot",
    text: "How to add our Discord Bot to your server",
    videoSrc: ADD_DISCORD_BOT_VIDEO,
  },
  {
    title: "How to use Sunscreen Verification",
    text: "How to Get Verified Onchain with Sunscreen Flow",
    videoSrc: SUNSCREEN_CHECK_TUTORIAL,
  },
  {
    title: "How to use 0xKYC Verification",
    text: "How to Get Verified Onchain with 0xKYC Flow",
    videoSrc: SANCTIONS_CHECK_TUTORIAL,
  },
  // {
  //   title: "How to do 0xKYC",
  //   text,
  //   videoSrc: "https://www.youtube.com/watch?v=QHm8tHxXlN4",
  // },
  // {
  //   title: "How to add Discord Bot",
  //   text,
  //   videoSrc: "https://www.youtube.com/watch?v=QHm8tHxXlN4",
  // },
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
    <TutorialLayoutContainer>
      <TutorialVideoSection>
        <Heading>Welcome to the Tutorial Page!</Heading>
        {isExploding && (
          <ConfettiExplosion
            onComplete={() => setIsExploding(false)}
            duration={1800}
            height="100vh"
          />
        )}
        <TutorialVideoNav>
          {videos.map((video, idx) => {
            return (
              <p
                key={idx}
                onClick={() => handleClickScroll(`section-${idx}`)}
                style={{
                  cursor: "pointer",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                }}
              >
                {idx + 1}. {video.title}
              </p>
            );
          })}
        </TutorialVideoNav>
        <Divider />
        {videos.map((video, idx) => {
          return (
            <TutorialVideoContainer key={idx} id={`section-${idx.toString()}`}>
              <Title>{video.title}</Title>
              <p style={{ fontSize: "1.2rem" }}>{video.text}</p>
              <VideoLayout>
                <VideoFrame src={video.videoSrc} />
              </VideoLayout>
              <Divider />
            </TutorialVideoContainer>
          );
        })}

        <InfoText>
          If you encounter any difficulties, please contact{" "}
          <a href="mailto:support@0xkyc.id">our support team</a>.
        </InfoText>
      </TutorialVideoSection>
    </TutorialLayoutContainer>
  );
};

export default Tutorials;
