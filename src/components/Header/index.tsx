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
import { useAccount } from "wagmi";

import { useState } from "react";
import { withTranslation } from "react-i18next";

import { ChainSelectionMenu } from "./ChainSelection/Menu";
import { useWeb3Modal } from "@web3modal/react";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const { open } = useWeb3Modal();

  const { address, isConnected } = useAccount();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const handleOpen = () => {
      if (isConnected) {
        open({ route: "Account" });
      } else {
        open({ route: "ConnectWallet" });
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
