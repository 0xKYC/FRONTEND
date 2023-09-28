import { Tooltip } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledArrowLeft = styled(ArrowLeftOutlined)`
  font-size: 1.1rem;
  position: absolute;
  top: -10%;
  left: 0;
  @media (min-width: 1224px) {
    top: 0%;
  }
`;

type Props = {
  handleStepBack: () => void;
};
export const GoBackArrow = ({ handleStepBack }: Props) => {
  return (
    <Tooltip title="Go back to email form">
      <StyledArrowLeft title="Go back" onClick={handleStepBack} />
    </Tooltip>
  );
};
