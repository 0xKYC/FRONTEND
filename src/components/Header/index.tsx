import {
  Box,
  Burger,
  HeaderSection,
  Label,
  LogoContainer,
  Menu,
  NotHidden,
  Outline,
} from "./styles";
import { Col, Drawer, Row } from "antd";

import { Button } from "../../common/Button";
import Container from "../../common/Container";
import { useAccount, useDisconnect } from "wagmi";

import { useState } from "react";
import { withTranslation } from "react-i18next";

import { ChainSelectionMenu } from "./ChainSelection/Menu";

import { useAppDispatch } from "../../redux/hooks";
import { toggleModal } from "../../redux/features/wallet-modal/walletSlice";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const dispatch = useAppDispatch();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isConnected) {
        disconnect();
      } else {
        dispatch(toggleModal());
        event.currentTarget.blur();
      }
    };

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
            <img
              src="/img/icons/new-logo.png"
              alt="logo"
              width="180px"
              height="54px"
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose} zIndex={50}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
