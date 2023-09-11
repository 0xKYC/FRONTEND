import { Link, useLocation } from "react-router-dom";

import { Row } from "antd";
import { useAccount, useDisconnect } from "wagmi";

import { Button } from "core/UI/Button";
import Container from "core/UI/Container";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import {
  reset,
  selectMockedWalletAddress,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import {
  Box,
  DesktopButtons,
  HeaderSection,
  Image,
  ImgWrapper,
  IsLogo,
  LogoText,
  LogoWithoutWalletConnection,
  MobileConnectBtn,
  MobileImage,
} from "../styles";
import { ChainSelectionMenu } from "./ChainSelection/Menu";

export const Web3Header = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const isInsertStonksInfoPage = pathname === "/insert-stonks";
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
    <HeaderSection id="intro">
      <nav>
        <Container>
          <Row justify="space-between">
            <Link to="/" aria-label="homepage">
              {mockedWalletAddress ? (
                <LogoWithoutWalletConnection
                  src="/img/icons/new-logo.png"
                  alt="logo"
                  width="180px"
                  height="54px"
                />
              ) : (
                <>
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
                </>
              )}
            </Link>
            {!mockedWalletAddress && !isInsertStonksInfoPage && (
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
            {!isInsertStonksInfoPage && (
              <DesktopButtons>
                <MenuItem />
              </DesktopButtons>
            )}

            {mockedWalletAddress && (
              <IsLogo
                width={26}
                height={26}
                src="/img/IS-logo-2.png"
                alt="insert stonks"
              />
            )}
          </Row>
        </Container>
      </nav>
    </HeaderSection>
  );
};
