import { useState } from "react";

import { Col } from "antd";

import { Button } from "core/UI/Button";
import { Flow } from "redux/api/onfido/types";

import {
  Card,
  CardsWrapper,
  ImgWrapper,
  SecondImgWrapper,
} from "../../ConnectionOptions/styles";
import { FlowCard } from "./FlowCard";
import { Description } from "./FlowCard/styles";
import { FLOWS } from "./data";
import { BtnGroup, StyledBtn } from "./styles";

type Props = {
  handleFlowSelect: (flow: Flow, redirectUrl: string) => void;
};
export const CardsDesktop = ({ handleFlowSelect }: Props) => {
  return (
    <CardsWrapper
      justify="space-around"
      align="middle"
      style={{ borderRadius: ".5rem" }}
    >
      {" "}
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card>
          <SecondImgWrapper>
            <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
          </SecondImgWrapper>

          <Description>Uniqueness Verification</Description>

          <Button
            onClick={() => {
              handleFlowSelect("sunscreen", "uniqueness");
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
              handleFlowSelect("sanctionsCheck", "0xkyc");
            }}
          >
            Start 0xKYC flow
          </Button>
        </Card>
      </Col>
    </CardsWrapper>
  );
};

export const CardsMobile = ({ handleFlowSelect }: Props) => {
  const [selectedFlow, setSelectedFlow] = useState(FLOWS[0].index);

  const handleFlowChange = (tabIndex: number) => {
    setSelectedFlow(tabIndex);
  };

  return (
    <>
      <BtnGroup>
        {FLOWS.map((flow) => (
          <StyledBtn
            selected={selectedFlow === flow.index}
            key={flow.index}
            onClick={() => handleFlowChange(flow.index)}
          >
            {flow.title}
          </StyledBtn>
        ))}
      </BtnGroup>
      <CardsWrapper
        justify="space-around"
        align="middle"
        style={{ borderRadius: ".5rem", maxWidth: "440px" }}
      >
        {FLOWS.map((flow) => {
          return (
            selectedFlow === flow.index && (
              <FlowCard
                handleFlowSelect={handleFlowSelect}
                redirectUrl={flow.redirectUrl}
                src={flow.src}
                title={flow.title}
                description={flow.description}
                name={flow.name}
                benefits={["1", "2"]}
              />
            )
          );
        })}
      </CardsWrapper>
    </>
  );
};
