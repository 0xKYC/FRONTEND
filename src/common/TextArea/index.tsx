import { withTranslation } from "react-i18next";

import { InputProps } from "../types";
import { Label, StyledContainer, StyledTextArea } from "./styles";

const TextArea = ({ name, placeholder, onChange, t }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea placeholder={t(placeholder)} id={name} name={name} onChange={onChange} />
  </StyledContainer>
);

export default withTranslation()(TextArea);
