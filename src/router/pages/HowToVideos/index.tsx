import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";
import ReactPlayer from "react-player/youtube";

import { Collapse, Divider, Space } from "antd";

import { Heading } from "modules/verification/styles";
import styled from "styled-components";

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

const HowToVideos = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      setIsExploding(true);
    }
  };

  const [isExploding, setIsExploding] = useState(false);

  const onChange = () => {
    setIsExploding(true);
  };

  return (
    <div
      style={{ marginTop: "3rem", paddingBottom: "10rem", textAlign: "center" }}
    >
      <Heading>Welcome on Tutorial Page!</Heading>
      {/* <p style={{ marginTop: "1rem", fontSize: "1.4rem" }}>Sections:</p> */}
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
    </div>
    // <div
    //   style={{ minHeight: "80vh", padding: "5rem 0", paddingBottom: "15rem" }}
    // >
    // {isExploding && (
    //   <ConfettiExplosion
    //     onComplete={() => setIsExploding(false)}
    //     duration={1800}
    //     height="100vh"
    //   />
    // )}
    //   <Space direction="vertical" style={{ width: "100%" }}>
    //     {videos.map((elm, index) => (
    //       <Collapse
    //         key={index}
    //         onChange={onChange}
    //         defaultActiveKey={["0"]}
    //         style={{ margin: "0 10rem", textAlign: "center" }}
    //       >
    //         <Collapse.Panel key={index} header={elm.title}>
    //           <div
    //             style={{
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    // gap: "1rem",
    // padding: "1rem 0",
    //             }}
    //           >
    //             <p> {elm.text}</p>

    //             <ReactPlayer url={elm.videoSrc} controls={true} />
    //           </div>
    //         </Collapse.Panel>
    //       </Collapse>
    //     ))}
    //   </Space>
    // </div>
  );
};

export default HowToVideos;

const Title = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 0;

  @media screen and (min-width: 1200px) {
    font-size: 1.9rem;
    margin-top: 1.5rem;
  }
`;
