import { Link } from "react-router-dom";

import styled from "styled-components";

export const FooterMainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 1024px) {
    padding-top: 1rem;
    padding-bottom: 0.2rem;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2.2rem;

  @media (max-width: 768px) {
    .footer-icons-row {
      justify-content: center;
      flex-direction: column;
      gap: 0.7rem;
    }
  }
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #18216d;
  font-size: 1rem;
  width: 70%;
`;

// TODO: need to check transition effect
export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

// TODO: need to check transition effect
export const StyledLink = styled("a")`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
export const Chat = styled("p")`
  color: #18216d;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  font-size: 1.3rem;
  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
