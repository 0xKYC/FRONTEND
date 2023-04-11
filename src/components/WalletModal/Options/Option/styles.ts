import styled, { css } from "styled-components";

const StyledOption = css`
  display: flex;
  justify-content: center;
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
  @media screen and (max-width: 420px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const StyledOptionBtn = styled.button<{ isMetamask: boolean }>`
  ${StyledOption};
  font-weight: normal;

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isMetamask ? "none" : "flex")};
  }
`;

export const StyledOptionLink = styled.a<{ isMetamask: boolean }>`
  ${StyledOption};
  font-weight: 800;
  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isMetamask ? "none" : "flex")};
  }
`;

export const ImageBox = styled.div`
  width: 20%;
  margin-right: 2rem;

  @media screen and (max-width: 540px) {
    margin-right: 1rem;
  }
`;

export const TextBox = styled.div`
  width: 40%;
  margin-right: 5rem;

  @media screen and (max-width: 540px) {
    width: 100%;
    margin: 0;
  }
`;
