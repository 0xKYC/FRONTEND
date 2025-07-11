import styled from "styled-components";

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1.1rem;

  @media screen and (min-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0;

  /* margin-top: 1.8rem; */
  @media screen and (min-width: 360px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 400px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.2rem;
    margin-top: 1.5rem;
  }
`;

export const ButtonWrapper = styled("div")`
  max-width: 100%;
`;

export const Container = styled("div")`
  max-width: 540px;
  margin-bottom: 7rem;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const SectionWrapper = styled("section")`
  margin: 0 auto;
  padding-bottom: 15rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 10rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;

  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1025px) {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

export const CustomVerificationWrapper = styled(SectionWrapper)`
  @media only screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
