import { StyledOptionLink } from "./styles";
import METAMASK_ICON_URL from "../../assets/metamask.png";
export const InstallMetamaskOption = () => {
  return (
    <StyledOptionLink
      href="https://metamask.io/"
      target="_blank"
      rel="noopener"
    >
      <img
        src={METAMASK_ICON_URL}
        height="36"
        width="36"
        alt="icon"
        style={{ marginRight: "1rem" }}
      />
      MetaMask
    </StyledOptionLink>
  );
};
