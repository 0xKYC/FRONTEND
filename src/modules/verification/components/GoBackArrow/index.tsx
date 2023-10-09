import { Tooltip } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledArrowLeft = styled(ArrowLeftOutlined)`
  font-size: 1.1rem;
  position: absolute;
  top: -10%;
  left: 0;
  @media (min-width: 1224px) {
    top: -5%;
  }
`;

type Props = {
  handleStepBack: () => void;
  text: string;
};
export const GoBackArrow = ({ handleStepBack, text }: Props) => {
  return (
    <Tooltip title={text}>
      <StyledArrowLeft title="Go back" onClick={handleStepBack} />
    </Tooltip>
  );
};
