import { Button } from "antd";

import styled from "styled-components";

export const StyledButton = styled(Button)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 1.2rem 0.8rem;
  background-color: ${(p) => (p.isOpen ? "white" : "#fb7324")};
  border: ${(p) => (p.isOpen ? "1px solid #fb7324" : "")};
  color: black;
  &:hover {
    background-color: white;
    color: black !important;
    border: 1px solid #fb7324;
  }
`;
