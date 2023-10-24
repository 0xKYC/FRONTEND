import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";
import ReactPlayer from "react-player/youtube";

import { Collapse } from "antd";

import CollapsePanel from "antd/es/collapse/CollapsePanel";

const text = "Description of the video";

const HowToVideos = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    border: "none",
  };
  const [isExploding, setIsExploding] = useState(false);

  const onChange = () => {
    setIsExploding(true);
  };

  return (
    <div style={{ minHeight: "50vh", padding: "5rem 0" }}>
      <Collapse
        onChange={onChange}
        defaultActiveKey={["1"]}
        style={{ margin: "5rem 10rem", textAlign: "center" }}
      >
        {isExploding && (
          <ConfettiExplosion
            onComplete={() => setIsExploding(false)}
            duration={1800}
            height="100vh"
          />
        )}
        <CollapsePanel header="How to get verified using Sunscreen" key="1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>{text}</p>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=QHm8tHxXlN4"
              controls={true}
            />
          </div>
        </CollapsePanel>
        <CollapsePanel header="How to get verified using 0xKYC" key="2">
          <p>{text}</p>
        </CollapsePanel>
        <CollapsePanel header="How to add the discord bot" key="3">
          <p>{text}</p>
        </CollapsePanel>
      </Collapse>
      ;
    </div>
  );
};

export default HowToVideos;
