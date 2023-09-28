import { Card } from "antd";

import { ChainId, SupportedChainId } from "core/constans/chains";
import styled from "styled-components";

export const StyledLink = styled("a")<{ chainId: ChainId }>`
  display: block;
  text-align: center;
  background: ${(props) =>
    props.chainId === SupportedChainId.SEPOLIA ||
    SupportedChainId.BNB ||
    SupportedChainId.BNB_TESTNET
      ? "#0077be"
      : props.chainId === SupportedChainId.POLYGON_MUMBAI ||
        SupportedChainId.POLYGON
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
      props.chainId === SupportedChainId.SEPOLIA ||
      SupportedChainId.BNB ||
      SupportedChainId.BNB_TESTNET
        ? "#0077be"
        : props.chainId === SupportedChainId.POLYGON_MUMBAI ||
          SupportedChainId.POLYGON
        ? "#8247e5"
        : "#3B226A"};
  }
`;

export const StyledCard = styled(Card)`
  @media screen and (min-width: 500px) {
    min-width: 340px;
  }
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  @media screen and (min-width: 1100px) {
    width: 570px;
    padding: 0.5rem 1.4rem;
  }
`;

export const StyledRedirectLink = styled.a`
  display: block;
  text-align: center;
  background: #fb7324;
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
    border: 1px solid #fb7324;
    background: #fb7324;
  }
`;
