import { Card } from "antd";
import styled from "styled-components";

export const StyledText = styled("p")`
  font-size: 1rem;
`;

export const StyledCard = styled(Card)`
  margin: 0 auto;
  max-width: 540px;
  min-height: 380px;
  @media only screen and (max-width: 1024px) {
    min-height: 200px;
  }
`;
