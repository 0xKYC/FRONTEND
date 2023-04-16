import { ContainerProps } from "../types";
import { StyledContainer } from "./styles";

const Container = ({ border, children, padding }: ContainerProps) => (
  <StyledContainer border={border} padding={padding}>
    {children}
  </StyledContainer>
);

export default Container;
