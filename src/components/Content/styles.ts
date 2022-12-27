import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 6rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 10rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 8rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  padding-bottom: 10rem;
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  max-width: 100%;
`;
