import { StyledContainer } from "./styles";

type ContainerProps = {
  border?: boolean;
  padding?: boolean;
  children: React.ReactNode;
};
const Container = ({ border, children, padding }: ContainerProps) => (
  <StyledContainer border={border} padding={padding}>
    {children}
  </StyledContainer>
);

export default Container;
