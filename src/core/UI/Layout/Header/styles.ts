import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
`;

export const Image = styled.img`
  object-fit: contain;
  display: none;
  @media screen and (min-width: 520px) {
    display: block;
  }
`;
export const LogoWithoutWalletConnection = styled.img`
  display: block;
`;
export const MobileImage = styled.img`
  display: block;
  @media screen and (min-width: 520px) {
    display: none;
  }
`;
export const IsLogo = styled.img`
  display: block;
  @media screen and (min-width: 890px) {
    display: none;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;
export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const MobileConnectBtn = styled("div")`
  @media only screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  display: none;
`;
export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const DesktopButtons = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
