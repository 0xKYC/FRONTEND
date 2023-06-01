import { withTranslation } from "react-i18next";

import { Row } from "antd";
import { useAccount, useDisconnect } from "wagmi";

import { Button } from "common/Button";
import Container from "common/Container";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import {
  reset,
  selectMockedWalletAddress,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ChainSelectionMenu } from "./ChainSelection/Menu";
import {
  Box,
  HeaderSection,
  Image,
  ImgWrapper,
  LogoContainer,
  LogoText,
  MobileConnectBtn,
  MobileImage,
  NotHidden,
} from "./styles";

const Header = () => {
  const dispatch = useAppDispatch();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
    },
  });
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);

  const handleConnectionButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (isConnected) {
      disconnect();
    } else {
      dispatch(toggleConnectorsModal());
      event.currentTarget.blur();
    }
  };

  const MenuItem = () => {
    return (
      <Box>
        {mockedWalletAddress ? (
          <ImgWrapper>
            <img
              width={26}
              height={26}
              src="/img/IS-logo-2.png"
              alt="insert stonks"
            />{" "}
            <LogoText
              style={{
                margin: 0,
                fontSize: "1.2rem",
                marginLeft: ".5rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Insert Stonks
            </LogoText>
          </ImgWrapper>
        ) : (
          <>
            <Button
              onClick={handleConnectionButtonClick}
              color={address ? "#FFFFFFff" : ""}
            >
              {address
                ? `Disconnect ...${address.slice(-6)}`
                : "Connect Wallet"}
            </Button>
            <ChainSelectionMenu />
          </>
        )}
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
          {!mockedWalletAddress && (
            <MobileConnectBtn>
              <Button
                color={address ? "#FFFFFFff" : ""}
                onClick={handleConnectionButtonClick}
              >
                {" "}
                {isConnected ? "Disconnect" : "Connect"}
              </Button>
              <ChainSelectionMenu />
            </MobileConnectBtn>
          )}

          <NotHidden>
            <MenuItem />
          </NotHidden>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
