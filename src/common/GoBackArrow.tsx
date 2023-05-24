import { Link } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const StyledArrowLeft = styled(ArrowLeftOutlined)`
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;
export const GoBackArrow = () => {
  return (
    <StyledLink to="/">
      <StyledArrowLeft title="Go back" />
    </StyledLink>
  );
};
