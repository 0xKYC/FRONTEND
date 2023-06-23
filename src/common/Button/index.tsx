import { StyledButton } from "./styles";

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
};
export const Button = ({ children, onClick, color }: Props) => (
  <StyledButton onClick={onClick} color={color}>
    {children}
  </StyledButton>
);
