import styled from "styled-components";

export const Box = styled.div`
  text-align: center;
`;
export const H3 = styled.h3`
  font-size: 1.7rem;
  margin-top: 3rem;

  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;
export const Text = styled.p`
  font-size: 1.3rem;
  @media screen and (min-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled.a`
  color: #5865f2;

  &:hover,
  &:focus,
  &:active {
    color: #5865f2;
    text-decoration: none;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #5865f2;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  &:active::before {
    background-color: #5865f2;
  }
  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  position: relative;
  transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;

  letter-spacing: 0.025em;
  text-decoration: none;
  padding: 0.1em;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 0.95rem;
`;
