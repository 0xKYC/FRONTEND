import { useNavigate } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

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
  const navigate = useNavigate();
  return <StyledArrowLeft title="Go back" onClick={() => navigate(-1)} />;
};
