import { Card } from "antd";

import styled from "styled-components";

export const Heading = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;
export const TagContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const StyledTitle = styled("p")`
  font-size: 1rem;
  font-weight: 400;
`;
export const StyledText = styled("p")`
  font-size: 0.9rem;
  line-height: 1.51;
`;
export const StyledTag = styled("div")`
  color: #f3f2f1;
  padding: 0.4rem 0.8rem;
  background-color: gray;
  border-radius: 4px;
`;

export const Text = styled("p")`
  font-size: 0.7rem;
  color: white;
`;

export const StyledLink = styled("a")`
  color: #0077be;
  font-size: 1rem;
  margin-left: auto;

  &:hover,
  &:focus {
    color: #0077be;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;
export const Box = styled("div")`
  height: 140px;
  display: flex;

  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 990px) {
    padding: 0;
    height: 170px;
  }
  @media screen and (min-width: 1024px) {
    height: 120px;
  }
`;
export const StyledCard = styled(Card)`
  margin: 0.8rem;

  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f8f8f8;
    transform: scale(0.95);
  }
`;

export const ImageWrapper = styled.div<{ biggerImg?: boolean }>`
  width: ${(props) => (props.biggerImg ? "120px" : "90px")};
  /* background-color: red; */
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
