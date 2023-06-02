import { Link } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
`;

const StyledArrowLeft = styled(ArrowLeftOutlined)`
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 10%;

  @media (min-width: 1224px) {
    left: 3%;
  }
`;
export const GoBackArrow = () => {
  return (
    <StyledLink to="/">
      <StyledArrowLeft title="Go back" />
    </StyledLink>
  );
};
