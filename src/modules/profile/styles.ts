import styled from "styled-components";

export const Content = styled("p")`
  margin: 1rem 0;
  font-size: 1.05rem;
  inline-size: 250px;
  overflow-wrap: break-word;
  @media screen and (min-width: 728px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 400px) {
    inline-size: auto;
  }
`;
export const Box = styled("div")`
  display: flex;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  margin-right: 2rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 3rem 0;
    margin: 0 auto;
    max-width: 540px;
  }
`;

export const BlockWrapper = styled("section")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 70vh;
  margin: 0 auto;
  padding-bottom: 15rem;
  padding-top: 5rem;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 10rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 10rem;
  }
`;

export const Flex = styled.div`
  display: flex;

  gap: 10px;

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const P = styled.p`
  text-align: center;
  font-size: 1rem;
`;

export const PolygonLink = styled.a`
  text-decoration: underline;
  display: inline-block;
  font-size: 1rem;
`;

export const ErrorText = styled.div`
  min-height: 50vh;
  text-align: center;
  margin-top: 5rem;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0rem;

  li {
    position: relative;
    font-size: 1.1rem;
    color: #18216d;
    margin: 0.5rem 0;
  }
`;
