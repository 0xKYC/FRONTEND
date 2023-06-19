import { Modal } from "antd";

import styled from "styled-components";

export const StyledModal = styled(Modal)`
  /* @media screen and (min-width: 1024px) {
    margin-top: 10rem;
  } */
`;

export const StyledP = styled.p<{ biggerMargin?: boolean }>`
  font-size: 1.1rem;
  margin: ${(props) => (props.biggerMargin ? ".5rem 1rem" : ".5rem")};

  @media screen and (min-width: 1024px) {
    margin: ${(props) => (props.biggerMargin ? ".5rem 4rem" : ".5rem")};
  }
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const StyledInfo = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;
export const Box = styled.div`
  padding-bottom: 0.3rem;
  text-align: center;
`;
