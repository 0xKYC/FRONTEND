import METAMASK_ICON_URL from "../assets/metamask-icon.svg";
import { ImageBox, StyledOptionLink, TextBox } from "./styles";

export const InstallMetamaskOption = ({
  isMetamaskConnector,
}: {
  isMetamaskConnector: boolean;
}) => {
  return (
    <StyledOptionLink
      isMetamask={isMetamaskConnector}
      href="https://metamask.io/"
      target="_blank"
      rel="noopener"
    >
      <ImageBox>
        <img
          src={METAMASK_ICON_URL}
          height="36"
          width="36"
          alt="icon"
          style={{ marginLeft: "2.5rem" }}
        />
      </ImageBox>
      <TextBox> MetaMask</TextBox>
    </StyledOptionLink>
  );
};
