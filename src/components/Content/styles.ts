import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90vh;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 10rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 10rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1.3rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  margin-right: 2rem;
  padding-bottom: 10rem;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 0 5rem;
    margin: 0 auto;
    max-width: 540px;
  }
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

export const Heading = styled.h2`
  font-size: 2.8rem;
`;
