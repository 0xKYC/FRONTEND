import styled from "styled-components";

export const StyledContainer = styled("div")`
  position: relative;
  width: 100%;
  min-height: 80vh;
  max-width: 1000px;
  margin: 5rem auto 0;
  padding: 0 5rem 12rem;

  @media only screen and (max-width: 768px) {
    padding: 0 18px 12rem;
  }

  @media only screen and (max-width: 414px) {
    padding: 0 18px 12rem;
  }
`;
export const StyledTitle = styled("h6")`
  margin-bottom: 3rem;
  font-size: 2.3rem;
  text-align: center;
`;

export const StyledText = styled("p")`
  line-height: 2.1rem;
  font-size: 1.1rem;
`;
