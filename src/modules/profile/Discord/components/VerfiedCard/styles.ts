import styled from "styled-components";

export const Box = styled("div")`
  display: flex;
`;
export const Heading = styled.h2`
  font-size: 1.8rem;

  @media screen and (min-width: 360px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 400px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.2rem;
    margin-top: 0.4rem;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0rem;

  li {
    /* padding-left: 2rem; */
    position: relative;
    font-size: 1.1rem;
    color: #18216d;
    margin: 0.5rem 0;
    /* & > * {
      display: inline-block;
      vertical-align: top;
    }

    &::before {
      position: absolute;
      content: "L";
      left: 0;
      top: 0;
      text-align: center;
      color: orange;
      font-family: arial;
      transform: scaleX(-1) rotate(-35deg);
    } */
  }
`;
