import styled, { css } from "styled-components";

const StyledOption = css`
  text-align: center;
  padding: 1rem 1.4rem;
  margin: 0 1.5rem;
  cursor: pointer;
  color: #18216d;
  width: 80%;
  background-color: #f1f2f3;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.6rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-color: #e6e7e8;
  }
  @media screen and (max-width: 400px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

export const StyledOptionBtn = styled.button`
  ${StyledOption};
  font-weight: normal;
`;

export const StyledOptionLink = styled.a`
  ${StyledOption};
  font-weight: 800;
`;
