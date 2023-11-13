import { Link } from "react-router-dom";

import { StyledRedirectLink } from "modules/profile/Web3/components/VerifiedCard/styles";
import styled from "styled-components";

export const Box = styled("div")`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
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
    margin: 0.8rem 0;
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

export const RedirectDiscordLink = styled(StyledRedirectLink)`
  background-color: #5865f2;

  border: 1px solid #edf3f5;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(88, 101, 290);
    border: 1px solid #5865f2;
    background-color: #5865f2;
  }
`;

export const RedirectDiscordLinkSecondary = styled(StyledRedirectLink)`
  background-color: white;

  border: 1px solid #5865f2;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  color: #232960;
  &:hover,
  &:active,
  &:focus {
    color: #232960;
    border: 1px solid #4352f0;
    background-color: white;
  }
`;

export const RedirectDiscordLinkReact = styled(Link)`
  background-color: white;

  border: 1px solid #5865f2;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  color: #232960;

  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border-radius: 4px;
  padding: 13px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #232960;
    border: 1px solid #4352f0;
    background-color: white;
  }
`;
