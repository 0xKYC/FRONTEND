import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Col } from "antd";

import { Button } from "core/UI/Button";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import { Description } from "modules/verification/styles";
import { Flow } from "redux/api/onfido/types";
import { setFlow } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import {
  Card,
  CardsWrapper,
  ImgWrapper,
  SecondImgWrapper,
} from "../ConnectionOptions/styles";
import { FlowCard } from "../FlowCard";

type FlowType = {
  index: number;
  name: Flow;
  description: string;
};
const FLOWS: FlowType[] = [
  {
    index: 0,
    name: "sunscreen",
    description: "Uniqueness Verification",
  },
  {
    index: 1,
    name: "sanctionsCheck",
    description: "Sanctions Check",
  },
];
export const FlowSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery("(max-width:1024px)");
  console.log(isMobile);
  const [selectedFlow, setSelectedFlow] = useState(FLOWS[0].index);
  console.log(selectedFlow);
  const handleFlowChange = (tabIndex: number) => {
    setSelectedFlow(tabIndex);
  };

  const handleFlowSelect = (flow: Flow) => {
    dispatch(setFlow(flow));
    navigate(`/${flow}`);
  };

  return (
    <CardsWrapper
      justify="space-around"
      align="middle"
      style={{ borderRadius: ".5rem" }}
    >
      {/* desktop */}

      {!isMobile && (
        <>
          {" "}
          <Col lg={11} md={24} sm={24} xs={24}>
            <Card>
              <SecondImgWrapper>
                <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
              </SecondImgWrapper>

              <Description>Uniqueness Verification</Description>

              <Button
                onClick={() => {
                  handleFlowSelect("sunscreen");
                }}
              >
                Start Sunscreen flow
              </Button>
            </Card>
          </Col>
          <Col lg={11} md={24} sm={24} xs={24}>
            <Card>
              <ImgWrapper>
                <img src="/img/icons/new-logo.png" alt="0xKYC logo" />
              </ImgWrapper>

              <Description>Sanctions Check</Description>

              <Button
                onClick={() => {
                  handleFlowSelect("sanctionsCheck");
                }}
              >
                Start 0xKYC flow
              </Button>
            </Card>
          </Col>
        </>
      )}

      {/* mobile */}
      {FLOWS.map((flow) => (
        <button key={flow.name} onClick={() => handleFlowChange(flow.index)}>
          {flow.name}
        </button>
      ))}
      {isMobile &&
        FLOWS.map((flow) => {
          return (
            selectedFlow === flow.index && (
              <FlowCard
                title={flow.name}
                description={flow.description}
                benefits={["1", "2"]}
              />
              // <Card>
              //   <SecondImgWrapper>
              //     <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
              //   </SecondImgWrapper>

              //   <Description>{flow.description}</Description>

              //   <Button
              //     onClick={() => {
              //       handleFlowSelect(flow.name);
              //     }}
              //   >
              //     Start {flow.name} flow
              //   </Button>
              // </Card>
            )
          );
        })}
    </CardsWrapper>
  );
};
