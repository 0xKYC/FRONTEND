import {
  Box,
  HeaderSection,
  Image,
  LogoContainer,
  MobileConnectBtn,
  MobileImage,
  NotHidden,
} from "./styles";
import { Row } from "antd";

import { Button } from "../../common/Button";
import Container from "../../common/Container";
import { useAccount, useDisconnect } from "wagmi";
import { withTranslation } from "react-i18next";

import { ChainSelectionMenu } from "./ChainSelection/Menu";

import { useAppDispatch } from "../../redux/hooks";
import { toggleModal } from "../../redux/features/network/networkSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isConnected) {
      disconnect();
    } else {
      dispatch(toggleModal());
      event.currentTarget.blur();
    }
  };

  const MenuItem = () => {
    return (
      <Box>
        <Button onClick={handleOpen} color={address ? "#FFFFFFff" : ""}>
          {address ? `Disconnect ...${address.slice(-6)}` : "Connect Wallet"}
        </Button>
        <ChainSelectionMenu />
      </Box>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Image
              src="/img/icons/new-logo.png"
              alt="logo"
              width="180px"
              height="54px"
            />
            <MobileImage
              src="/img/icons/0xkyc-icon.png"
              alt="logo"
              width="54px"
              height="54px"
            />
          </LogoContainer>
          <MobileConnectBtn>
            <Button color={address ? "#FFFFFFff" : ""} onClick={handleOpen}>
              {" "}
              {isConnected ? "Disconnect" : "Connect"}
            </Button>
          </MobileConnectBtn>

          <NotHidden>
            <MenuItem />
          </NotHidden>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
