import { Card } from "antd";
import styled from "styled-components";

export const Heading = styled("div")`
  display: flex;
  justify-content: space-between;
`;
export const TagContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const StyledText = styled("p")`
  height: 120px;
  font-size: 1rem;
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
  margin: 0;
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
export const StyledCard = styled(Card)`
  overflow-x: hidden;
  margin: 1rem;
  height: 300px;
  cursor: default;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f8f8f8;
    transform: scale(0.95);
  }

  @media screen and (min-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100px;
`;

export const StyledImg = styled.img`
  width: 100%;
`;
