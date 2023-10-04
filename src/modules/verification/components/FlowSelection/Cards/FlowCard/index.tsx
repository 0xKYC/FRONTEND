import { Flow } from "redux/api/onfido/types";

import {
  ImgWrapper,
  SecondImgWrapper,
} from "../../../ConnectionOptions/styles";
import {
  Description,
  StyledBtn, // PriceContainer,
  // RichText,
  // Title,
  Wrapper,
} from "./styles";

type Props = {
  title: string;
  description: string;
  benefits: string[];
  name: Flow;
  handleFlowSelect: (flow: Flow, redirectUrl: string) => void;
  src: string;
  redirectUrl: string;
  isOutlined?: boolean;
};

export const FlowCard = ({
  title,
  description,
  benefits,
  isOutlined,
  src,
  handleFlowSelect,
  name,
  redirectUrl,
}: Props) => {
  return (
    <Wrapper isOutlined={isOutlined}>
      {title === "Sunscreen" ? (
        <SecondImgWrapper>
          <img src={src} alt={description} />
        </SecondImgWrapper>
      ) : (
        <ImgWrapper>
          {" "}
          <img src={src} alt={description} />
        </ImgWrapper>
      )}
      <Description>{description}</Description>
      {/* <PriceContainer>
        <RichText>
          <ul style={{ textAlign: "left" }}>
            {benefits.map((singleBenefit, idx) => (
              <li key={idx}>{singleBenefit}</li>
            ))}
          </ul>
        </RichText>
      </PriceContainer> */}

      <StyledBtn onClick={() => handleFlowSelect(name, redirectUrl)}>
        Start {title}
      </StyledBtn>
    </Wrapper>
  );
};
