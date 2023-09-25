import { Button } from "core/UI/Button";

import {
  Description,
  PriceContainer,
  RichText,
  Title,
  Wrapper,
} from "./styles";

type Props = {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
};

export const FlowCard = ({
  title,
  description,
  benefits,
  isOutlined,
}: Props) => {
  return (
    <Wrapper isOutlined={isOutlined}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        <RichText>
          <ul style={{ textAlign: "left" }}>
            {benefits.map((singleBenefit, idx) => (
              <li key={idx}>{singleBenefit}</li>
            ))}
          </ul>
        </RichText>
      </PriceContainer>

      <Button>Contact Sales</Button>
    </Wrapper>
  );
};
