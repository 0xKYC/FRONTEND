import styled from "styled-components";

import { SectionWrapper } from "../styles";

export const StyledSection = styled(SectionWrapper)`
  text-align: center;
  padding-top: 0.3rem;

  @media screen and (min-width: 500px) {
    padding-top: 2rem;
  }
`;
