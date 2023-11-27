import { Button } from "antd";

import styled from "styled-components";

export const StyledButton = styled(Button)<{ isopen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 1.2rem 0.8rem;
  background-color: ${(p) => (p.isopen ? "white" : "#fb7324")};
  border: ${(p) => (p.isopen ? "1px solid #fb7324" : "")};
  color: ${(p) => (p.isopen ? "black" : "white")};
  &:hover {
    background-color: white;
    color: black !important;
    border: 1px solid #fb7324;
  }
`;

export const StyledLabel = styled("span")`
  display: none !important;
  @media screen and (min-width: 700px) {
    display: inline !important;
  }
`;
