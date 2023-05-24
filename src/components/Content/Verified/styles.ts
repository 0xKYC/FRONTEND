import { Card } from "antd";

import styled from "styled-components";

import { ChainId, SupportedChainId } from "../../../constans/chains";

export const Content = styled("p")`
  margin: 1rem 0;
  font-size: 1.2rem;
`;
export const Box = styled("div")`
  display: flex;
`;

export const StyledLink = styled("a")<{ chainId: ChainId }>`
  display: block;
  text-align: center;
  background: ${(props) =>
    props.chainId === SupportedChainId.GOERLI
      ? "#0077be"
      : props.chainId === SupportedChainId.POLYGON_MUMBAI
      ? "#8247e5"
      : "#3B226A"};
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active {
    color: #fff;
    border: 1px solid #0077be;
    background: ${(props) =>
      props.chainId === SupportedChainId.GOERLI
        ? "#0077be"
        : props.chainId === SupportedChainId.POLYGON_MUMBAI
        ? "#8247e5"
        : "#3B226A"};
  }
`;
export const StyledCard = styled(Card)`
  min-width: 340px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  @media screen and (min-width: 1100px) {
    width: 570px;
    padding: 2rem 1.4rem;
  }
`;
export const ContentWrapper = styled("div")`
  position: relative;
  margin-right: 2rem;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 5rem;
    margin: 0 auto;
    max-width: 540px;
    padding-bottom: 0;
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
`;
