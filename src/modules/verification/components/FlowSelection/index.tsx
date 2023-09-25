import { useNavigate } from "react-router-dom";

import { Col } from "antd";

import { Button } from "core/UI/Button";
import { Description } from "modules/verification/styles";
import { setFlow } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import {
  Card,
  CardsWrapper,
  ImgWrapper,
  SecondImgWrapper,
} from "../ConnectionOptions/styles";
import { SelectionCardsWrapper } from "./styles";

export const FlowSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSunscreenFlow = () => {
    dispatch(setFlow("sunscreen"));
  };
  const handleSanctionsFlow = () => {
    dispatch(setFlow("0xkyc"));
  };
  return (
    <CardsWrapper
      justify="space-around"
      align="middle"
      style={{ borderRadius: ".5rem" }}
    >
      <Col lg={11} md={24} sm={24} xs={24}>
        <Card>
          <SecondImgWrapper>
            <img src="/img/sunscreen-black.png" alt="Sunscreen logo" />
          </SecondImgWrapper>

          <Description>Uniqueness Verification</Description>

          <Button onClick={handleSunscreenFlow}>Start Sunscreen flow</Button>
        </Card>
      </Col>

      <Col lg={11} md={24} sm={24} xs={24}>
        <Card>
          <ImgWrapper>
            <img src="/img/icons/new-logo.png" alt="0xKYC logo" />
          </ImgWrapper>

          <Description>Sanctions Check</Description>

          <Button onClick={handleSanctionsFlow}>Start 0xKYC flow</Button>
        </Card>
      </Col>
    </CardsWrapper>
  );
};
