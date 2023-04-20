import { withTranslation } from "react-i18next";

import { Label } from "../TextArea/styles";
import { InputProps } from "../types";
import { Container, StyledInput } from "./styles";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput placeholder={t(placeholder)} name={name} id={name} onChange={onChange} />
  </Container>
);

export default withTranslation()(Input);
