import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90vh;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 10rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 10rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;

  padding-bottom: 10rem;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 10rem;
    margin: 0 auto;
    max-width: 540px;
  }
`;

export const StyledText = styled("p")`
  font-size: 1rem;
`;

export const ButtonWrapper = styled("div")`
  max-width: 100%;
`;

export const Container = styled("div")`
  max-width: 540px;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
