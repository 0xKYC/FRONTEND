import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children, padding }: ContainerProps) => (
  <StyledContainer border={border} padding={padding}>
    {children}
  </StyledContainer>
);

export default Container;
