import { Link } from "react-router-dom";

import { Row } from "antd";

import styled from "styled-components";

export const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Card = styled.div<{ isDiscord?: boolean }>`
  border-radius: 0.5rem;
  padding: 3rem;
  padding-top: 0;
  display: flex;
  align-items: center;
  border: 1px solid rgb(220 220 220);
  flex-direction: column;
  text-align: center;
  background-color: white;
  margin: 2rem;
  transition: 0.2s all ease-in;
  &:hover {
    border: ${(p) => (p.isDiscord ? "1px solid #5865f2" : "1px solid #fb7324")};
  }

  @media only screen and (max-width: 1023px) {
    padding: 1.5rem;
    margin: 1.2rem;
  }
`;

export const CardsWrapper = styled(Row)`
  background-color: rgb(251, 251, 253);

  -webkit-box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);
  -moz-box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);
  box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);

  @media screen and (max-width: 1024px) {
    padding-bottom: 2rem;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 65%;
    height: 95px;
    object-fit: contain;

    @media screen and (min-width: 1024px) {
      width: 50%;
    }
    @media screen and (min-width: 400px) {
      width: 165px;
    }
  }
`;

export const SecondImgWrapper = styled(ImgWrapper)`
  img {
    height: 100px;
    width: 100%;
  }
`;
export const StyledLink = styled(Link)<{ isDiscord?: boolean }>`
  //font family from antd
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  display: block;

  background-color: ${(p) => (p.isDiscord ? "#5865f2" : "#fb7324")};
  color: #fff;
  font-size: 1rem;

  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 1rem 2rem;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(88, 101, 290);
    border: ${(p) => (p.isDiscord ? "1px solid #5865f2" : "1px solid #fb7324")};
  }

  @media screen and (max-width: 890px) {
    padding: 0.7rem 1.4rem;
  }
  @media screen and (max-width: 330px) {
    padding: 0.7rem 1rem;
  }
`;
